class Graph

    constructor: ({container, @varName, @defaultGraph, @vertexSetupFunc,
        @vertexUpdateFunc, @showVertices, @showEdges, @inputVars}) ->

        if @inputVars?
            @inputVars[k] = @defaultGraph.vertex(v) for k,v of @inputVars
        else
            @inputVars = {}

        @$outer = Vamonos.jqueryify(container)
        @$inner = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)

        @connections ?= []
        @nodes ?= []

        @jsPlumbInit()
        
    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(key) for key of @showVertices
            @viz.registerVariable(key, true) for key of @inputVars
            for e of @showEdges
                @viz.registerVariable(v) for v in e.split(/<?->?/)
            if @defaultGraph?
                @theGraph = @viz.setVariable(@varName, Vamonos.clone(@defaultGraph), true)
            else
                @theGraph = new Vamonos.DataStructure.Graph()

        when "render"
            [frame, type] = options

            @updateGraph(frame[@varName])
            @runShowFuncs(frame)
            @previousFrame = frame

        when "displayStart"
            @displayMode()

        when "displayStop"
            @clear()

        when "editStart"
            @editMode()

        when "editStop"
            @$outer.off "click"
            @deselect()
            if @theGraph.vertices.length > 0
                @viz.setVariable(@varName, Vamonos.clone(@theGraph), true)
                @clear()
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
        @drawGraph(@theGraph)
        @updateGraph(@theGraph)

        @$outer.disableSelection()

        @$outer.on("dblclick", (e) =>
            # Create and destroy vertices with double click
            $target = $(e.target)
            if $target.is(".vertex-contents")
                vid = $target.parent().attr("id")
                @removeNode(vid)
            else
                vtx = {
                    id: @nextVertexId()
                    x: e.offsetX - 12
                    y: e.offsetY - 12
                }
                @theGraph.addVertex(vtx)
                @addNode(vtx)
            @deselect()
            @updateGraph(@theGraph)
        )

        @$outer.on("click", (e) =>
            $target = $(e.target)
            # Select vertices and create and destroy edges with regular click
            if not @$selectedVertex?
                if $target.is(".vertex-contents")
                    return @select($target)
            else
                if $target.is(".vertex-contents")
                    if $target.parent().attr("id") is @$selectedVertex.attr("id")
                        @deselect() 
                        return

                    sourceId = @$selectedVertex.attr("id")
                    targetId = $target.parent().attr("id")

                    if @theGraph.edge(sourceId, targetId)
                        # delete an edge
                        @theGraph.removeEdge(sourceId, targetId)
                        @removeConnection(sourceId, targetId)
                        @removeConnection(targetId, sourceId) unless @theGraph.directed
            
                    else
                        # make a new edge
                        @theGraph.addEdge(sourceId, targetId)
                        @addConnection(sourceId, targetId)
                        @addConnection(targetId, sourceId) unless @theGraph.directed

            # deselect automatically unless we returned earlier
            @deselect()
            @updateGraph(@theGraph)
        ) # end callback

    select: ($vtxContents) ->
        @$selectedVertex = $vtxContents.parent()
        @$selectedVertex.addClass("selected")
        @openDrawer()
        
    openDrawer: () ->
        @$drawer = $("<div>", {class:"container"})
        vtx = @theGraph.vertex(@$selectedVertex.attr("id"))
        $("<div>", {text: "selected: vertex #{vtx.name}"}).appendTo(@$drawer)
        for v of @inputVars
            $button = $("<button>", {text: "set #{v}=#{vtx.name}"})
            $button.on "click", (e) =>
                @inputVars[v] = vtx
                @updateGraph(@theGraph)
                @deselect()
            @$drawer.append($button)

        @$outer.parent().append(@$drawer)

    deselect: () ->
        return unless @$selectedVertex?
        @$selectedVertex.removeClass("selected")
        @$selectedVertex = undefined
        @$drawer.remove()

    nextVertexId: () ->
        @_customVertexNum ?= 0
        return "custom-vertex-#{@_customVertexNum++}"

    runShowFuncs: (frame) ->
        @runShowVertices(frame)
        @runShowEdges(frame)

    runShowVertices: (frame) ->
        for name, {show, hide} of @showVertices
            newv = frame[name]
            oldv = @previousFrame?[name] 
            if newv? and not oldv?
                show(@vertexSelector(newv))
                continue
            else if oldv? and not newv?
                hide(@vertexSelector(oldv))
            else if @varChanged(newv, oldv)
                hide(@vertexSelector(oldv))
                show(@vertexSelector(newv))

    runShowEdges: (frame) ->
        for edgeStr, {show, hide} of @showEdges
            if edgeStr.match /->/ 
                hide(c) for c in @shownConnections if @shownConnections?
                @shownConnections = []

                [source, target] = edgeStr.split /->/ 

                edges = frame[@varName].edges.filter (e) ->
                    e.source?.id == frame[source]?.id and e.target?.id == frame[target]?.id

                unless frame[@varName].directed
                    edges = edges.concat(@reverseEdge(e) for e in edges)

                return unless edges.length > 0

                for e in edges
                    for connection in @getConnections(e)
                        show(connection)
                        @shownConnections.push(connection)

    reverseEdge: (edge) ->
        source: edge.target
        target: edge.source

    getConnections: (edge) ->
        @connections.filter (e) ->
            e.sourceId == edge.source.id and e.targetId == edge.target.id

    getConnection: (sourceId, targetId) ->
        (e for e in @connections when e.sourceId is sourceId and e.targetId is targetId)[0]

    vertexSelector: (v) ->
        return unless @graphDrawn
        v = @theGraph.vertex(v) if typeof v is 'string'
        @nodes.filter(($vtx) -> $vtx.attr("id") is v.id)[0]

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

    jsPlumbInit: () -> 
        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight", {gap: 6}]
            PaintStyle: 
                lineWidth: 2
                strokeStyle:"gray"
            Endpoint: "Blank"
            EndpointStyle:{ fillStyle:"black" }
            ConnectionOverlays: [ 
                ["PlainArrow", {location:-4, width:8, length:8}]
            ]
            Anchor: [ "Perimeter", { shape: "Circle" } ]

    addNode: (vertex) ->
        $v = $("<div>", {class: 'vertex', id: vertex.id})
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

        @$inner.append($v)
        @nodes.push($v)

    removeNode: (vid) ->
        $vtx = @vertexSelector(vid)
        out = @theGraph.outgoingEdges(vid)
        ins = @theGraph.incomingEdges(vid)
        for edge in ins.concat(out)
            @removeConnection(edge.source.id, edge.target.id)
        @nodes.splice(@nodes.indexOf($vtx), 1)
        $vtx.remove()
        @theGraph.removeVertex(vid)

    addConnection: (sourceId, targetId) ->
        connection = @jsPlumbInstance.connect({ source: sourceId, target: targetId })
        @connections.push(connection)

    removeConnection: (sourceId, targetId) ->
        connection = @getConnection(sourceId, targetId)
        return unless connection?
        @jsPlumbInstance.detach(connection) 
        @connections.splice(@connections.indexOf(connection), 1)

    drawGraph: (G) ->
        @addNode(v) for v in G.vertices
        @addConnection(e.source.id, e.target.id) for e in G.edges
        @graphDrawn = yes

    updateGraph: (G) ->
        if @graphDrawn
            $elem.removeClass("changed") for $elem in @nodes.concat(@connections)
        else
            @drawGraph(G)
        @updateVertex(v) for v in G.vertices
        if @mode is 'edit'
            @runShowVertices(@inputVars) 
            @previousFrame = Vamonos.clone(@inputVars)

    clear: () ->
        @jsPlumbInit()
        @$inner.html("")
        @graphDrawn = no
        @connections = []
        @nodes = []
        @previousFrame = undefined

Vamonos.export { Widget: { Graph } }
