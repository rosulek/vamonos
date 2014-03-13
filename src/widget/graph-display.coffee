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

        edgeCssAttributes:
            type: "Object"
            defaultValue: undefined
            description: "provides a way to change CSS classes of edges based " +
                "upon the values of variables or the edges themselves. You provide " +
                "a mapping of classnames to functions or strings. The function " +
                "simply needs to take an edge and return a boolean (whether to " +
                "apply the class). The string is a pairing of variable names in " +
                "the form `'u->v'`."
            example: """
                edgeCssAttributes: {
                    green: function(edge){
                        return (edge.target.pred === edge.source.name)
                            || (edge.source.pred === edge.target.name)
                    },
                    red: "u->v",
                }
                """

        containerMargin:
            type: "Number"
            defaultValue: 26
            description: "how close vertices can get to the container edge"
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
            description: "whether vertices can be moved"
        highlightChanges:
            type: "Boolean"
            defaultValue: true
            description: "whether vertices will get the css class 'changed' when they are modified"
        vertexWidth:
            type: "Number"
            defaultValue: 40
            description: "the width of vertices in the graph"
        vertexHeight:
            type: "Number"
            defaultValue: 30
            description: "the height of vertices in the graph"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @$outer = Vamonos.jqueryify(@container)

        if @edgeLabel?.constructor.name isnt 'Object'
            @edgeLabel = { edit: @edgeLabel, display: @edgeLabel }

        @$outer.disableSelection()

        if @resizable
            @$outer.resizable
                handles: "se"
                minWidth: @minX
                minHeight: @minY

        @svg = d3.selectAll("#" + @$outer.attr("id")).append("svg")
        @inner = @svg.append("g")
              .attr("transform",
                    "translate(" +
                    [ @containerMargin ,
                      @containerMargin ] +
                    ")")

    # ------------ PUBLIC INTERACTION METHODS ------------- #

    # A widget that uses GraphDisplay will need to pass along the setup event
    # in order to register vars from vertexLabels and colorEdges
    event: (event, options...) -> switch event
        when "setup"
            [@viz, done] = options
            for e in @colorEdges when typeof e[0] is 'string'
                @viz.registerVariable(v) for v in e[0].split(/<?->?/)
            for label, values of @vertexLabels
                for v in values when typeof v is 'string'
                    @viz.registerVariable(v)
                done() if done?

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

        @updateEdges(graph, frame)
        @updateVertices(graph, frame)
        if not @initialized
            @startDragging(graph)
            @initialized = true
        if @mode is "display"
            @previousGraph = graph
        else
            delete @previousGraph


    startDragging: (graph) ->
        console.log "startDragging"
        ths = @
        dragmove = (d) ->
            trans = (d) -> "translate(" + [ d.x, d.y ] + ")"
            d.x = d3.event.x
            d.y = d3.event.y
            d3.select(@).attr('transform', trans)
            ths.updateEdges(graph)
        drag = d3.behavior.drag()
            .on("drag", dragmove)
        @inner.selectAll("g.vertex").call(drag)

    updateEdges: (graph, frame) ->
        console.log "updateEdges"
        # update
        edges = @inner.selectAll("g.edge")
            .data(graph.getEdges(), graph.edgeId)
        edges.call(@updateEdgeLabels)
            .call(@updateEdgeClasses, frame)
            .selectAll("line.edge")
            .call(@setLinePos)
        # enter
        enter = edges.enter()
            .append("g")
            .attr("class", "edge")
        enter.append("line")
            .attr("class", "edge")
            .call(@setLinePos)
        enter.call(@createEdgeLabels)
            .call(@updateEdgeClasses, frame)
        # exit
        edges.exit()
            .remove()

    setLinePos: (line) ->
        line.attr("x1", (d) -> d.source.x )
            .attr("y1", (d) -> d.source.y )
            .attr("x2", (d) -> d.target.x )
            .attr("y2", (d) -> d.target.y )

    updateVertices: (graph, frame) ->
        console.log "createVertices"
        id = (vtx) -> return vtx.id
        # update
        vertices = @inner.selectAll("g.vertex")
            .data(graph.getVertices(), id)
            .call(@updateVertexLabels, graph, frame)
            .call(@updateVertexClasses)
        # enter
        trans = (d) -> "translate(" + [ d.x, d.y ] + ")"
        enter = vertices.enter()
            .append("g")
            .attr("transform", trans)
            .attr("class", "vertex")
        enter.append("ellipse")
            .attr("class", "vertex")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("rx", @vertexWidth  / 2)
            .attr("ry", @vertexHeight / 2)
        enter.call(@createVertexLabels, graph, frame)
            .call(@updateVertexClasses)
        # exit
        vertices.exit()
            .remove()

    fitGraph: (graph, animate = false) ->
        console.log "fitGraph"
        if graph?
            xVals = []
            yVals = []
            for vertex in graph.getVertices()
                xVals.push(vertex.x + (@vertexWidth  / 2) + @containerMargin * 2)
                yVals.push(vertex.y + (@vertexHeight / 2) + @containerMargin * 2)
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

    hideGraph: () ->
        @$outer.hide()
        @graphHidden = true

    showGraph: () ->
        @$outer.show()
        @graphHidden = false

    # ---------------------------------------------------------- #

    eachConnection: (f) ->
        return

    # ----------- display mode node functions ---------- #

    createVertexLabels: (vertexGroup, graph, frame) =>
        console.log "createVertexLabels"
        x = @vertexWidth  / 2
        y = @vertexHeight / 2
        xOffset = x / 2
        yOffset = y / 2
        setLabel = (klass, xPos, yPos) =>
            vertexGroup.append("text")
                .attr("class", klass)
                .attr("x", xPos)
                .attr("y", yPos)
        setLabel("vertex-contents", 0, yOffset / 2)
        setLabel("vertex-ne-label", x, - y)
        setLabel("vertex-nw-label", - x - xOffset, - y)
        setLabel("vertex-se-label", x, y + yOffset)
        setLabel("vertex-sw-label", - x - xOffset, y + yOffset)
        vertexGroup.call(@updateVertexLabels, graph, frame)
        return vertexGroup

    updateVertexLabels: (sel, graph, frame) =>
        console.log "updateVertexLabels #{ @mode }-mode"
        for type, style of @vertexLabels
            target = sel.selectAll("text." + switch type
                when "inner" then "vertex-contents"
                when "ne"    then "vertex-ne-label"
                when "nw"    then "vertex-nw-label"
                when "se"    then "vertex-se-label"
                when "sw"    then "vertex-sw-label"
                else
                    throw Error "GraphDisplay '#{ @varName }': no vertex label \"#{ type }\""
            )
            target.data (d) -> [d]
            if style.constructor.name is "Function"
                target.text((d) => Vamonos.rawToTxt(style(d)))
            else if style.constructor.name is "Array"
                target.text (d) =>
                    res = []
                    for v in style when frame[v]?.id is d.id
                        res.push(Vamonos.resolveSubscript(Vamonos.removeNamespace(v)))
                    return res.join(",")
            else if (style.constructor.name is "Object" and
                     style[@mode]?.constructor.name is "Function")
                target.text((d) => Vamonos.rawToTxt(style[@mode](d)))
            else
                target.text("")
        return sel

    createEdgeLabels: (edgeGroups) =>
        return unless @edgeLabel[@mode]?
        console.log "createEdgeLabels"
        edgeGroups.selectAll("foreignObject")
            .data((d)->[d])
            .enter()
            .append("foreignObject")
            .append("xhtml:body")
            .append("div")
            .attr("class", "graph-label")
        edgeGroups.call(@updateEdgeLabels)
        return edgeGroups

    updateEdgeLabels: (edgeGroups) =>
        return unless @edgeLabel[@mode]?
        console.log "updateEdgeLabels"
        edgeGroups.selectAll("div.graph-label")
            .data((d)->[d])
            .call(@setEdgeLabelPos)
            .html(@edgeLabelVal)
        return edgeGroups

    setEdgeLabelPos: (labelSel) =>
        labelSel.style("left", (d) => Math.floor((d.source.x + d.target.x) / 2) - 4 + @containerMargin )
                .style("top",  (d) => Math.floor((d.source.y + d.target.y) / 2) - 7 + @containerMargin )

    edgeLabelVal: (edge) =>
        return unless @edgeLabel[@mode]?
        if @edgeLabel[@mode].constructor.name is 'Function'
            val = @edgeLabel[@mode](edge)
        else if @edgeLabel[@mode].constructor.name is 'String'
            attr = @edgeLabel[@mode]
            val = Vamonos.rawToTxt(edge[attr] ? "")
        else
            return

    updateEdgeClasses: (edgeGroups, frame) =>
        return unless @edgeCssAttributes?
        console.log "updateEdgeClasses"
        lines = edgeGroups.selectAll("line.edge")
            .data((d)->[d])
        for klass, test of @edgeCssAttributes
            if test?.constructor.name is 'Function'
                lines.classed(klass, test)
            else if test?.constructor.name is 'String'
                [source, target] = test.split(/->/).map((v)->frame[v]) if frame?
                lines.classed(klass, (e) -> e.source.id == source?.id and
                                            e.target.id == target?.id)
        return edgeGroups

    # this will be cleaner should I find a way to have ellipses and
    # text svg elements inherit classes from their groups. otherwise
    # we need to tell both ellipses and vertex-content text elems what
    # their class is, so they can color coordinate (like black oval
    # with white text).
    updateVertexClasses: (vertexGroups) =>
        console.log "updateVertexClasses"

        vertices = vertexGroups.selectAll("ellipse.vertex")
            .data((d) -> [d])
            .classed("changed", (vertex) =>
                return @highlightChanges and
                       @mode is 'display' and
                       @vertexChanged(vertex)
            )

        labels = vertexGroups.selectAll("text.vertex-contents")
            .data((d) -> [d])

        for attr, val of @vertexCssAttributes
            if val.constructor.name is "Function"
                ths = @
                vertexGroups.each (vertex) ->
                    (ths.appliedNodeClasses ?= {})[vertex.id] ?= {}
                    sel = d3.select(this)
                    newClass = val(vertex)
                    # dont reapply classes
                    return if newClass is ths.appliedNodeClasses[vertex.id][attr]
                    # remove previously applied class for this attr
                    if ths.appliedNodeClasses[vertex.id][attr]?
                        sel.select("ellipse.vertex")
                            .classed(ths.appliedNodeClasses[vertex.id][attr], false)
                        sel.select("text.vertex-contents")
                            .classed(ths.appliedNodeClasses[vertex.id][attr], false)
                    # add new class
                    if newClass?
                        sel.select("ellipse.vertex").classed(newClass, true)
                        sel.select("text.vertex-contents").classed(newClass, true)
                        ths.appliedNodeClasses[vertex.id][attr] = newClass
                    else
                        delete ths.appliedNodeClasses[vertex.id][attr]

            else if val.constructor.name is "Array"
                for kind in val
                    applyClass = (sel) ->
                        sel.classed("#{ attr }-#{ kind }", (vtx) -> vtx[attr] == kind )
                    vertices.call(applyClass)
                    labels.call(applyClass)

            else
                vertices.classed(attr, (vertex) -> vertex[attr] == val)

    vertexChanged: (newv) ->
        return false unless newv?
        return false unless @previousGraph?
        return false unless oldv = @previousGraph.vertex(newv.id)
        for k,v of newv when k[0] isnt "_"
            if v?.type is "Vertex"
                return true if oldv[k]?.id isnt v.id
            else
                return true if oldv[k] isnt v
        for k,v of oldv when k[0] isnt "_"
            if v?.type is "Vertex"
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
                deleteEndpointsOnDetach: false # maybe speedup?
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
            # we'll return here, so as to simplify the directed mess to follow
            return con

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
            {id: "forwardArrow", location:-1.000001, width:12, length:8}
        ])

    removeForwardArrow: (con) ->
        con.removeOverlay("forwardArrow")

    addBackArrow: (con) ->
        con.addOverlay([
            "PlainArrow"
            { id: "backArrow", location: 1.000001, direction: -1, width: 12, length: 8 }
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
                    if style[0](edge)
                        con = @connections[edge.source.id]?[edge.target.id]
                        @setStyle(con, edge, style[1], style[2])

    resetConnectionStyle: (con) ->
        return unless con?.connector?
        con.setPaintStyle(@normalPaintStyle)

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
