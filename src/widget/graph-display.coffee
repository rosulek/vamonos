class GraphDisplay

    @description =
        "GraphDisplay provides display functionality to " +
        "widgets that might not need to use graph data structures."

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
            example: """
                vertexLabels: {
                    inner : {
                        edit: function(vtx){return vtx.name},
                        display: function(vtx){return vtx.d}
                    },
                    sw    : function(vtx){return vtx.name},
                    ne    : ['u', 'v'],
                    nw    : ['s'],
                }
                """
        edgeLabel:
            type: ["String", "Function","Object"]
            defaultValue: undefined
            description:
                "a string, containing the name of the edge attribute to display" +
                "or a function taking an edge and returning a string to display. " +
                "one can also specify whether to show certain things in edit or " +
                "display mode by using an object."
            example: """
                edgeLabel: { display: 'w', edit: function(e){ return e.w } },
                edgeLabel: 'w',
                edgeLabel: function(e){ return e.w + "!" },
                """
        colorEdges:
            type: "Array"
            defaultValue: []
            description:
                "provides a way to set edge coloring based on vertex variables " +
                "or edge properties. takes an array of doubles of the form  " +
                "`[ edge-predicate, color, [optional weight] ]`, where color is a hex color and edge-" +
                "predicate is either a string of the form `'vertex1->vertex2'` or " +
                "a function that takes an edge and returns a boolean. Also for added " +
                "complexity and enjoyment, the color string can also be a function taking " +
                "an edge and returning a color string or a color string and a width (if " +
                "it returns an array)."
            example: """
                colorEdges: [
                    ['u->v', '#FF7D7D'],
                    [ function(edge){
                        return (edge.target.pred ? edge.target.pred.id === edge.source.id : false)
                            || (edge.source.pred ? edge.source.pred.id === edge.target.id : false) }
                    , '#92E894' ],
                    [ 'w->t', function(e){ if (e.f > 10) return "blue"; } ],
                    [ 'w->x', function(e){ if (e.f < 10) return ["blue",10]; } ],
                ]
                """
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
                "matches. You can also provide a function that takes a vertex " +
                "and returns a class to apply to it."
            example: """
                vertexCssAttributes: { 
                    done: true, 
                    color: ['white', 'gray', 'black'],
                    magic: function(vtx){ return "class-" + vtx.magicAttr },
                },
                """
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

        @connections = {}
        @nodes       = {}
        @$outer      = Vamonos.jqueryify(@container)
        @$inner      = $("<div>", {class: "graph-inner-container"})

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

    # ------------ PUBLIC INTERACTION METHODS ------------- #

    # A widget that uses GraphDisplay will need to pass along the setup event
    # in order to register vars from vertexLabels and colorEdges
    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            for e in @colorEdges when typeof e[0] is 'string'
                @viz.registerVariable(v) for v in e[0].split(/<?->?/)
            for label, values of @vertexLabels
                for v in values when typeof v is 'string'
                    @viz.registerVariable(v)

    # draw is the main display function for the graphDisplay widget. It draws
    # only as much of the graph that wasn't there before and removes nodes
    # and edges that have become obsolete. it doesn't rely on events, so that
    # the graph can be updated in various host widget's edit mode.
    draw: (graph, frame = {}) ->
        # if there is a hidden graph, show it
        @showGraph() if @graphHidden
        # if we're in edit mode, @mode will be set already. otherwise, we need
        # to set it to "display" so things like updateNodeLabels uses the
        # intended mode.
        @mode ?= "display"
        @directed = graph.directed
        @$outer.find(".changed").removeClass("changed")

        # add new vertices
        for vertex in graph.getVertices()
            continue if @nodes[vertex.id]?
            @addNode(vertex)

        # add new edges - this needs to happen before edge removal so that edges in 
        # directed graphs can have their arrows flipped instead of being deleted and
        # recreated going in the opposite direction
        for edge in graph.getEdges()
            continue if @connections[edge.source.id]?[edge.target.id]?
            continue if not @directed and @connections[edge.target.id]?[edge.source.id]?
            @addConnection(edge.source.id, edge.target.id)

        # remove unneeded edges
        @eachConnection (sourceId, targetId) =>
            unless graph.edge(sourceId, targetId)
                @removeConnection(sourceId, targetId)

        # remove unneeded vertices and update needed ones
        @eachNode (vid, node) =>
            if graph.vertex(vid)
                @updateNode(node, graph.vertex(vid), frame)
            else
                @removeNode(vid)

        @updateConnections(graph, frame)
        @previousGraph = graph

    fitGraph: (graph, animate = false) ->
        if graph?
            nodes = $("div.vertex-contents")
            @getVertexDimensions(nodes) unless @_vertexWidth? and @_vertexHeight?
            xVals = []
            yVals = []
            for vertex in graph.getVertices()
                xVals.push(vertex.x + @_vertexWidth  + @containerMargin)
                yVals.push(vertex.y + @_vertexHeight + @containerMargin)
            max_x = Math.max(xVals..., @minX)
            max_y = Math.max(yVals..., @minY)
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

    getVertexDimensions: (nodes) ->
        unless nodes.length
            fakeNode = @addNode({id:"FAKER"}, false)
            nodes = fakeNode
        @_vertexHeight = nodes.height()
        @_vertexWidth  = nodes.width()
        if fakeNode?
            @removeNode("FAKER")

    hideGraph: () ->
        @$outer.hide()
        @graphHidden = true

    showGraph: () ->
        @$outer.show()
        @graphHidden = false

    clearDisplay: ->
        @jsPlumbInstance.reset()
        @$inner.html("")
        @connections   = {}
        @nodes         = {}
        @previousGraph = undefined

    # ---------------------------------------------------------- #

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
              .hide()
        $v.css({
            left: vertex.x
            top: vertex.y
            position: "absolute"
        })
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
        @nodes[vertex.id] = $v

    removeNode: (vid) ->
        node = @nodes[vid]
        delete @nodes[vid]
        @jsPlumbInstance.removeAllEndpoints(node)
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
                    res = []
                    for v in style when frame[v]?.id is vertex.id
                        res.push(Vamonos.resolveSubscript(Vamonos.removeNamespace(v)))
                    res.join(",")
                else if style.constructor.name is "Object"
                    Vamonos.rawToTxt(style[@mode](vertex))
                else
                    style)

    updateNodeClasses: ($node, vertex) ->
        if @highlightChanges and @mode is 'display' and @vertexChanged(vertex)
            $node.addClass("changed")
        for attr, val of @vertexCssAttributes
            if val.constructor.name is "Function"
                newClass = val(vertex)
                $node.addClass(newClass) if newClass?
            else if val.length
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
        for k,v of oldv
            if v.type is "Vertex"
                return true if newv[k]?.id isnt v.id
            else
                return true if newv[k] isnt v

    # --------- Display mode connection functions ---------- #

    addConnection: (sourceId, targetId) ->
        # stop if the connection is there already
        return if @connections[sourceId]?[targetId]?
        # if there is a back edge and the graph is directed
        if @directed and @connections[targetId]?[sourceId]?
            con = @connections[targetId][sourceId]
            @addBackArrow(con)
            con.backEdgeSource = sourceId
        else # the forward connection does not exist
            con = @jsPlumbInstance.connect({
                source: sourceId
                target: targetId
            })
            if @directed 
                @addForwardArrow(con)
                con.forwardEdgeSource = sourceId
        (@connections[sourceId] ?= {})[targetId] = con
        # edges go into @connections both ways in undirected graphs
        (@connections[targetId] ?= {})[sourceId] = con unless @directed
        return con

    removeConnection: (sourceId, targetId) ->
        con = @connections[sourceId]?[targetId]
        return unless con?
        # it's pretty simple when the graph is undirected
        if not @directed
            @jsPlumbInstance.detach(con) # this is a costly operation, AVOID IT
            # delete both forward and back entries in connections table
            delete @connections[sourceId][targetId]
            delete @connections[targetId][sourceId]
            # we'll return here, so as to simplify up the directed mess to follow
            return

        ## otherwise the graph is directed 

        # if the edge is a forward edge with a back edge, delete forward arrow
        if con.forwardEdgeSource is sourceId and con.backEdgeSource is targetId
            @removeForwardArrow(con)
            delete con.forwardEdgeSource

        # if the edge is a forward edge with no back edge, delete connection
        if con.forwardEdgeSource is sourceId and not con.backEdgeSource?
            @jsPlumbInstance.detach(con)

        # if the edge is a back edge with a forward edge, delete back arrow
        if con.forwardEdgeSource is targetId and con.backEdgeSource is sourceId
            @removeBackArrow(con)
            delete con.backEdgeSource

        # if the edge is a back edge with no forward edge, delete connection
        if not con.forwardEdgeSource? and con.backEdgeSource is sourceId
            @jsPlumbInstance.detach(con)

        # we're always going to be wanting to do this
        delete @connections[sourceId][targetId]
        return con

    addForwardArrow: (con) ->
        con.addOverlay([
            "PlainArrow"
            {id: "forwardArrow", location:-4, width:12, length:8}
        ])

    removeForwardArrow: (con) ->
        con.removeOverlay("forwardArrow")

    addBackArrow: (con) ->
        con.addOverlay([
            "PlainArrow"
            { id: "backArrow", location: 4, direction: -1, width: 12, length: 8 }
        ])

    removeBackArrow: (con) ->
        con.removeOverlay("backArrow")

    setStyle: (con, edge, color, width) ->
        if color.constructor.name is 'String'
            con.setPaintStyle(@customStyle(color, width))

        else if color.constructor.name is 'Function'
            res = color(edge)
            if res.constructor.name is 'String'
                con.setPaintStyle(@customStyle(res))
            else if res.constructor.name is 'Array'
                con.setPaintStyle(@customStyle(res[0],res[1]))

    updateConnections: (graph, frame) ->
        @eachConnection (sourceId, targetId, con) =>
            # clear coloring
            @resetConnectionStyle(con)
            # update label in display mode. in edit mode the host widget will
            # want to be in charge of labeling.
            @setLabel(con, graph) if @mode is 'display'

        # connection coloring
        return unless @colorEdges?
        for style in @colorEdges
            # the first elem of style is a string from one vertex var to another "u->v"
            if typeof style[0] is 'string'
                [source, target] = style[0].split(/->/).map((v)->frame[v])
                continue unless source? and target?
                con = @connections[source.id]?[target.id]
                edge = graph.edge(source.id, target.id)
                continue unless con? and edge?
                @setStyle(con, edge, style[1], style[2])

            # the first elem of style is a function taking an edge and returning a bool
            else if typeof style[0] is 'function'
                for edge in graph.getEdges()
                    # this gets around some funkiness having to do with references
                    edgeHack =
                        source: graph.vertex(edge.source)
                        target: graph.vertex(edge.target)
                    for attr, val of edge when not attr in ["source", "target"]
                        edgeHack[attr] = val
                    if style[0](edge) or style[0](edgeHack)
                        con = @connections[edge.source.id]?[edge.target.id]
                        @setStyle(con, edge, style[1], style[2])

    resetConnectionStyle: (con) ->
        con.setPaintStyle(@normalPaintStyle)

    setLabel: (con, graph) ->
        return unless @edgeLabel[@mode]?
        con.removeOverlay("edgeLabel")
        con.removeOverlay("edgeLabel")

        if @directed
            loc = 0.70

        if @directed and graph.edge(con.targetId, con.sourceId)
            backEdge = graph.edge(con.targetId, con.sourceId)
            backLoc = 0.30

        edge = graph.edge(con.sourceId, con.targetId)

        if @edgeLabel[@mode].constructor.name is 'Function'
            val = @edgeLabel[@mode](edge)
            backVal = @edgeLabel[@mode](backEdge) if backEdge?

        else if @edgeLabel[@mode].constructor.name is 'String'
            attr = @edgeLabel[@mode]
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

    customStyle: (color, width) ->
        lineWidth   : width ? GraphDisplay.lineWidth
        strokeStyle : color

@Vamonos.export { Widget: { GraphDisplay } }
