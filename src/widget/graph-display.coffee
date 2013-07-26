# modify edge attributes by clicking on them
# deletion of edges only via selection
# callbacks for buttons in drawer
#
# organize code, comment

class GraphDisplay

    constructor: ({
        container
        @directed

        @vertexLabels
        @vertexCssAttributes
        @edgeLabel
        @colorEdges

        @containerMargin
        @minX
        @minY
        @containerResizeLimitX
        @containerResizeLimitY
    }) ->

        @directed              ?= no
        @containerMargin       ?= 30
        @containerResizeLimitX ?= window.innerWidth
        @containerResizeLimitY ?= window.innerHeight
        @minX ?= @minY         ?= 100

        @connections = {}
        @nodes       = {}

        @$outer = Vamonos.jqueryify(container)
        @$inner = $("<div>", {class: "graph-inner-container"})
        @$outer.append(@$inner)
        @$outer.disableSelection()

        @jsPlumbInstance = jsPlumb.getInstance 
            Connector: ["Straight"]
            PaintStyle: @normalPaintStyle
            Endpoint: "Blank"
            Anchor: [ "Perimeter", { shape: "Circle" } ]

        @graphDrawn = false

    draw: (graph, frame = {}) ->
        @mode ?= "display"
        @directed = graph.directed
        @resizeContainerToFitGraph(graph, false) unless @graphDrawn
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

        @eachNode (vid, node) => @removeNode(vid) unless graph.vertex(vid)
        @eachNode (vid, node) => @updateNode(node, graph.vertex(vid), frame)

        @updateConnections(graph, frame)
        @previousGraph = graph

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

    resizeContainerToFitGraph: (graph, animate = true) ->
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
            #containment: "parent"
            containment: [
                @$inner.position().left        
                @$inner.position().top         
                @$inner.position().left + @$inner.width() - @containerMargin
                @$inner.position().top + @$inner.height() - @containerMargin
            ]

            start: (event, ui) ->
                Vamonos.moveToTop($v)
            stop: (event, ui) =>
                $v.css("z-index", "auto")
                if @mode is 'edit'
                    vertex.x = ui.position.left
                    vertex.y = ui.position.top
        )

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
            {location:-4, width:8, length:8}
        ]) if @directed
        connection.addOverlay([
            "Custom",
            create: () =>
                if @mode is 'edit'
                    @createEditableEdgeLabel(edge) 
                else
                    @createEdgeLabel(edge)

        ]) if @edgeLabel?[0]? and edge?

    createEdgeLabel: (edge) =>
        val = Vamonos.rawToTxt(edge[@edgeLabel[0]] ? "")
        $label = $("<div class='graph-label'>#{val}</div>")
        return $("<div>").append($label)

    # ----------------- EDITING MODE ------------------------ #

    startEditing: (@theGraph, @inputVars) ->
        return if @mode is "edit"
        @mode = "edit"
        @draw(@theGraph, @inputVars)
        @setContainerEditBindings()
        @setNodeEditBindings()
        @setConnectionEditBindings()

    stopEditing: ->
        @deselect()
        @mode = undefined
        @unsetNodeEditBindings()
        @unsetConnectionEditBindings()
        @$outer.off("click.vamonos-graph")
        return [@theGraph, @inputVars]

    addVertex: (vertex = {}, autoSelect = true) ->
        return unless @mode is 'edit'
        newv = @theGraph.addVertex(vertex)
        @draw(@theGraph, @inputVars)
        node = @nodes[newv.id]
        @selectNode(node) if autoSelect
        node
        
    removeVertex: (vid) ->
        return unless @mode is 'edit'
        @deselect()
        @removeNode(vid)
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined 
        @draw(@theGraph, @inputVars)

    addEdge: (sourceId, targetId) ->
        return unless @mode is 'edit'
        attrs = {}
        if @edgeLabel?.length
            attrs[@edgeLabel[0]] = @edgeLabel[1]
        @theGraph.addEdge(sourceId, targetId, attrs)
        @draw(@theGraph, @inputVars)
        @connectionBindings(@connections[sourceId][targetId])

    removeEdge: (sourceId, targetId) ->
        return unless @mode is 'edit'
        @deselect() if 'edge' is @selected()
        @theGraph.removeEdge(sourceId, targetId)
        @draw(@theGraph, @inputVars)

    setContainerEditBindings: ->
        @$outer.on "click.vamonos-graph", (e) =>
            $target = $(e.target)
            if not @selected()
                if $target.is("div.vertex-contents")
                    @selectNode($target.parent())
                if $target.is(@$inner)
                    @addVertex({x: e.offsetX - 12, y: e.offsetY - 12})
            else
                if $target.is("div.vertex-contents") and 'vertex' is @selected()
                    sourceId = @$selectedNode.attr("id")
                    targetId = $target.parent().attr("id")
                    if sourceId is targetId
                        @deselect() 
                    else if @theGraph.edge(sourceId, targetId)
                        @selectNode(@nodes[targetId])
                    else
                        @addEdge(sourceId, targetId)
                        @removePotentialEdge()
                else if $target.is("div.vertex-contents") and 'edge' is @selected() 
                    @selectNode($target.parent())
                else if $target.is(@$inner)
                    @deselect()
            true

    unsetContainerEditBindings: ->
        @$outer.off("click.vamonos-graph")

    setNodeEditBindings: ->
        @$inner.on "mouseenter", "div.vertex", (e) =>
            if 'vertex' is @selected() 
                return if e.target.id is @$selectedNode.attr("id")
            $(e.target).addClass('hovering')
        @$inner.on "mouseleave", "div.vertex", (e) =>
            $(e.target).removeClass('hovering')

    unsetNodeEditBindings: ->
        @$inner.off "mouseenter", "div.vertex"
        @$inner.off "mouseleave", "div.vertex"

    setConnectionEditBindings: ->
        @eachConnection (sourceId, targetId, con) => 
            @connectionBindings(con)

    connectionBindings: (con) ->
        con.bind "click", (c) => 
            @selectConnection(c)

        con.bind "mouseenter", (c) =>
            return if c.id is @$selectedConnection?.id
            c.setPaintStyle(@hoverPaintStyle)

        con.bind "mouseexit", (c) =>
            return if c.id is @$selectedConnection?.id
            @resetConnectionStyle(c)


    unsetConnectionEditBindings: ->
        @eachConnection (sourceId, targetId, connection) => 
            connection.unbind("click")
            connection.unbind("mouseenter")
            connection.unbind("mouseexit")

    clear: () ->
        @jsPlumbInstance.reset()
        @$inner.html("")
        @graphDrawn    = no
        @connections   = {}
        @nodes         = {}
        @previousGraph = undefined

    selected: () ->
        return 'vertex' if @$selectedNode?
        return 'edge'   if @$selectedConnection?
        return false

    selectNode: (node) ->
        @stopEditingLabel()
        @deselectNode()       if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()

        @$selectedNode = node
        @$selectedNode.addClass("selected")
        @$selectedNode.removeClass('hovering')

        # Show dotted and red lines for potential edge additions/deletions
        @others = @$selectedNode
            .siblings("div.vertex")
            .children("div.vertex-contents")
        @others.on "mouseenter.vamonos-graph", (e) => 
            @potentialEdgeTo($(e.target).parent())
        @others.on "mouseleave.vamonos-graph", @removePotentialEdge

        @openDrawer('vertex', node)

    selectConnection: (con) ->
        @deselectNode()       if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()

        @$selectedConnection = con
        @$selectedConnection.setPaintStyle(@selectedPaintStyle)

        @openDrawer('edge', con)
            
    stopEditingLabel: ->
        @$inner.find("input.editing").trigger("something-selected")

    deselect: () ->
        @deselectNode()
        @deselectConnection()
        @closeDrawer()
        
    deselectNode: () ->
        return unless @$selectedNode?
        @jsPlumbInstance.detach(@possibleEdge) if @possibleEdge?
        @others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
        @$selectedNode.removeClass("selected")
        @$selectedNode = undefined

    deselectConnection: () ->
        return unless @$selectedConnection?
        @resetConnectionStyle(@$selectedConnection)
        @$selectedConnection = undefined
        @removePotentialEdge()

    potentialEdgeTo: (node) =>
        sourceId   = @$selectedNode.attr("id")
        targetId   = node.attr("id")
        return if @connections[sourceId]?[targetId]?

        @potentialEdge = @jsPlumbInstance.connect
            source: sourceId
            target: targetId
            paintStyle: @potentialEdgePaintStyle

        @setOverlays(@potentialEdge)

    removePotentialEdge: () =>
        return unless @potentialEdge?
        @jsPlumbInstance.detach(@potentialEdge)
        @potentialEdge = undefined

    # TODO split this up
    openDrawer: ->
        if @$drawer?
            @$drawer.html("")
        else
            @$drawer = $("<div>", { class: "graph-drawer" })
            @$drawer.hide()
            @$inner.append(@$drawer)

        type = @selected()

        $inputHolder = $("<span>", {class: "right"})
        switch type 
            when 'vertex'
                elem = @theGraph.vertex(@$selectedNode.attr("id"))
                @$drawer.html("<span class='left'>vertex&nbsp;&nbsp;#{elem.name}</span>")

                for v of @inputVars
                    $button = $("<button>", {text: "#{v}"})
                    $button.on "click.vamonos-graph", (e) =>
                        @inputVars[v] = elem
                        @draw(@theGraph, @inputVars)
                    $inputHolder.append($button)

            when 'edge'
                sourceId = @$selectedConnection.sourceId 
                targetId = @$selectedConnection.targetId
                elem = @theGraph.edge(sourceId, targetId)
                nametag = 
                    elem.source.name + "&nbsp;" +
                    (if @theGraph.directed then "->" else "-") + 
                    "&nbsp;" + elem.target.name
                @$drawer.html("<span class='left'>edge&nbsp;&nbsp;#{nametag}</span>")

        $deleteButton = $("<button>", {text: "del"})
        $deleteButton.on "click.vamonos-graph", (e) =>
            switch type
                when 'vertex' 
                    @removeVertex(elem.id)
                when 'edge'   
                    @removeEdge(elem.source.id, elem.target.id)
        $inputHolder.append($deleteButton)

        @$drawer.append($inputHolder)

        unless @$drawer.is(":visible")
            @$drawer.fadeIn("fast")
            @$outer.animate(height: (@$outer.height() + @$drawer.height()), 200)

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")
        @$outer.animate(height: (@$outer.height() - @$drawer.height()), 200)
        @$drawer = undefined

    createEditableEdgeLabel: (edge) =>
        $attr = $(
            "<div class=graph-label>" + 
            Vamonos.rawToTxt(edge[@edgeLabel[0]]) +
            "&nbsp;</div>"
        )
        $attr.on "click", => 
            @selectConnection(@connections[edge.source.id][edge.target.id])
            @editAttribute($attr, edge)
        return $attr

    editAttribute: ($outer, edge) =>
        $editor = $("<input class='inline-input'>")
        $editor.hide()
        $editor.val(edge[@edgeLabel[0]] ? "")
        $editor.width($outer.width())
        $editor.on "keydown.vamonos-graph", (event) =>
            if event.keyCode in [13, 32, 9, 27]
                @doneEditingAttribute($outer, $editor, edge)
                false
        $editor.on "blur.vamonos-graph something-selected", (event) =>
            @doneEditingAttribute($outer, $editor, edge)
            true
        $outer.html($editor)
        $editor.fadeIn "fast"
        $editor.focus()
        $editor.select()

    doneEditingAttribute: ($outer, $editor, edge) ->
        val = Vamonos.txtToRaw($editor.val())
        if val?
            edge[@edgeLabel[0]] = val
        $outer.html(@createEditableEdgeLabel(edge))
        @setOverlays(@$selectedConnection, edge)

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

    jsPlumbConnect: (sourceId, targetId) ->
        @jsPlumbInstance.connect
            source: sourceId
            target: targetId 

Vamonos.export { Widget: { GraphDisplay } }
