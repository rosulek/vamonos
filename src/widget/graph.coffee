# vertexSetupFunc(vertex, $node)
#    called when a vertex is created
#
# vertexUpdateFunc(vertex, $node) 
#   called on every render on every vertex
#
# showVertices{ var: { show($node), hide($node)} } 
#   show called on vertices that equal var.
#   hide called on vertices that don't equal var.
#
# showEdges{ "s->v": { show($connection), hide($connection } }
#   show called on edges from s to v
#   hide called on all other edges
#
# inputVars{ var: defaultVertexId } 
#   input vertex variables and their default value as a vertex id string

class Graph

    # ----------- styles -------------- #

    normalPaintStyle:
            lineWidth: 2
            strokeStyle:"gray"

    deletionPaintStyle:
            strokeStyle: "red"
            lineWidth: 4

    additionPaintStyle:
            dashstyle: "2 2"
            strokeStyle: "blue"
            lineWidth: 2

    # ------------ normal widget methods -------------- #

    constructor: ({container, @varName, @defaultGraph, @inputVars, 
        @showVertices, @showEdges, 
        @vertexSetupFunc, @vertexUpdateFunc, 
        @edgeLabel, @edgeStyle}) ->

        @inputVars  ?= {}
        @connections = []
        @nodes       = []

        @$outer  = Vamonos.jqueryify(container)
        @$inner  = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)

        @theGraph = @defaultGraph ? new Vamonos.DataStructure.Graph()
        @inputVars[k] = @theGraph.vertex(v) for k,v of @inputVars

        @resize()
        @jsPlumbInit()

   
    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(key)       for key of @showVertices
            @viz.registerVariable(key, true) for key of @inputVars
            for e of @showEdges
                @viz.registerVariable(v) for v in e.split(/<?->?/)
            @viz.setVariable(@varName, Vamonos.clone(@defaultGraph), true)

        when "render"
            [frame, type] = options
            @updateGraph(frame[@varName])
            @runShowFuncs(frame)
            @previousFrame = frame

        when "displayStart" then @mode = "display"
        when "displayStop"  then @clearDisplay()
        when "editStart"    then @editModeOn()
        when "editStop"     then @editModeOff()

    # ----------------- node, edge modification api ------------------ #

    addVertex: (x, y) ->
        vtx = {id: @nextVertexId(), x, y}
        @theGraph.addVertex(vtx)
        $new = @addNode(vtx)
        @updateGraph(@theGraph)
        @resize()
        @select($new)

    removeVertex: (vid) ->
        @deselect()
        @removeNode(vid)
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined 
        @resize()

    addEdge: (sourceId, targetId) ->
        @theGraph.addEdge(sourceId, targetId)
        @addConnection(sourceId, targetId)
        @resetEdge()

    removeEdge: (sourceId, targetId) ->
        @theGraph.removeEdge(sourceId, targetId)
        @removeConnection(sourceId, targetId)
        @resetEdge()

    # -------------- user function runners ---------------- #

    runShowFuncs: (frame) ->
        @runShowVertices(frame)
        @runShowEdges(frame)

    runShowVertices: (frame) ->
        for name, {show, hide} of @showVertices
            $newv = @nodeSelector(frame[name])
            $oldv = @nodeSelector(@previousFrame?[name])
            if $newv? and not $oldv?
                show($newv)
            else if $oldv? and not $newv?
                hide($oldv)
            else if @varChanged(frame[name], @previousFrame?[name])
                hide($oldv)
                show($newv)

    runEdgeStyle: (con, graph) ->
        return unless @edgeStyle? and con? and graph?
        edge = graph.edge(con.sourceId, con.targetId)
        s = graph.vertex(edge.source.id)
        t = graph.vertex(edge.target.id)
        con.setPaintStyle(@edgeStyle({source: s, target: t}))

    runShowEdges: (frame) ->
        @shownConnections ?= []
        @runEdgeStyle(c, frame[@varName]) for c in @connections if @edgeStyle?
        for edgeStr, {show, hide} of @showEdges
            if edgeStr.match /->/ 
                for c in @shownConnections
                    hide(c) 
                    @runEdgeStyle(c, frame[@varName])
                @shownConnections = []
                [sourceId, targetId] = edgeStr.split(/->/).map((v)->frame[v]?.id)
                return unless sourceId? and targetId?
                showConnection = (sourceId, targetId) =>
                    con = @getConnection(sourceId, targetId)
                    return unless con?
                    show(con)
                    @shownConnections.push(con)
                showConnection(sourceId, targetId)
                showConnection(targetId, sourceId) unless @theGraph.directed

    # --------------- node methods -------------------- #

    addNode: (vertex) ->
        $v = $("<div>", {class: 'vertex', id: vertex.id})
        $v.hide()
        $v.attr('id', vertex.id)
        $contents = $("<div>", class: "vertex-contents")
        if @vertexSetupFunc?
            @vertexSetupFunc(vertex, $v)
        else
            $contents.html(Vamonos.rawToTxt(vertex))
        $v.append($contents)
        pos = @$inner.position()
        $v.css("left", vertex.x)
        $v.css("top",  vertex.y)
        $v.css("position", "absolute")
        @jsPlumbInstance.draggable($v, {
            containment: [pos.left, pos.top, window.innerWidth, window.innerHeight]
            drag: (event, ui) =>
                vtx = @theGraph.vertex(vertex.id)
                vtx.x = ui.position.left
                vtx.y = ui.position.top
                @resize()
        })
        @$inner.append($v)
        $v.fadeIn(100)
        @nodes.push($v)
        return $v

    nodeSelector: (vid) ->
        return unless @graphDrawn and vid?
        vid = vid.id unless typeof vid is 'string'
        return unless vid?
        @nodes.filter(($vtx) -> $vtx.attr("id") is vid)[0]

    updateNode: (vertex) ->
        $v = @nodeSelector(vertex)
        @vertexUpdateFunc(vertex, $v) if @vertexUpdateFunc?
        $v.addClass("changed") if @vertexChanged(vertex)

    removeNode: (vid) ->
        $vtx = @nodeSelector(vid)
        out = @theGraph.outgoingEdges(vid)
        ins = @theGraph.incomingEdges(vid)
        for edge in ins.concat(out)
            @removeConnection(edge.source.id, edge.target.id)
        @nodes.splice(@nodes.indexOf($vtx), 1)
        $vtx.fadeOut(100, () -> $vtx.remove())


    # ---------------------- connection methods ------------------ #

    addConnection: (sourceId, targetId) ->
        return if @getConnection(sourceId, targetId)
        connection = @jsPlumbInstance.connect({ source: sourceId, target: targetId })
        if @theGraph.directed
            connection.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])
        if @edgeLabel?
            edge = @theGraph.edge(connection.sourceId, connection.targetId)
            connection.addOverlay(["Label", {label: @edgeLabel(edge) + ""} ])
        @connections.push(connection)

    removeConnection: (sourceId, targetId) ->
        connection = @getConnection(sourceId, targetId)
        return unless connection?
        @jsPlumbInstance.detach(connection) 
        @connections.splice(@connections.indexOf(connection), 1)

    getConnection: (sourceId, targetId) ->
        res = (e for e in @connections when e.sourceId == sourceId and e.targetId == targetId or
            if @theGraph.directed
                false
            else
                e.sourceId == targetId and e.targetId == sourceId)
        res[0]

    # ------------------ interaction methods ---------------------- #

    editModeOn: () ->
        @mode = "edit"
        @updateGraph(@theGraph)
        @$outer.disableSelection()
        # Clicks: 
        #   when no selection: vertex -> select,   non-vertex -> make new vertex
        #   when selection:    vertex -> new edge, non-vertex -> deselect
        @$outer.on "click.vamonos-graph", (e) =>
            $target = $(e.target)
            if not @_$selectedVertex?
                if $target.is("div.vertex-contents")
                    @select($target.parent())
                if $target.is(@$inner)
                    @addVertex(e.offsetX - 12, e.offsetY - 12)
            else
                if $target.is("div.vertex-contents")
                    sourceId = @_$selectedVertex.attr("id")
                    targetId = $target.parent().attr("id")
                    if sourceId is targetId
                        @deselect() 
                    else if @theGraph.edge(sourceId, targetId)
                        @removeEdge(sourceId, targetId)
                    else
                        @addEdge(sourceId, targetId)
                else if $target.is(@$inner)
                    @deselect()

    select: (v) ->
        @_$selectedVertex = v
        @_$selectedVertex.addClass("selected")
        @openDrawer()
        # Show dotted and red lines for potential edge additions/deletions
        @_$others = @_$selectedVertex.siblings("div.vertex").children("div.vertex-contents")
        @_$others.on "mouseenter.vamonos-graph", @highlightEdge
        @_$others.on "mouseleave.vamonos-graph", @resetEdge
            
    highlightEdge: (e) =>
        connection = @getConnection(@_$selectedVertex.attr("id"), $(e.target).parent().attr("id"))
        if connection?
            @_alteredEdge = connection
            connection.setPaintStyle(@deletionPaintStyle)
        else
            @_possibleEdge = @jsPlumbInstance.connect
                source: @_$selectedVertex
                target: $(e.target).parent()
                paintStyle: @additionPaintStyle
            if @theGraph.directed
                @_possibleEdge.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])
            
    resetEdge: () =>
        if @_possibleEdge?
            @jsPlumbInstance.detach(@_possibleEdge)
            @_possibleEdge = undefined
        if @_alteredEdge?
            @_alteredEdge.setPaintStyle(@normalPaintStyle)
            @_alteredEdge = undefined
        
    deselect: () ->
        return unless @_$selectedVertex?
        @jsPlumbInstance.detach(@_possibleEdge) if @_possibleEdge?
        @_$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
        @_$selectedVertex.removeClass("selected")
        @_$selectedVertex = undefined
        @closeDrawer()

    openDrawer: () ->
        if @$drawer?
            @$drawer.html("")
        else
            @$drawer = $("<div>", { class: "graph-drawer" })
            @$drawer.hide()
            @$inner.append(@$drawer)
        vtx = @theGraph.vertex(@_$selectedVertex.attr("id"))
        @$drawer.html("<span class='left'>vertex&nbsp;&nbsp;#{vtx.name}</span>")
        $buttonHolder = $("<span>", {class: "right"})
        buttons = for v of @inputVars
            $button = $("<button>", {text: "#{v}"})
            $button.on "click.vamonos-graph", (e) =>
                @inputVars[v] = vtx
                @updateGraph(@theGraph)
        $removeButton = $("<button>", {text: "del"})
        $removeButton.on "click.vamonos-graph", (e) =>
            @removeVertex(vtx.id)
        buttons.push($removeButton)
        $buttonHolder.append(buttons)
        @$drawer.append($buttonHolder)
        @$drawer.fadeIn("fast")
        @$outer.animate(height: (@$outer.height() + @$drawer.height()), 200)

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")
        @$outer.animate(
            {height: (@$outer.height() - @$drawer.height())}
            200, 
            () => @resize()
        )

    editModeOff: () ->
        @$outer.off("click.vamonos-graph")
        if @theGraph.vertices.length > 0
            @viz.setVariable(@varName, Vamonos.clone(@theGraph), true)
        else
            alert "GRAPH WIDGET: need vertices please!" 
            throw "GRAPH WIDGET: leaving edit mode without vertices"
        graph = @viz.getVariable(@varName, true)
        for k, v of @inputVars
            unless v?
                alert "GRAPH WIDGET: please set #{k}!"
                throw "GRAPH WIDGET: need a value for #{k}!"
            @viz.setVariable(k, graph.vertex(v.id), true)
        @clearDisplay()

    # -------------------- utility functions --------------------- #

    nextVertexId: () ->
        @_customVertexNum ?= 0
        return "custom-vertex-#{@_customVertexNum++}"

    vertexChanged: (newv) ->
        return false unless @previousFrame?
        oldv = if @mode is 'edit' then @previousFrame[@varName] else @theGraph
            .vertices.filter((v) -> v.id is newv.id)[0]
        return @varChanged(newv, oldv)

    varChanged: (newv, oldv) ->
        return false unless oldv? and newv?
        r1 = (oldv[k] == v for k, v of newv)
        r2 = (newv[k] == v for k, v of oldv)
        not r1.concat(r2).every((b) -> b)

    updateGraph: (graph) ->
        if @graphDrawn
            $e.removeClass("changed") for $e in @nodes.concat(@connections)
        else
            @addNode(v) for v in graph.vertices
            @addConnection(e.source.id, e.target.id) for e in graph.edges
            @graphDrawn = yes
        @updateNode(v) for v in graph.vertices
        if @mode is 'edit'
            @runShowVertices(@inputVars) 
            @previousFrame = Vamonos.clone(@inputVars)

    jsPlumbInit: () -> 
        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight"]
            PaintStyle: @normalPaintStyle
            Endpoint: "Blank"
            EndpointStyle:{ fillStyle:"black" }
            Anchor: [ "Perimeter", { shape: "Circle" } ]

    resize: () ->
        max_x = Math.max(@theGraph.vertices.map((v)->v.x)..., 100)
        max_y = Math.max(@theGraph.vertices.map((v)->v.y)..., 100)
        if @$drawer? and @$drawer.is(":visible")
            max_y += @$drawer.height()
        @$outer.width(max_x + 40)
        @$outer.height(max_y + 40)
        
    clearDisplay: () ->
        @deselect()
        @$drawer = undefined
        @jsPlumbInit()
        @$inner.html("")
        @graphDrawn = no
        @connections = []
        @nodes = []
        @previousFrame = undefined

Vamonos.export { Widget: { Graph } }
