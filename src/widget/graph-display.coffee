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
            defaultValue: {}
            description: "provides a way to change CSS classes of edges based " +
                "upon the values of variables or the edges themselves. You provide " +
                "a mapping of classnames to functions or strings. The function " +
                "simply needs to take an edge and return a boolean (whether to " +
                "apply the class). The string is a pairing of variable names in " +
                "the form `'u->v'` or `'u<->v'` for undirected graphs."
            example: """
                edgeCssAttributes: {
                    green: function(edge){
                        return (edge.target.pred === edge.source.name)
                            || (edge.source.pred === edge.target.name)
                    },
                    red: "u->v",
                }
                """

        styleEdges:
            type: "Array"
            defaultValue: undefined
            description: "Provides a way to add styles to path objects. " +
                "Functions must return an array whose first element is an " +
                "attribute name, and second element is the value."
            example: """
                styleEdges: [
                    function(e){
                        if (e.f !== undefined && (e.f > 0)) {
                            var width = 2 + e.f;
                            return ["stroke-width", width];
                        }
                    },
                ],
                """

        containerMargin:
            type: "Number"
            defaultValue: 30
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
        showVertexChanges:
            type: "Boolean"
            defaultValue: true
            description: "whether to flash vertices that have changed attributes"
        vertexWidth:
            type: "Number"
            defaultValue: 40
            description: "the width of vertices in the graph"
        vertexHeight:
            type: "Number"
            defaultValue: 30
            description: "the height of vertices in the graph"

        arrowWidth:
            type: "Number"
            defaultValue: 6
            description: "the width of arrows in directed graphs"
        arrowLength:
            type: "Number"
            defaultValue: 6
            description: "the length of arrows in directed graphs"

        bezierCurviness:
            type: "Number"
            defaultValue: 15
            description: "the curviness of bezier curves in this graph"

        persistentDragging:
            type: "Boolean"
            defaultValue: true
            description: "whether the positions resulting from dragging " +
                "vertices are persistent across frames in display mode."
        animateEdgeFlips:
            type: "Boolean"
            defaultValue: false
            description: "whether edges flip ostentatiously when they switch source and target"

        background:
            type: "Object"
            defaultValue: undefined
            description: "an image to use as the background of the graph. " +
                "Args come in as an object `{ source: STRING, callback: OPTIONAL-FUNCTION }`. " +
                "If callback is provided, it must be a function taking a d3 selector." +
                "You can specify seperate images for edit and display mode by providing " +
                "an object such as `{ display: { source: STRING, callback: OPTIONAL-FUNCTION } " +
                "edit: { source: STRING, callback: OPTIONAL-FUNCTION }`"

        fadeIn:
            type: "Boolean"
            defaultValue: false
            description: "whether new things fade in, and deleted things fade out"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args
            specObj      : Vamonos.Widget.GraphDisplay.spec # for calling from super
                                                            # when 'this' will be a Graph
                                                            # not GraphDisplay

        @$outer = Vamonos.jqueryify(@container)

        if @edgeLabel?.constructor.name isnt 'Object'
            @edgeLabel = { edit: @edgeLabel, display: @edgeLabel }

        @$outer.disableSelection()

        if @resizable
            @$outer.resizable
                handles: "se"
                resize: (e, ui) =>
                    @svg.attr("height", ui.size.height)
                    @svg.attr("width", ui.size.width)

        @svg = d3.selectAll("#" + @$outer.attr("id")).append("svg")

        @createShadowFilter
            svg: @svg
            id: "shadow-green"
            red: 0.0
            green: 0.9
            blue: 0.0

        @createShadowFilter
            svg: @svg
            id: "shadow-blue"
            red: 0.0
            green: 0.0
            blue: 0.9

        @createShadowFilter
            svg: @svg
            id: "shadow"
            red: 0
            green: 0
            blue: 0
            dx: 5
            dy: 5

        @inner = @initializeInner(@svg)

        @_savex = {}
        @_savey = {}

    initializeInner: () ->
        @svg.append("g")
            .attr("transform", "translate(" +
                [ @containerMargin ,
                  @containerMargin ] + ")")

    setBackground: () ->
        return if @_bgmode is @mode
        if @_existingbg?
            @_existingbg
                .style("opacity", 1)
                .transition()
                .duration(400)
                .style("opacity", 0)
                .remove()

        make_bg = (source, callback) =>
            @_existingbg = @svg.insert("image", "defs")
                .attr("xlink:href", source)
            @_existingbg.style("opacity", 0)
                .transition()
                .duration(400)
                .style("opacity", 1)
            if callback?
                callback(@_existingbg)

        if @background?
            if @background[@mode]?
                return unless @background[@mode].source?
                make_bg(@background[@mode].source, @background[@mode].callback)
            else if @background.source?
                make_bg(@background.source, @background.callback)
            @_bgmode = @mode

    createShadowFilter: ({ svg, id, red, green, blue, dx, dy }) ->
        dx ?= 0
        dy ?= 0
        @defs ?= svg.append("svg:defs")
        filter = @defs.append("svg:filter")
            .attr("id", id)
            .attr("height", 100)
            .attr("width", 100)
            .attr("x", -50)
            .attr("y", -50)
        filter.append("svg:feGaussianBlur")
            .attr("in", "SourceGraphic")
            .attr("stdDeviation", 5)
        filter.append("svg:feOffset")
            .attr("dx", dx)
            .attr("dy", dy)
        filter.append("svg:feColorMatrix")
            .attr("type", "matrix")
            .attr("values", "0 0 0 #{ red   } 0
                             0 0 0 #{ green } 0
                             0 0 0 #{ blue  } 0
                             0 0 0 1          0")
            .attr("result", "colorblur")
        merge = filter.append("feMerge")
        merge.append("feMergeNode").attr("in", "colorblur")
        merge.append("feMergeNode").attr("in", "SourceGraphic")

    event: (event, options...) -> switch event
        when "setup"
            [viz] = options
            for klass, test of @edgeCssAttributes when typeof test is 'string'
                viz.registerVariable(v) for v in test.split(/<?->?/)
            for label, values of @vertexLabels
                for v in values when typeof v is 'string'
                    viz.registerVariable(v)

    draw: (graph, frame = {}) ->
        # if there is a hidden graph, show it
        @showGraph() if @graphHidden
        # if we're in edit mode, @mode will be set already. otherwise,
        # we need to set it to "display". this is so that edge and
        # vertex labels and classes know what to show.
        @mode ?= "display"
        @setBackground()
        return unless graph?
        @directed = graph.directed # convenience
        # remove all the changed vertex highlighting from previous frame
        @inner.selectAll(".changed").classed("changed", null)
        # set global variables so we don't have to pass stuff around
        # annoyingly and buggyily
        @currentGraph = graph
        @currentFrame = frame
        unless @fitAlready
            @fitGraph()
            @fitAlready = true
        # transfer the positions of vertices that have been dragged to
        # the new @currentGraph
        if @persistentDragging
            @currentGraph.eachVertex (v) =>
                if @_savex[v.id]? and @_savey[v.id]?
                    v.x = @_savex[v.id]
                    v.y = @_savey[v.id]
        # updateVertices and updateEdges are the main methods for
        # displaying stuff with d3.
        @updateVertices()
        @updateEdges()
        @startDragging() if @draggable
        @previousGraph = graph # used in vertexChanged

    # sets the size of @$outer based on the positions of vertices in @currentGraph
    fitGraph: (animate = false) ->
        if @currentGraph?
            xVals = []
            yVals = []
            for vertex in @currentGraph.getVertices()
                continue unless not isNaN vertex.x
                continue unless not isNaN vertex.y
                xVals.push(vertex.x + (@vertexWidth  / 2) + @containerMargin * 2)
                yVals.push(vertex.y + (@vertexHeight / 2) + @containerMargin * 2)
            max_x = Math.max(xVals..., @minX)
            max_y = Math.max(yVals..., @minY)
        else
            max_x = @minX ? 0
            max_y = @minY ? 0
        if animate
            @svg.animate({width: max_x, height: max_y}, 500)
        else
            @$outer.width("100%")
            @svg.attr("height", max_y)
            @svg.attr("width", max_x)

    hideGraph: () ->
        @$outer.hide()
        @graphHidden = true

    showGraph: () ->
        @$outer.show()
        @graphHidden = false

    clearDisplay: () ->
        if @persistentDragging
            @_savex = {} # _savex and _savey are for saving the
            @_savey = {} # dragged positions of vertices across frames.
        if @fadeIn
            @inner.style("opacity", 1)
                .transition()
                .duration(700)
                .style("opacity", 0)
                .remove()
        else
            @inner.remove()
        @inner = @initializeInner()
        @currentGraph = undefined
        @previousGraph = undefined
        @fitGraph()
        @fitAlready = undefined

    startDragging: (graph) ->
        trans = (d) -> "translate(" + [ d.x, d.y ] + ")"
        ths = @
        dragstart = (d) ->
            parent = this.parentNode
            ref = parent.querySelector(".graph-label")
            parent.insertBefore(this, ref)
            this.style.filter = "url(#shadow)"
        dragmove = (d) ->
            # using "dragstart" event conflicted with click handling
            # when selecting vertices
            unless dragmove.initialized
               dragstart.call(this, d)
               dragmove.initialized = true
            d.x = d3.event.x
            d.y = d3.event.y
            this.setAttribute("transform", trans(d))
            ths.inner.selectAll("path.edge").call(ths.genPath)
            ths.updateEdgeLabels()
        drag = d3.behavior.drag()
            .on("drag", dragmove)
            .on "dragend", (d) ->
                dragmove.initialized = false
                d3.select(this)
                    .style("filter", null)
                if ths.persistentDragging and ths.mode is 'display'
                    ths._savex[d.id] = d.x
                    ths._savey[d.id] = d.y
        @inner.selectAll("g.vertex").call(drag)

    stopDragging: () ->
        @inner.selectAll("g.vertex").on("mousedown.drag", null)

    updateVertices: () ->
        id = (vtx) -> return vtx.id
        trans = (d) -> "translate(" + [ d.x, d.y ] + ")"
        # update
        vertices = @inner.selectAll("g.vertex")
            .data(@currentGraph.getVertices(), id)
            .attr("transform", trans)
            .call(@updateVertexLabels)
            .call(@updateVertexClasses)
        # enter
        enter = vertices.enter()
            .append("g")
            .attr("transform", trans)
            .attr("class", "vertex")
            .attr("id", (d) -> d.id)
        if @fadeIn
            enter.style("opacity", 0)
                .transition()
                .duration(500)
                .style("opacity", 1)
        enter.append("ellipse")
            .attr("class", "vertex")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("rx", @vertexWidth  / 2)
            .attr("ry", @vertexHeight / 2)
        enter.call(@createVertexLabels)
            .call(@updateVertexClasses)

        ths = @
        maybeAnimateRemoval = (vtx) ->
            sel = d3.select(this)
            if ths.currentGraph.recentlyCollapsed?[vtx.id]?
                colVtx = ths.currentGraph.recentlyCollapsed[vtx.id]
                collapsedSel = d3.select("#" + colVtx.id)
                collapsedSel.style("visibility", "hidden")
                sel.transition()
                    .attr("transform", trans(colVtx))
                    .remove()
                    .each("end", () -> collapsedSel.style("visibility", "visible"))
            else if ths.fadeIn
                sel.style("opacity", 1)
                    .transition()
                    .style("opacity", 0)
                    .remove()
            else
                sel.remove()

        # exit
        vertices.exit()
            .each(maybeAnimateRemoval)

    updateEdges: () ->
        # update #
        edges = @inner.selectAll("path.edge")
            .data(@currentGraph.getEdges(),
                  @currentGraph.edgeId)
        edges.call(@genPath)
            .call(@updateEdgeClasses)
            .call(@updateEdgeStyles)

        # enter #
        # insert edges at the start of the svg, so they dont overlap
        # vertices, which are appended to the end of the svg
        enter = edges.enter()
            .insert("path", ":first-child")
            .attr("class", "edge")
        enter.call(@genPath)
            .call(@updateEdgeClasses)
            .call(@updateEdgeStyles)
        if @fadeIn
            enter.style("opacity", 0)
                .transition()
                .duration(500)
                .style("opacity", 1)
        # exit #

        ths = @
        maybeFlipAndRemove = (edge) ->
            sel = d3.select(this)
            if ths.animateEdgeFlips and ths.highlightChanges
                otherEdge = ths.currentGraph.edge(edge.target, edge.source)
                if otherEdge
                    otherSel = d3.select("#" + ths.currentGraph.edgeId(otherEdge))
                    otherSel.style("visibility", "hidden")
                    x = (edge.source.x + edge.target.x) / 2
                    y = (edge.source.y + edge.target.y) / 2
                    tween = () ->
                        d3.interpolateString("rotate(0, #{x}, #{y})", "rotate(-180, #{x}, #{y})")
                    sel.transition()
                        .attrTween("transform", tween)
                        .remove()
                        .each("end", () -> otherSel.style("visibility", "visible"))
                else
                    sel.remove()
            else
                sel.remove()

        edges.exit()
            .each(maybeFlipAndRemove)
        @updateEdgeLabels()

    # dispatches to genStraightPath or genCurvyPath depending on whether
    # edge `e` has a back-edge in `g`. sets _labelx and _labely on data.
    genPath: (sel) =>
        getPath = (e) =>
            unless [e.source.x, e.source.y,
                    e.target.x, e.target.y].every(isFinite)
                throw "GETPATH: Bad coordinates"
            if not @directed
                path = @pathStraightNoArrow(e)
            else if @antiparallelEdge(e)
                path = @pathBezierWithArrow(e)
            else
                path = @pathStraightWithArrow(e)
            return path
        sel.attr("d", getPath).attr("id", @currentGraph.edgeId)
        return sel

    antiparallelEdge: (e) =>
        return false unless @directed
        return @currentGraph.edge(e.target, e.source)

    # if the graph is not directed, there is no need to draw fancy
    # arrows. Just return a path from center of source vertex to
    # center of target vertex.
    pathStraightNoArrow: (e) =>
        midx = ( e.source.x + e.target.x ) / 2
        midy = ( e.source.y + e.target.y ) / 2
        [dx, dy] = @dvector([e.source.x,e.source.y], [e.target.x,e.target.y])
        [_, [lx,ly]] = @perpendicularPoints([midx,midy], dx, dy, @arrowWidth * 1.5)
        e._labelx = if lx is lx then lx
        e._labely = if ly is ly then ly
        return "M #{ e.source.x } #{ e.source.y } " +
               "L #{ e.target.x } #{ e.target.y } "

    # creates the text for the d attribute of a straight path element
    # representing an edge `e`.
    pathStraightWithArrow: (e) =>
        [x1,y1] = @intersectVertex([e.target.x, e.target.y],
                                   [e.source.x, e.source.y])
        return "M #{ e.source.x } #{ e.source.y }" +
                @pathArrowAt([x1,y1], [e.source.x, e.source.y], e)

    pathBezierWithArrow: (e) =>
        [refx, refy] = @bezierRefPoint(e)
        # get vertex intersection points
        [x1,y1] = @intersectVertex([e.source.x, e.source.y], [refx, refy])
        [x2,y2] = @intersectVertex([e.target.x, e.target.y], [refx, refy])
        return " M #{ e.source.x } #{ e.source.y } L #{ x1 } #{ y1 } " +
               " Q #{ refx } #{ refy } #{ x2 } #{ y2 }" +
               @pathArrowAt([x2, y2], [refx, refy], e)

    bezierRefPoint: (e) ->
        # midpoint of direct line from vertex center to vertex center
        # => (midx, midy)
        midx = (e.source.x + e.target.x) / 2
        midy = (e.source.y + e.target.y) / 2
        [dx, dy] = @dvector([e.source.x, e.source.y],
                            [e.target.x, e.target.y])
        # tangent point => (refx, refy)
        refx = midx - @bezierCurviness * dy
        refy = midy + @bezierCurviness * dx
        return [refx, refy]

    # arrow at (x1,y1) at the end of a line originating at (x2,y2). also sets
    # edge's _labelx and _labely if edge is present.
    pathArrowAt: ([x1,y1], [xstart,ystart], edge) ->
        [dx, dy] = @dvector([xstart,ystart], [x1,y1])
        # get stopping point before end of line
        x2 = x1 - (dx * -@arrowLength)
        y2 = y1 - (dy * -@arrowLength)
        [[x3,y3], [x4,y4]] = @perpendicularPoints([x2,y2], dx, dy, @arrowWidth / 2)
        if edge?
            [_, [x5,y5]] = @perpendicularPoints([x2,y2], dx,dy, @arrowWidth * 2)
            edge._labelx = x5
            edge._labely = y5
        return " L #{ x2 } #{ y2 } L #{ x3 } #{ y3 }" +
               " L #{ x1 } #{ y1 } L #{ x4 } #{ y4 }" +
               " L #{ x2 } #{ y2 } L #{ x1 } #{ y1 }"

    # gets [dx, dy] for the line defined by (x1,y1) and (x2,y2)
    dvector: ([x1,y1], [x2,y2]) =>
        dx = x1 - x2
        dy = y1 - y2
        dist = Math.sqrt(dx * dx + dy * dy)
        dx = dx / dist
        dy = dy / dist
        return [dx, dy]

    # get two points perpendicular to the line defined by (x,y) and dx
    # dy, at `len` distance.
    perpendicularPoints: ([x,y], dx, dy, len) =>
        return [[x + len * dy, y - len * dx],
                [x - len * dy, y + len * dx]]

    # get the point of intersection with the vertex centered at (x1,y1)
    intersectVertex: ([x1,y1], [x0,y0]) =>
        dx = x0 - x1
        dy = y0 - y1
        # abbreviation for squaring and floor
        sq = (x) -> Math.pow(x, 2)
        # do some algebra using the definition of ellipses
        a = @vertexWidth / 2 + 5
        b = @vertexHeight / 2 + 5
        thingy = a * b / Math.sqrt( sq(a) * sq(dy) + sq(b) * sq(dx) )
        return [thingy * dx + x1, thingy * dy + y1 ]

    createVertexLabels: (vertexGroup) =>
        x = @vertexWidth / 2
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
        vertexGroup.call(@updateVertexLabels)
        return vertexGroup

    updateVertexLabels: (sel) =>
        for type, style of @vertexLabels
            target = sel.select("text." + switch type
                when "inner" then "vertex-contents"
                when "ne"    then "vertex-ne-label"
                when "nw"    then "vertex-nw-label"
                when "se"    then "vertex-se-label"
                when "sw"    then "vertex-sw-label"
                else
                    throw Error "GraphDisplay '#{ @varName }': no vertex label \"#{ type }\""
            )
            # target.data((d) -> [d])

            if style.constructor.name is "Function"
                target.text((d) => Vamonos.rawToTxt(style(d)))
            else if style.constructor.name is "Array"
                target.text (d) =>
                    res = []
                    for v in style when @currentFrame[v]?.id is d.id
                        res.push(Vamonos.resolveSubscript(Vamonos.removeNamespace(v)))
                    return res.join(",")
            else if (style.constructor.name is "Object" and
                     style[@mode]?.constructor.name is "Function")
                target.text((d) => Vamonos.rawToTxt(style[@mode](d)))
            else
                target.text("")

            # expand the ellipse's width if the inner contents text is bigger
            if type is "inner"
                vw = @vertexWidth
                target.each (d) ->
                    w = this.getComputedTextLength()
                    if w + 10 > vw
                        v = this?.parentNode?.children?[0]
                        v?.setAttribute("rx", (w / 2) + 10)

        return sel

    createEdgeLabels: () =>
        return unless @edgeLabel[@mode]?
        @inner.selectAll("text.graph-label")
            .data((d)->@currentGraph.getEdges())
            .enter()
            .append("text")
            .attr("class", "graph-label")
        @updateEdgeLabels()
        return edgeGroups

    updateEdgeLabels: () =>
        return unless @edgeLabel[@mode]?
        sel = @inner.selectAll("text.graph-label")
            .data((d)=>@currentGraph.getEdges())
            .text(@edgeLabelVal)
            .attr("x", (d)->d._labelx)
            .attr("y", (d)->d._labely)
        sel.enter()
            .append("text")
            .attr("class", "graph-label")
            .text(@edgeLabelVal)
            .attr("x", (d)->d._labelx)
            .attr("y", (d)->d._labely)
        sel.exit()
            .remove()

    setEdgeLabelPos: (labelSel) =>
        xPos = (e) =>
            if @antiparallelEdge(e)
                [x,y] = @bezierRefPoint(e)
                return x
            else
                return Math.floor((e.source.x + e.target.x) / 2)
        yPos = (e) =>
            if @antiparallelEdge(e)
                [x,y] = @bezierRefPoint(e)
                return y + 4
            else
                return Math.floor((e.source.y + e.target.y) / 2 + 4)
        labelSel.attr("x", xPos)
                .attr("y", yPos)

    edgeLabelVal: (edge) =>
        return unless @edgeLabel[@mode]?
        if @edgeLabel[@mode].constructor.name is 'Function'
            val = @edgeLabel[@mode](edge)
        else if @edgeLabel[@mode].constructor.name is 'String'
            attr = @edgeLabel[@mode]
            val = Vamonos.rawToTxt(edge[attr] ? "")
        else
            return

    updateEdgeClasses: (edges) =>
        return unless @edgeCssAttributes?
        for klass, test of @edgeCssAttributes
            if test?.constructor.name is 'Function'
                edges.classed(klass, test)
            else if test?.constructor.name is 'String'
                if test.match(/<->/) # bidirectional
                    [source, target] = test.split(/<->/).map((v) => @currentFrame[v])
                    edges.classed(klass, (e) ->
                        (e.source.id == source?.id and e.target.id == target?.id) or
                        (e.target.id == source?.id and e.source.id == target?.id))
                else
                    [source, target] = test.split(/->/).map((v) => @currentFrame[v])
                    edges.classed(klass, (e) -> e.source.id == source?.id and
                                                e.target.id == target?.id)
        return edges

    updateEdgeStyles: (edges) =>
        return unless @styleEdges?.length
        for styleFunc in @styleEdges
            continue unless styleFunc.constructor.name is 'Function'
            styles = (@appliedEdgeStyles ?= [])
            edges.each (e) ->
                res = styleFunc(e)
                if res?.length == 2
                    [attr, val] = res
                    Vamonos.insertSet(attr, styles)
                    this.style[attr] = val
                else
                    this.style[attr] = null for attr in styles

    # this will be cleaner should I find a way to have ellipses and
    # text svg elements inherit classes from their groups. otherwise
    # we need to tell both ellipses and vertex-content text elems what
    # their class is, so they can color coordinate (like black oval
    # with white text).
    updateVertexClasses: (vertexGroups) =>
        vertices = vertexGroups.selectAll("ellipse.vertex")
            .data((d) -> [d])
            .classed("changed", (vertex) =>
                return @highlightChanges and
                       @showVertexChanges and
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
            continue if k in ["x", "y"]
            if v?.type is "Vertex"
                return true if oldv[k]?.id isnt v.id
            else
                return true if oldv[k] isnt v
        for k,v of oldv when k[0] isnt "_"
            continue if k in ["x", "y"]
            if v?.type is "Vertex"
                return true if newv[k]?.id isnt v.id
            else
                return true if newv[k] isnt v

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

@Vamonos.export { Widget: { GraphDisplay } }
