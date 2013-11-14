class GraphDisplay

    @description = "GraphDisplay provides display functionality to " +
        "widgets that need not use graph data structures."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        vertexLabels:
            type: "Object"
            defaultValue: {}
            description:
                "an object containing a mapping of label positions " +
                "(inner, nw, sw, ne, se) to labels. Labels can display " +
                "simple variable names (corresponding to inputVars). " +
                "This must be provided in the form: `{ label: ['var1', 'var2'] }`. " +
                "It can be more complicated, as a function that takes " +
                "a vertex and returns some html. if we give a label " +
                "an object, we can control what is shown in edit/display " +
                "mode in the form: " +
                "`{ label : { edit: function{}, display: function{} } }`"
            example: 
                "vertexLabels: {\n" +
                "    inner : {\n" +
                "        edit: function(vtx){return vtx.name}, \n" +
                "        display: function(vtx){return vtx.d} \n" +
                "    },\n" +
                "    sw    : function(vtx){return vtx.name}, \n" +
                "    ne    : ['u', 'v'],\n" +
                "    nw    : ['s'],\n" +
                "}"
        edgeLabel: 
            type: ["Object", "Array","Function"]
            defaultValue: undefined
            description: 
                "an array, containing the name of the edge attribute to display" +
                "and the default value for new edges or a function taking an edge " +
                "and returning a string. one can also specify whether to show certain " +
                "things in edit or display mode by using an object."
            example:
                "edgeLabel: { display: [ 'w', 1 ], edit: function(e){ return e.w } }"
        colorEdges:
            type: "Array"
            defaultValue: []
            description:
                "provides a way to set edge coloring based on vertex variables " +
                "or edge properties. takes an array of doubles of the form  " +
                "`[ edge-predicate, color ]`, where color is a hex color and edge-" +
                "predicate is either a string of the form `'vertex1->vertex2'` or " +
                "a function that takes an edge and returns a boolean"
            example:
                "colorEdges: [\n" +
                "    ['u->v', '#FF7D7D'],\n" +
                "    [ function(edge){\n" +
                "        return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)\n" +
                "            || (edge.source.pred ? edge.source.pred.id === edge.target.id : false) }\n" +
                "    , '#92E894' ],\n" +
                "]"
        vertexCssAttributes:
            type: "Object"
            defaultValue: {}
            description:
                "provides a way to change CSS classes of vertices based on " +
                "vertex attributes. takes an object of the form `{ attribute: " +
                "value | [list of values] }`. in the case of a single value,  " +
                "the vertex will simply get a class with the same name as " +
                "the attribute. in the case of a list of values, the css " +
                "class will be of the form 'attribute-value' when its value " +
                "matches."
            example:
                "vertexCssAttributes: { done: true }\n" +
                "vertexCssAttributes: { color: ['white', 'gray', 'black'] }"
        containerMargin:
            type: "Number"
            defaultValue: 30
            description: "how close nodes can get to the container edge"
        minX:
            type: "Number"
            defaultValue: 100
            description: "minimum width of the graph widget"
        minY:
            type: "Number"
            defaultValue: 100
            description: "minimum height of the graph widget"
        resizable:
            type: "Boolean"
            defaultValue: true
            description: "whether the graph widget is resizable"
        draggable:
            type: "Boolean"
            defaultValue: true
            description: "whether nodes can be moved"
        highlightChanges:
            type: "Boolean"
            defaultValue: true
            description: "whether nodes will get the css class 'changed' when they are modified"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @connections       = {}
        @nodes             = {}
        @$outer            = Vamonos.jqueryify(@container)
        @$inner            = $("<div>", {class: "graph-inner-container"})
        @graphDrawn        = no

        if @edgeLabel?.constructor.name isnt 'Object'
            @edgeLabel = { edit: @edgeLabel, display: @edgeLabel }

        @$outer.append(@$inner)
        @$outer.disableSelection()

        if @resizable
            @$outer.resizable(
                handles: "se"
                minWidth: @minX
                minHeight: @minY               
            )

        @jsPlumbInstance = jsPlumb.getInstance
            Connector: ["Straight"]
            PaintStyle: @normalPaintStyle
            Endpoint: "Blank"
            Anchor: [ "Perimeter", { shape: "Circle" } ]

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            for e in @colorEdges when typeof e[0] is 'string'
                @viz.registerVariable(v) for v in e[0].split(/<?->?/)
            for label, values of @vertexLabels
                for v in values when typeof v is 'string'
                    @viz.registerVariable(v)

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
            @addConnection(edge, graph)
        @eachConnection (sourceId, targetId) =>
            unless graph.edge(sourceId, targetId)
                @removeConnection(sourceId, targetId, graph)
        @eachNode (vid, node) =>
            if graph.vertex(vid)
                @updateNode(node, graph.vertex(vid), frame)
            else
                @removeNode(vid)
        @updateConnections(graph, frame)
        @previousGraph = graph

    # ---------------------------------------------------------- #

    fitGraph: (graph, animate = false) ->
        if graph?
            # Add a test node, but don't show it, in order to get the width and
            # height of vertices when a graph is not drawn.
            unless @_vertexWidth? and @_vertexHeight?
                nodes = $("div.vertex-contents")
                unless nodes.size()
                    @addNode({id:"TEST-VERTEX"}, false)
                    clearMe = true
                @_vertexWidth  = nodes.width()
                @_vertexHeight = nodes.height()
                @removeNode("TEST-VERTEX") if clearMe
            xVals = []
            yVals = []
            for vertex in graph.getVertices()
                xVals.push(vertex.x + @_vertexWidth  + @containerMargin)
                yVals.push(vertex.y + @_vertexHeight + @containerMargin)
            max_x = Math.max(xVals..., @minX)
            max_y = Math.max(yVals..., @minY) + if @$drawer? then @$drawer.height() else 0
        else
            max_x = 0
            max_y = 0
        if animate
            @$outer.animate({width: max_x, height: max_y}, 500)
        else
            @$outer.width(max_x)
            @$outer.height(max_y)
        if @resizable
            @$outer.resizable("option", "minWidth", max_x)
            @$outer.resizable("option", "minHeight", max_y)

    clearDisplay: ->
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
        node.fadeOut(100, -> node.remove())

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
                if style.constructor.name is "Function"
                    Vamonos.rawToTxt(style(vertex))
                else if style.constructor.name is "Array"
                    (Vamonos.removeNamespace(v) for v in style when frame[v]?.id is vertex.id)
                        .join(",")
                else if style.constructor.name is "Object"
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
        return false unless newv?
        return false unless @previousGraph?
        return false unless oldv = @previousGraph.vertex(newv.id)
        for k,v of newv
            if v.type is "Vertex"
                return true if oldv[k]?.id isnt v.id
            else
                return true if oldv[k] isnt v
        for k,v of newv
            if v.type is "Vertex"
                return true if newv[k]?.id isnt v.id
            else
                return true if newv[k] isnt v

    # --------- Display mode connection functions ---------- #

    addConnection: (edge, graph) ->
        return if @connections[edge.source.id]?[edge.target.id]?
        if @directed and @connections[edge.target.id]?[edge.source.id]?
            con = @connections[edge.target.id][edge.source.id]
            con.addOverlay([
                "PlainArrow"
                { id: "backArrow", location: 4, direction: -1, width: 12, length: 8 }
            ])
            @setLabel(con, graph) if @mode is 'display'
            ((@backEdges ?= {})[edge.source.id] ?= {})[edge.target.id] = con
        else
            con = @jsPlumbInstance.connect
                source: edge.source.id
                target: edge.target.id
            @setOverlays(con, edge)
        (@connections[edge.source.id] ?= {})[edge.target.id] = con
        (@connections[edge.target.id] ?= {})[edge.source.id] = con unless @directed
        return con

    removeConnection: (sourceId, targetId, graph) ->
        if @backEdges?[sourceId]?[targetId]?
            con = @backEdges[sourceId][targetId]
            con.removeOverlay("backArrow") 
            @setLabel(con, graph) if @mode is 'display'
            delete @backEdges[sourceId][targetId]
            delete @connections[sourceId][targetId]

        else if @backEdges?[targetId]?[sourceId]?
            con = @backEdges[targetId][sourceId]
            @jsPlumbInstance.detach(con)
            delete @backEdges[targetId][sourceId]
            delete @connections[sourceId][targetId]
            @addConnection(graph.edge(targetId,sourceId), graph)

        else
            con = @connections[sourceId]?[targetId]
            return unless con?
            @jsPlumbInstance.detach(con)
            delete @connections[sourceId][targetId]
            delete @connections[targetId][sourceId] unless @directed

    updateConnections: (graph, frame) ->
        return unless @colorEdges?
        @eachConnection (sourceId, targetId, con) =>
            @resetConnectionStyle(con)
            @setLabel(con, graph) if @mode is 'display'
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
                    if style[0](edge) or style[0](edgeHack)
                        con = @connections[edge.source.id]?[edge.target.id]
                        con.setPaintStyle(@customStyle(style[1]))

    resetConnectionStyle: (con) ->
        con.setPaintStyle(@normalPaintStyle)

    setOverlays: (connection) ->
        connection.removeAllOverlays()
        connection.addOverlay([
            "PlainArrow"
            {location:-4, width:12, length:8}
        ]) if @directed

    setLabel: (con, graph) ->
        return unless @edgeLabel[@mode]?
        con.removeOverlay("edgeLabel")
        con.removeOverlay("edgeLabel")

        if graph.directed and graph.edge(con.targetId, con.sourceId)
            backEdge = graph.edge(con.targetId, con.sourceId)
            loc = 0.75
            backLoc = 0.25

        edge = graph.edge(con.sourceId, con.targetId)

        if @edgeLabel[@mode].constructor.name is 'Function'
            val = @edgeLabel[@mode](edge)
            backVal = @edgeLabel[@mode](backEdge) if backEdge?

        else if @edgeLabel[@mode].constructor.name is 'Array'
            attr = @edgeLabel[@mode][0]
            val = Vamonos.rawToTxt(edge[attr] ? "")
            backVal = Vamonos.rawToTxt(backEdge[attr] ? "") if backEdge?

        else
            return

        con.addOverlay([
            "Custom",
            create: =>
                $label = $("<div class='graph-label'>#{val}</div>")
                return $("<div>").append($label)
            id: "edgeLabel",
            location: loc ? 0.5
        ]) 

        con.addOverlay([
            "Custom",
            create: =>
                $label = $("<div class='graph-label'>#{backVal}</div>")
                return $("<div>").append($label)
            id: "edgeLabel",
            location: backLoc
        ]) if backEdge?


    # ----------------- drawer --------------- # 
    
    openDrawer: ({buttons, label}) ->
        if @$drawer?
            @$drawer.html("<div class='graph-drawer'></div>")
        else
            @$drawer = $("<div>", { class: "graph-drawer" }).hide()
            @$outer.after(@$drawer)
        $("<span class='label'>#{label}</span>").appendTo(@$drawer)
        @$drawer.append(buttons) if buttons?
        @$drawer.fadeIn("fast") unless @$drawer.is(":visible")

    closeDrawer: ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")

    # ----------- styles, colors and jsplumb stuff -------------- #

    @editColor        = "#92E894"
    @lightEdgeColor   = "#cccccc"
    @darkEdgeColor    = "#aaaaaa"
    @deletionColor    = "#FF7D7D"
    @lineWidth        = 4

    normalPaintStyle:
        dashstyle   : "0"
        lineWidth   : @lineWidth
        strokeStyle : @lightEdgeColor

    potentialEdgePaintStyle:
        dashstyle   : "1 1"
        strokeStyle : @editColor
        lineWidth   : @lineWidth + 1

    selectedPaintStyle:
        lineWidth   : @lineWidth
        strokeStyle : @editColor

    hoverPaintStyle:
        lineWidth   : @lineWidth
        strokeStyle : @darkEdgeColor

    customStyle: (color) ->
        lineWidth   : GraphDisplay.lineWidth
        strokeStyle : color

@Vamonos.export { Widget: { GraphDisplay } }
