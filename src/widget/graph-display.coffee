# modify edge attributes by clicking on them
# deletion of edges only via selection
# callbacks for buttons in drawer
#
# organize code, comment

class GraphDisplay

    constructor: ({
        container
        @vertexLabels
        @vertexCssAttributes
        @edgeLabel
        @colorEdges
        @highlightChanges
        @containerMargin
        @minX
        @minY
        @draggable
    }) ->

        @containerMargin  ?= 30
        @minX ?= @minY    ?= 100
        @draggable        ?= yes
        @highlightChanges ?= yes
        @connections       = {}
        @nodes             = {}
        @$outer            = Vamonos.jqueryify(container)
        @$inner            = $("<div>", {class: "graph-inner-container"})
        @graphDrawn        = no

        @$outer.append(@$inner)
        @$outer.disableSelection()

        @jsPlumbInstance = jsPlumb.getInstance
            Connector: ["Straight"]
            PaintStyle: @normalPaintStyle
            Endpoint: "Blank"
            Anchor: [ "Perimeter", { shape: "Circle" } ]


    # ------------ PUBLIC INTERACTION METHODS ------------- #

    # draw is the main display function for the graphDisplay widget. It draws
    # only as much of the graph that wasn't there before and removes nodes
    # and edges that have become obsolete. it is also used by edit mode
    # methods.
    draw: (graph, frame = {}) ->
        # if we're in edit mode, @mode will be set already. otherwise, we need
        # to set it to "display" so things like updateNodeLabels uses the
        # intended mode.
        @mode ?= "display"
        @directed = graph.directed
        @graphDrawn = true
        @$outer.find(".changed").removeClass("changed")
        for vertex in graph.getVertices()
            continue if @nodes[vertex.id]?
            @addNode(vertex)
        for edge in graph.getEdges()
            continue if @connections[edge.source.id]?[edge.target.id]?
            continue if (
                @connections[edge.target.id]?[edge.source.id]? and
                not @directed
            )
            @addConnection(edge)
        @eachConnection (sourceId, targetId) =>
            unless graph.edge(sourceId, targetId)
                @removeConnection(sourceId, targetId)
        @eachNode (vid, node) =>
            if graph.vertex(vid)
                @updateNode(node, graph.vertex(vid), frame)
            else
                @removeNode(vid)
        @updateConnections(graph, frame)
        @previousGraph = graph

    # ---------------------------------------------------------- #

    fitGraph: (graph, animate = false) ->
        # Add a test node, but don't show it, in order to get the width and
        # height of vertices when a graph is not drawn.
        @addNode({id:"TEST-VERTEX"}, false) unless @graphDrawn
        nodes = $("div.vertex-contents")
        width  = nodes.width()
        height = nodes.height()
        @removeNode("TEST-VERTEX") unless @graphDrawn
        xVals = []
        yVals = []
        for vertex in graph.getVertices()
            xVals.push(vertex.x + width  + @containerMargin)
            yVals.push(vertex.y + height + @containerMargin)
        max_x = Math.max(xVals..., @minX)
        max_y = Math.max(yVals..., @minY) + if @$drawer? then @$drawer.height() else 0
        if animate
            @$outer.animate({width: max_x, height: max_y}, 500)
        else
            @$outer.width(max_x)
            @$outer.height(max_y)

    clearDisplay: () ->
        @jsPlumbInstance.reset()
        @$inner.html("")
        @graphDrawn    = no
        @connections   = {}
        @nodes         = {}
        @previousGraph = undefined

    eachNode: (f) ->
        f(vid, node) for vid, node of @nodes

    eachConnection: (f) ->
        # If the graph is undirected, we need to keep track of which
        # connections have already been processed since the @connections
        # object will contain two identical references to each connection.
        seen = [] unless @directed
        for sourceId, targets of @connections
            for targetId, con of targets
                unless @directed
                    continue if con in seen
                    seen.push con
                f(sourceId, targetId, con)

    # ----------- display mode node functions ---------- #

    addNode: (vertex, show = true) ->
        $v = $("<div>", {class: 'vertex', id: vertex.id})
        $v.hide()
        $v.css("left", vertex.x)
        $v.css("top",  vertex.y)
        $v.css("position", "absolute")
        $contents = $("<div>", class: "vertex-contents")
        for type, style of @vertexLabels
            if type in ["ne","nw","se","sw"]
                $("<div>", { class:"vertex-#{type}-label" }).appendTo($v)

        @jsPlumbInstance.draggable($v,
            containment: "parent"
            start: (event, ui) ->
                Vamonos.moveToTop($v)
            stop: (event, ui) =>
                $v.css("z-index", "auto")
                if @mode is 'edit'
                    vertex.x = ui.position.left
                    vertex.y = ui.position.top
        ) if @draggable

        $v.append($contents)
        @$inner.append($v)
        $v.fadeIn(100) if show
        return @nodes[vertex.id] = $v

    removeNode: (vid) ->
        node = @nodes[vid]
        @jsPlumbInstance.removeAllEndpoints(node)
        delete @nodes[vid]
        node.fadeOut(100, () -> node.remove())

    updateNode: ($node = @nodes[vid], vertex, frame) ->
        return unless $node? and vertex?
        @updateNodeLabels($node, vertex, frame)
        @updateNodeClasses($node, vertex, frame)
        @updateNodePosition($node, vertex, frame)

    updateNodePosition: ($node, vertex) ->
        pos = $node.position()
        return if pos.left == vertex.x and pos.top == vertex.y
        @jsPlumbInstance.animate(
            vertex.id
            { left: vertex.x, top: vertex.y }
            { duration: 500 }
        )

    updateNodeLabels: ($node, vertex, frame) ->
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
                    (v for v in style when frame[v]?.id is vertex.id)
                        .join(",")
                else if typeof style is "object"
                    Vamonos.rawToTxt(style[@mode](vertex))
                else
                    style
            )

    updateNodeClasses: ($node, vertex) ->
        if @highlightChanges and @mode is 'display' and @vertexChanged(vertex)
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

    vertexChanged: (newv) ->
        return unless newv?
        return unless @previousGraph?
        return unless oldv = @previousGraph.vertex(newv.id)
        v0 = (for k, v of newv
            if v.type is "vertex"
                oldv[k]?.id isnt v.id
            else
                oldv[k] isnt v
        ).filter((x)->x)
        v1 = (for k, v of newv
            if v.type is "vertex"
                newv[k]?.id isnt v.id
            else
                newv[k] isnt v
        ).filter((x)->x)
        return true if v0.length or v1.length

    # --------- Display mode connection functions ---------- #

    addConnection: (edge) ->
        return if @connections[edge.source.id]?[edge.target.id]
        con = @jsPlumbInstance.connect
            source: edge.source.id
            target: edge.target.id
        @setOverlays(con, edge)
        (@connections[edge.source.id] ?= {})[edge.target.id] = con
        (@connections[edge.target.id] ?= {})[edge.source.id] = con unless @directed
        return con

    removeConnection: (sourceId, targetId) ->
        return unless (connection = @connections[sourceId]?[targetId])
        @jsPlumbInstance.detach(connection)
        delete @connections[sourceId][targetId]
        delete @connections[targetId][sourceId] unless @directed

    updateConnections: (graph, frame) ->
        return unless @colorEdges?

        @eachConnection (sourceId, targetId, con) =>
            @resetConnectionStyle(con)

        for style in @colorEdges
            if typeof style[0] is 'string'
                [source, target] = style[0].split(/->/).map((v)->frame[v])
                continue unless source? and target?
                con = @connections[source.id]?[target.id]
                continue unless con?
                con.setPaintStyle(@customStyle(style[1]))
            else if typeof style[0] is 'function'
                for edge in graph.getEdges()
                    edgeHack =
                        source: graph.vertex(edge.source)
                        target: graph.vertex(edge.target)
                    for attr, val of edge when not attr in ["source", "target"]
                        edgeHack[attr] = val
                    if style[0](edgeHack)
                        con = @connections[edge.source.id]?[edge.target.id]
                        con.setPaintStyle(@customStyle(style[1]))

    resetConnectionStyle: (c) =>
        c?.setPaintStyle(@normalPaintStyle)

    setOverlays: (connection, edge) ->
        connection.removeAllOverlays()
        connection.addOverlay([
            "PlainArrow"
            {location:-4, width:12, length:8}
        ]) if @directed
        connection.addOverlay([
            "Custom"
            create: => @createEdgeLabel(edge)
            id: "edgeLabel"
        ]) if @edgeLabel?[0]? and edge?

    createEdgeLabel: (edge) =>
        val = Vamonos.rawToTxt(edge[@edgeLabel[0]] ? "")
        $label = $("<div class='graph-label'>#{val}</div>")
        return $("<div>").append($label)

    # ----------- styles, colors and jsplumb stuff -------------- #

    @editColor        = "#92E894"
    @lightEdgeColor   = "#cccccc"
    @darkEdgeColor    = "#aaaaaa"
    @deletionColor    = "#FF7D7D"
    @lineWidth        = 4

    normalPaintStyle:
        lineWidth: @lineWidth
        strokeStyle: @lightEdgeColor

    deletionPaintStyle:
        strokeStyle: @deletionColor
        lineWidth: @lineWidth

    potentialEdgePaintStyle:
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
        lineWidth: GraphDisplay.lineWidth
        strokeStyle: color

Vamonos.export { Widget: { GraphDisplay } }
