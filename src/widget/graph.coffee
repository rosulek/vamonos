class Graph

    constructor: ({container, @varName, @defaultGraph, @renderVertexContents}) ->

        @$outer = Vamonos.jqueryify(container)
        @$outer.css("width", "530px")
        @$outer.css("height", "400px")
        @$inner = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)

        @jsPlumbInit()
        
        
    event: (event, options...) -> switch event

        when "setup"
            [@stash, visualizer] = options
            if @defaultGraph?
                @stash._inputVars.push(@varName)
                @stash[@varName] = @defaultGraph 

        when "render"
            [frame, type] = options
            @clear()
            @drawGraph(frame[@varName])

    jsPlumbInit: (defaults) ->
        defaults ?=
            Connector: ["Straight", {stub: 2}]
            PaintStyle: 
                lineWidth: 3
                strokeStyle:"gray"
            Endpoint: "Blank"
            EndpointStyle:{ fillStyle:"black" }
            ConnectionOverlays: [ 
                [ "PlainArrow", {width: 8, length:8, location:1, id:"arrow" } ]
            ],
            #Anchors: ["Perimiter", {shape:"circle"}]
        @jsPlumbInstance = jsPlumb.getInstance(defaults)

    getVertices: () ->
        for vertexElem in @$inner.find('.vertex')
            id: vertexElem.id
            x: vertexElem.style.left
            y: vertexElem.style.top

    makeVertex: (vertex) ->
        $newdiv = $("<div>", {class: 'vertex', id: vertex.id})
        $newdiv.attr('id', vertex.id)
        $contents = $("<div>", class: "vertex-contents")

        if @renderVertexContents?
            @renderVertexContents(vertex, $contents)
        else
            $contents.html(Vamonos.rawToTxt(vertex))

        $newdiv.append($contents)

        pos = @$inner.position()
        $newdiv.css("left", vertex.x)
        $newdiv.css("top",  vertex.y)
        $newdiv.css("position", "absolute")

        @$inner.append($newdiv)

        @jsPlumbInstance.draggable($newdiv, {containment: "parent"})
        @jsPlumbInstance.setDraggable($newdiv, false)

        
    # Destructures on an edge object
    makeConnection: (source, target) ->
        @jsPlumbInstance.connect
            source: source
            target: target
        
    drawGraph: (G) ->
        @makeVertex(v)                            for v in G.vertices
        @makeConnection(e.source.id, e.target.id) for e in G.edges

    clear: () ->
        @jsPlumbInstance.reset()


Vamonos.export { Widget: { Graph } }
