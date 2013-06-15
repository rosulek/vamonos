class Graph

    constructor: ({container, @varName, @defaultGraph, @vertexSetupFunc, @vertexUpdateFunc, showVertices}) ->

        @showVertices = Vamonos.arrayify(showVertices)

        @$outer = Vamonos.jqueryify(container)
        @$inner = $("<div>", {class: "graph-inner-container"})
        @$outer.css("width", "530px")
        @$outer.css("height", "400px")
        @$outer.append(@$inner)

        @jsPlumbInit()

        
    event: (event, options...) -> switch event

        when "setup"
            [@stash, visualizer] = options

        when "render"
            [frame, type] = options

            if @graphDrawn
                $elem.removeClass("changed") for $elem in @vertices.concat(@edges)
            else
                @drawGraph(frame[@varName])

            @updateVertex(v) for v in frame[@varName].vertices

            @previouslyRenderedFrame = Vamonos.clone(frame)

        when "displayStop"
            @clear()

        when "editStop"
            if @defaultGraph?
                @stash[@varName] = Vamonos.clone(@defaultGraph)

    vertexChanged: (newv) ->
        return false unless @previouslyRenderedFrame?
        oldv = @previouslyRenderedFrame[@varName]
            .vertices.filter((v) -> v.id is newv.id)[0]
        r1 = (oldv[k] == v for k, v of newv)
        r2 = (newv[k] == v for k, v of oldv)
        not r1.concat(r2).every((b) -> b)

    updateVertex: (vertex) ->
        $v = @vertices.filter((v) -> v.attr("id") is vertex.id)[0]
        @vertexUpdateFunc(vertex, $v) if @vertexUpdateFunc?
        $v.addClass("changed") if @vertexChanged(vertex)

    # JsPlumb stuff #

    jsPlumbInit: () -> 
        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight", {gap: 8}]
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
            @vertexSetupFunc(vertex, $contents)
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

Vamonos.export { Widget: { Graph } }
