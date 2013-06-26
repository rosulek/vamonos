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
#   input vertex variables and their default value

class Graph

    constructor: ({container, @varName, @defaultGraph, @vertexSetupFunc,
        @vertexUpdateFunc, @showVertices, @showEdges, @inputVars}) ->

        @inputVars  ?= {}
        @connections = []
        @nodes       = []

        # resolve vertex ids to actual vertices
        @inputVars[k] = @defaultGraph.vertex(v) for k,v of @inputVars

        @$outer  = Vamonos.jqueryify(container)
        @$inner  = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)

        @theGraph = @defaultGraph ? new Vamonos.DataStructure.Graph()

        @resize()
        @jsPlumbInit()

   
    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(key)       for key of @showVertices
            @viz.registerVariable(key, true) for key of @inputVars
            for e of @showEdges
                @viz.registerVariable(v) for v in e.split(/<?->?/)

            # set default graph in stash incase no edit mode
            @viz.setVariable(@varName, Vamonos.clone(@defaultGraph), true)

        when "render"
            [frame, type] = options

            @updateGraph(frame[@varName])
            @runShowFuncs(frame)
            @previousFrame = frame

        when "displayStart"
            @mode = "display"

        when "displayStop"
            @clearDisplay()

        when "editStart"
            @editMode()

        when "editStop"
            @$outer.off("click.vamonos-graph dblclick.vamonos-graph")
            @clearDisplay()
            @closeDrawer()

            if @theGraph.vertices.length > 0
                @viz.setVariable(@varName, Vamonos.clone(@theGraph), true)
                @clearDisplay()
            else
                alert "GRAPH WIDGET: need vertices please!" 
                throw "GRAPH WIDGET: leaving edit mode without vertices"

            for k, v of @inputVars
                unless v?
                    alert "GRAPH WIDGET: please set #{k}!"
                    throw "GRAPH WIDGET: need a value for #{k}!"
                graph = @viz.getVariable(@varName, true)
                @viz.setVariable(k, graph.vertex(v.id), true)


    displayMode: () ->
        @mode = "display"

    editMode: () ->
        @mode = "edit"
        @updateGraph(@theGraph)

        @$outer.disableSelection()

        @$outer.on("click.vamonos-graph", (e) =>
            $target = $(e.target)
            # Select vertices and create and destroy edges with regular click
            if not @$selectedVertex?
                if $target.is("div.vertex-contents")
                    return @select($target)
                else if $target.is(@$inner)
                    vtx = {
                        id: @nextVertexId()
                        x: e.offsetX - 12
                        y: e.offsetY - 12
                    }
                    @theGraph.addVertex(vtx)
                    $new = @addNode(vtx)
                    @updateGraph(@theGraph)
                    @resize()
                    @select($new)
            else
                if $target.is("div.vertex-contents")
                    if $target.parent().attr("id") is @$selectedVertex.attr("id")
                        @deselect() 
                        return

                    sourceId = @$selectedVertex.attr("id")
                    targetId = $target.parent().attr("id")

                    if @theGraph.edge(sourceId, targetId)
                        # delete an edge
                        @theGraph.removeEdge(sourceId, targetId)
                        @removeConnection(sourceId, targetId)
            
                    else
                        # make a new edge
                        @theGraph.addEdge(sourceId, targetId)
                        @addConnection(sourceId, targetId)

                else if $target.is(@$inner)
                    @deselect()

        ) # end callback

    select: ($vtxContents) ->
        @$selectedVertex = $vtxContents.parent()
        @$selectedVertex.addClass("selected")
        @openDrawer()

        # Show dotted and red lines for potential edge additions/deletions
        @_$others = @$selectedVertex.siblings("div.vertex").children("div.vertex-contents")
        @_$others.on "mouseenter.vamonos-graph", (e) =>
            con = @getConnection(@$selectedVertex.attr("id"), $(e.target).parent().attr("id"))
            if con?
                @_alteredEdge = con
                con.setPaintStyle
                    strokeStyle: "red"
                    lineWidth: 4
            else
                @_possibleEdge = @jsPlumbInstance.connect
                    source: @$selectedVertex
                    target: $(e.target).parent()
                    paintStyle: 
                        dashstyle: "2 2"
                        strokeStyle: "blue"
                        lineWidth: 2
                if @theGraph.directed
                    @_possibleEdge.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])
        @_$others.on "mouseleave.vamonos-graph", (e) =>
            if @_possibleEdge?
                @jsPlumbInstance.detach(@_possibleEdge)
                @_possibleEdge = undefined
            if @_alteredEdge?
                @_alteredEdge.setPaintStyle
                    strokeStyle: "gray"
                    lineWidth: 2
                @_alteredEdge = undefined

        
    openDrawer: () ->
        if @$drawer?
            @$drawer.html("")
        else
            @$drawer = $("<div>", { class: "graph-drawer" })
            @$drawer.hide()
            @$inner.append(@$drawer)

        vtx = @theGraph.vertex(@$selectedVertex.attr("id"))
        @$drawer.html("<span class='left'>vertex&nbsp;&nbsp;#{vtx.name}</span>")

        $buttonHolder = $("<span>", {class: "right"})

        buttons = for v of @inputVars
            $button = $("<button>", {text: "set as #{v}"})
            $button.on "click.vamonos-graph", (e) =>
                @inputVars[v] = vtx
                @updateGraph(@theGraph)

        $removeButton = $("<button>", {text: "del"})
        $removeButton.on "click.vamonos-graph", (e) =>
            @deselect()
            @removeNode(vtx.id)
            @resize()

        buttons.push($removeButton)

        $buttonHolder.append(buttons)
        @$drawer.append($buttonHolder)

        @$drawer.fadeIn("fast")
        @$outer.animate(height: (@$outer.height() + @$drawer.height()), 200)

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")
        @$outer.animate(height: (@$outer.height() - @$drawer.height()), 200, =>
            @resize()
        )

    deselect: () ->
        return unless @$selectedVertex?
        @jsPlumbInstance.detach(@_possibleEdge) if @_possibleEdge?
        @_$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
        @$selectedVertex.removeClass("selected")
        @$selectedVertex = undefined
        @closeDrawer()

    nextVertexId: () ->
        @_customVertexNum ?= 0
        return "custom-vertex-#{@_customVertexNum++}"

    runShowFuncs: (frame) ->
        @runShowVertices(frame)
        @runShowEdges(frame)

    runShowVertices: (frame) ->
        for name, {show, hide} of @showVertices
            $newv = @vertexSelector(frame[name])
            $oldv = @vertexSelector(@previousFrame?[name])
            if $newv? and not $oldv?
                show($newv)
            else if $oldv? and not $newv?
                hide($oldv)
            else if @varChanged(frame[name], @previousFrame?[name])
                hide($oldv)
                show($newv)

    runShowEdges: (frame) ->
        for edgeStr, {show, hide} of @showEdges
            if edgeStr.match /->/ 
                hide(c) for c in @shownConnections if @shownConnections?
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


    getConnection: (sourceId, targetId) ->
        res = (e for e in @connections when e.sourceId == sourceId and e.targetId == targetId or
            if @theGraph.directed
                false
            else
                e.sourceId == targetId and e.targetId == sourceId)
        res[0]

    vertexSelector: (vid) ->
        return unless @graphDrawn and vid?
        vid = vid.id unless typeof vid is 'string'
        return unless vid?
        @nodes.filter(($vtx) -> $vtx.attr("id") is vid)[0]

    vertexChanged: (newv) ->
        return false unless @previousFrame?
        oldv = if @mode is 'edit' then @previousFrame[@varName] else @theGraph
            .vertices.filter((v) -> v.id is newv.id)[0]
        @varChanged(newv, oldv)

    varChanged: (newv, oldv) ->
        return false unless oldv?
        r1 = (oldv[k] == v for k, v of newv)
        r2 = (newv[k] == v for k, v of oldv)
        not r1.concat(r2).every((b) -> b)

    updateVertex: (vertex) ->
        $v = @vertexSelector(vertex)
        @vertexUpdateFunc(vertex, $v) if @vertexUpdateFunc?
        $v.addClass("changed") if @vertexChanged(vertex)

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
        return $contents

    removeNode: (vid) ->
        $vtx = @vertexSelector(vid)
        out = @theGraph.outgoingEdges(vid)
        ins = @theGraph.incomingEdges(vid)
        for edge in ins.concat(out)
            @removeConnection(edge.source.id, edge.target.id)
        @nodes.splice(@nodes.indexOf($vtx), 1)
        $vtx.fadeOut(100, () -> $vtx.remove())
        @theGraph.removeVertex(vid)
        # if the deleted vertex was set as an inputVar, reset the input var
        @inputVars[k] = undefined for k, v of @inputVars when v.id is vid

    addConnection: (sourceId, targetId) ->
        return if @getConnection(sourceId, targetId)
        connection = @jsPlumbInstance.connect({ source: sourceId, target: targetId })
        if @theGraph.directed
            connection.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])
        @connections.push(connection)

    removeConnection: (sourceId, targetId) ->
        connection = @getConnection(sourceId, targetId)
        return unless connection?
        @jsPlumbInstance.detach(connection) 
        @connections.splice(@connections.indexOf(connection), 1)

    updateGraph: (graph) ->
        if @graphDrawn
            $e.removeClass("changed") for $e in @nodes.concat(@connections)
        else
            @addNode(v) for v in graph.vertices
            @addConnection(e.source.id, e.target.id) for e in graph.edges
            @graphDrawn = yes

        @updateVertex(v) for v in graph.vertices

        if @mode is 'edit'
            @runShowVertices(@inputVars) 
            @previousFrame = Vamonos.clone(@inputVars)

    jsPlumbInit: () -> 
        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight"]
            PaintStyle: 
                lineWidth: 2
                strokeStyle:"gray"
            Endpoint: "Blank"
            EndpointStyle:{ fillStyle:"black" }
            Anchor: [ "Perimeter", { shape: "Circle" } ]

    resize: () ->
        max_x = Math.max(@theGraph.vertices.map((v)->v.x)...)
        max_y = Math.max(@theGraph.vertices.map((v)->v.y)...)
        if @$drawer? and @$drawer.is(":visible")
            max_y += @$drawer.height()
        @$outer.width(max_x + 40)
        @$outer.height(max_y + 40)
        
    clearDisplay: () ->
        @closeDrawer()
        @$drawer = undefined
        @deselect()
        @jsPlumbInit()
        @$inner.html("")
        @graphDrawn = no
        @connections = []
        @nodes = []
        @previousFrame = undefined

Vamonos.export { Widget: { Graph } }
