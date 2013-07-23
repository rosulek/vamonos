class GraphDisplay

    # ----------- styles and colors and jsplumb stuff -------------- #

    @editColor        = "#92E894"
    @lightEdgeColor   = "#E0E0E0"
    @darkEdgeColor    = "#CFCFCF"
    @deletionColor    = "#FF7D7D"
    @lineWidth        = 4

    normalPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @lightEdgeColor

    deletionPaintStyle:
        strokeStyle: @deletionColor
        lineWidth: @lineWidth

    additionPaintStyle:
        dashstyle: "1 1"
        strokeStyle: @editColor
        lineWidth: @lineWidth

    selectedPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @editColor

    hoverPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @darkEdgeColor

    customStyle: (color) ->
        lineWidth: Graph.lineWidth
        strokeStyle: color

    jsPlumbConnect: (sourceId, targetId) ->
        @jsPlumbInstance.connect
            source: sourceId
            target: targetId 

    constructor: ({
        container
        @vertexLabels
        @vertexCssAttributes
        @edgeLabel
        @containerMargin
        @containerResizeLimitX
        @containerResizeLimitY
        @minX
        @minY
        @directed
    }) ->

        @directed ?= no

        @containerMargin       ?= 20
        @containerResizeLimitX ?= window.innerWidth
        @containerResizeLimitY ?= window.innerHeight
        @minX ?= @minY         ?= 100

        @connections = {}
        @nodes       = {}

        @$outer  = Vamonos.jqueryify(container)
        @$inner  = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)
        @$outer.disableSelection()

        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight"]
            PaintStyle: @normalPaintStyle
            Endpoint: "Blank"
            Anchor: [ "Perimeter", { shape: "Circle" } ]

    draw: (graph) ->
        if @graphDrawn
            @$outer.find(".changed").removeClass("changed")

        @resizeContainerToFitGraph(graph)

        for vertex in graph.getVertices()
            continue if @nodes[vertex.id]?
            @addNode(vertex) 

        for edge in graph.getEdges()
            continue if @connections[edge.source.id]?[edge.target.id]?
            continue if @connections[edge.target.id]?[edge.source.id]? and not @directed
            @addConnection(edge) 

        for sourceId, targets of @connections
            for targetId, connection of targets
                unless graph.edge(sourceId, targetId)
                    # TODO make it turn red and fade out or something
                    @removeConnection(sourceId, targetId) 

        for vid, node of @nodes
            unless graph.vertex(vid)
                @removeNode(vid)

        @updateNode($n, graph.vertex(vid)) for vid, $n of @nodes
        @previousGraph = graph # might need to clone this

    addNode: (vertex) ->
        $v = $("<div>", {class: 'vertex', id: vertex.id})
        $v.hide()
        $v.css("left", vertex.x)
        $v.css("top",  vertex.y)
        $v.css("position", "absolute")
        $contents = $("<div>", class: "vertex-contents")
        for type, style of @vertexLabels
            if type in ["ne","nw","se","sw"]
                $("<div>", { class:"vertex-#{type}-label" }).appendTo($v)
        $v.append($contents)
        @$inner.append($v)
        $v.fadeIn(100)
        return @nodes[vertex.id] = $v

    updateNode: ($node = @nodes[vid], vertex) ->
        return unless $node? and vertex?
        @updateNodeLabels($node, vertex)
        @updateNodeClasses($node, vertex)
        @updateNodePosition($node, vertex)

    updateNodePosition: ($node, vertex) ->
        pos = $node.position()
        return if pos.left == vertex.x and pos.top == vertex.y
        @jsPlumbInstance.animate(
            vertex.id 
            {
                left: vertex.x
                top: vertex.y
            }
            {
                duration: 500
            }
        )
        #$node.css({ left: vertex.x, top: vertex.y })

    resizeContainer: () ->
        xVals = (@containerMargin + n.position().left + n.width() for vid, n of @nodes)
        yVals = (@containerMargin + n.position().top + n.height() for vid, n of @nodes)
        max_x = Math.max(xVals..., @minX)
        max_y = Math.max(yVals..., @minY)
        @$outer.width(max_x)
        @$outer.height(max_y)
        
    resizeContainerToFitGraph: (graph) ->
        nodes = $("div.vertex-contents")
        width  = nodes.width()
        height = nodes.height()
        xVals = []
        yVals = []
        for vertex in graph.getVertices()
            xVals.push @containerMargin + vertex.x + width  
            yVals.push @containerMargin + vertex.y + height 
        max_x = Math.max(xVals..., @minX)
        max_y = Math.max(yVals..., @minY)
        @$outer.width(max_x)
        @$outer.height(max_y)
        #@$outer.animate({width: max_x, height: max_y}, 500)
        
    # TODO figure out how to deal with frames
    updateNodeLabels: ($node, vertex, frame = {}) ->
        for type, style of @vertexLabels
            $target = 
                if type is "inner"
                    $node.children("div.vertex-contents")
                else if type in ["ne","nw","se","sw"]
                    $node.children("div.vertex-#{type}-label")
            return unless $target?
            $target.html(
                if typeof style is "function"
                    Vamonos.rawToTxt(style(vertex))
                else if style.length
                    if style.every((o) -> typeof o is 'function')
                        Vamonos.rawToTxt(style[if @mode is 'edit' then 0 else 1](vertex))
                    else 
                        (v for v in style when frame[v]?.id is vertex.id)
                            .join(",")
                else
                    style
            )

    updateNodeClasses: ($node, vertex) ->
        if @mode isnt 'edit' and @vertexChanged(vertex)
            $node.addClass("changed") 
        for attr, val of @vertexCssAttributes
            if val.length
                $node.removeClass("#{attr}-#{kind}") for kind in val
                if vertex[attr] in val
                    $node.addClass("#{attr}-#{vertex[attr]}")
            else
                if vertex[attr] == val
                    $node.addClass(attr)
                else
                    $node.removeClass(attr)

    removeNode: (vid) ->
        node = @nodes[vid]
        @jsPlumbInstance.removeAllEndpoints(node)
        delete @nodes[vid]
        node.fadeOut(100, () -> node.remove())

    addConnection: (edge) ->
        return if @connections[edge.source.id]?[edge.target.id]
        con = @jsPlumbConnect(edge.source.id, edge.target.id)
        @setOverlays(con, edge)
        (@connections[edge.source.id] ?= {})[edge.target.id] = con
        (@connections[edge.target.id] ?= {})[edge.source.id] = con unless @directed
        return con

    removeConnection: (sourceId, targetId) ->
        return unless (connection = @connections[sourceId]?[targetId])
        @jsPlumbInstance.detach(connection) 
        delete @connections[sourceId][targetId]
        delete @connections[targetId][sourceId] unless @directed

    setOverlays: (connection, edge) ->
        connection.removeAllOverlays()
        if @directed
            connection.addOverlay(["PlainArrow", {location:-4, width:8, length:8}])

        if @edgeLabel?[0]?
            connection.addOverlay([
                "Custom",
                create: () => @createEdgeLabel(edge)
            ])

    createEdgeLabel: (edge) =>
        val = Vamonos.rawToTxt(edge[@edgeLabel[0]] ? "")
        $label = $("<div class='graph-label'>#{val}</div>")
        return $("<div>").append($label)

    vertexChanged: (newv) ->
        return unless newv?
        return unless @previousGraph?
        return unless oldv = @previousGraph.vertex(newv.id)
        return (
            (oldv[k] == v for k, v of newv).some((b) -> not b) or
            (newv[k] == v for k, v of oldv).some((b) -> not b)
        )

    clear: () ->
        @jsPlumbInstance.reset()
        @$inner.html("")
        @graphDrawn    = no
        @connections   = {}
        @nodes         = {}
        @previousGraph = undefined

Vamonos.export { Widget: { GraphDisplay } }
