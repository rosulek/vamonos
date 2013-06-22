class GraphDisplay

    constructor: ({container, @varName, @defaultGraph, @vertexSetupFunc,
        @vertexUpdateFunc, @showVertices, @showEdges}) ->

        @$outer = Vamonos.jqueryify(container)
        @$inner = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)

        @jsPlumbInit()

        
    event: (event, options...) -> switch event

        when "setup"
            [@viz] = options
            @viz.registerVariable(key) for key of @showVertices
            for e of @showEdges
                @viz.registerVariable(v) for v in e.split(/<?->?/)
            @viz.registerVariable(@varName)

        when "render"
            [frame, type] = options
            if @graphDrawn
                $elem.removeClass("changed") for $elem in @vertices.concat(@edges)
            else
                @drawGraph(frame[@varName])
            @updateVertex(v) for v in frame[@varName].vertices
            @runShowFuncs(frame)
            @previousFrame = frame

        when "displayStop"
            @clear()

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
                    edges = edges.concat(@reversedEdges(edges))

                return unless edges.length > 0

                for e in edges
                    for connection in @getConnections(e)
                        show(connection)
                        @shownConnections.push(connection)

    reversedEdges: (edges) ->
        {source: target, target: source} for {source, target} in edges

    getConnections: (edge) ->
        @edges.filter (e) ->
            e.sourceId == edge.source.id and e.targetId == edge.target.id


    vertexSelector: (vertex) ->
        return unless @graphDrawn
        @vertices.filter((v) -> v.attr("id") is vertex.id)[0]

    vertexChanged: (newv) ->
        return true unless @previousFrame?
        oldv = @previousFrame[@varName]
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

    # JsPlumb stuff #

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

    makeVertex: (vertex) ->
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

        #TODO: draggable stuff requires jquery ui functionality
        #@jsPlumbInstance.draggable($v, {containment: "parent"})
        #@jsPlumbInstance.setDraggable($v, false)
        
        return $v

    makeEdge: (edge) ->
        @jsPlumbInstance.connect
            source: edge.source.id
            target: edge.target.id

    drawGraph: (G) ->
        @vertices = (@makeVertex(v) for v in G.vertices)
        @edges    = (@makeEdge(e)   for e in G.edges)

        @graphDrawn = yes

    clear: () ->
        @jsPlumbInit()
        @$inner.html("")
        @graphDrawn = no
        @edges = []
        @vertices = []
        @previousFrame = undefined

Vamonos.export { Widget: { GraphDisplay } }
