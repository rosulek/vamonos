class Graph extends Vamonos.Widget.GraphDisplay

    @description: "The Graph widget provides graph input functionality. It " +
        "uses GraphDisplay for functionality that is not related to input."

    @dependencies = [ "Vamonos.Widget.GraphDisplay" ]

    @spec =
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        defaultGraph:
            type: "Graph"
            defaultValue: undefined
            description: "the initial graph, as a Vamonos.DataStructure.Graph"
        inputVars:
            type: "Object"
            defaultValue: {}
            description:
                "a mapping of variable names to vertex ids of the form
                `{ var1: 'node1' }` for displaying variables that contain
                vertices."
        editable:
            type: "Boolean"
            defaultValue: true
            description: "whether the graph allows user input"
        showChanges:
            type: ["String", "Array"]
            description: "type of frame shifts to highlight changes at, " +
                        "can be multiple types with an array of strings"
            defaultValue: "next"
        defaultEdgeAttrs:
            type: "Object"
            defaultValue: undefined
            description: "A mapping of attribute names to default values for " +
                "new edges created in edit mode."

    constructor: (@_args) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : @_args
            ignoreExtraArgs: true

        @showChanges = Vamonos.arrayify(@showChanges)

        delete @_args[a] for a in [
            "defaultEdgeAttrs"
            "showChanges"
            "varName"
            "defaultGraph"
            "inputVars"
            "editable"
        ]

        if @editable
            @theGraph = @defaultGraph ? new Vamonos.DataStructure.Graph()
            @inputVars[k] = @theGraph.vertex(v) for k,v of @inputVars
        else
            @_args.minX      ?= 0
            @_args.minY      ?= 0
            @_args.resizable ?= false

        @edgeLabel = @_args.edgeLabel?.edit ? @_args.edgeLabel
        super(@_args)

    event: (event, options...) -> switch event
        when "setup"
            [@viz, done] = options
            @registerVariables()
            @updateVariables()
            super("setup", @viz, done) # displayWidget calls done()

        when "render"
            [frame, type] = options
            if type in @showChanges
                @highlightChanges = true
            else
                @highlightChanges = false
            if frame[@varName]?
                @draw(frame[@varName], frame)
            else
                @hideGraph()

        when "displayStart"
            @mode = "display"

        when "displayStop"
            unless @editable
                @clearDisplay()

        when "editStart"
            if @editable
                @mode = "edit"
                @startEditing()

        when "editStop"
            if @editable
                @stopEditing()

        when "checkErrors"
            if @editable
                @verifyInputVarsSet()

        when "externalInput"
            [inp] = options
            if inp[@varName]?.type is "Graph"
                newg = new Vamonos.DataStructure.Graph()
                newg.reconstruct(inp[@varName])
                @theGraph = newg
            for varName, oldVal of @inputVars
                if inp[varName]?.type is "Vertex"
                    @inputVars[varName] = @theGraph.vertex( inp[varName] )

    # ----------------- EDITING MODE ------------------------ #


    startEditing: ->
        @draw(@theGraph, @inputVars)
        if @editable
            console.log "startEditing"
            @setEditBindings()

    stopEditing: ->
        if @editable
            @deselect()
            @unsetEditBindings()
            @updateVariables()

    registerVariables: ->
        @viz.registerVariable(@varName)
        @viz.registerVariable(key) for key of @inputVars

    updateVariables: ->
        graph = Vamonos.clone(@theGraph)
        @viz.setVariable(@varName, graph)
        for k, v of @inputVars
            if v?
                @viz.setVariable(k, graph.vertex(v.id), true)
                @viz.allowExport(k)
        @viz.allowExport(@varName)

    verifyInputVarsSet: () ->
        s = ("#{ @varName } says: please set #{k}!" for k, v of @inputVars when not v?).join('\n')
        return s if s.length

    # forceLayout: (whenDoneFunc) =>
    #     console.log "forceLayout"
    #     width = @svg.node().offsetWidth
    #     height = @svg.node().offsetHeight
    #     trans = (d) -> "translate(" + [ d.x, d.y ] + ")"
    #     force = d3.layout.force()
    #         .charge(-300)
    #         .linkDistance(100)
    #         .size([width, height])
    #         .nodes(@theGraph.getVertices())
    #         .links(@theGraph.getEdges())
    #         .friction(0.1)
    #         .start()
    #     tick = () =>
    #         @inner.selectAll("g.vertex")
    #             .attr('transform', trans)
    #             .each((d) =>
    #                 @currentGraph.vertex(d.id).x = d.x
    #                 @currentGraph.vertex(d.id).y = d.y)
    #         @inner.selectAll("g.edge")
    #             .call(@genPath)
    #         @updateEdgeLabels()
    #         @fitGraph()
    #     timer = true
    #     checkAndRetry = () =>
    #         if force.alpha() == 0
    #             timer = null
    #             force.stop()
    #             whenDoneFunc() if whenDoneFunc?
    #         else
    #             timer = setTimeout(checkAndRetry, 100)
    #     for i in [0..200]
    #         tick()
    #     whenDoneFunc()
    #     # force.on("tick", tick)
    #     # checkAndRetry()

    addVertex: (vertex) ->
        newv = @theGraph.addVertex(vertex)
        @draw(@theGraph, @inputVars)
        @setEditBindings()
        @selectVertexById(newv.id)

    removeVertex: (vid) ->
        @deselect()
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined
        @draw(@theGraph, @inputVars)


    addEdge: (sourceId, targetId) ->
        attrs = {}
        if @defaultEdgeAttrs?
            # set edgeLabel default values
            attrs[k] = v for k,v of @defaultEdgeAttrs
        @theGraph.addEdge(sourceId, targetId, attrs)
        @draw(@theGraph, @inputVars)
        @setEditBindings()

    removeEdge: (sourceId, targetId) ->
        @deselect() if 'edge' is @selected()
        @theGraph.removeEdge(sourceId, targetId)
        @draw(@theGraph, @inputVars)

    createButtons: () ->
        @newVertexButton = $("<button>new vertex</button>")
            .on("click", () => @addVertex())
            .insertAfter("#g-var")

    setEditBindings: ->
        console.log "setEditBindings"

        @inner.selectAll("g.vertex")
            .on "click.vamonos-graph", (d) =>
                console.log "vertex selection click"
                @selectVertexById(d3.event.target.__data__.id)
                @_vertexClick = true

        @$outer.off("click.vamonos-graph") # dont register multiple identical handlers, jquery
        @$outer.on "click.vamonos-graph", (e) =>
            console.log e.target
            if @_vertexClick
                console.log "svg click ignored"
                delete @_vertexClick
            else if @selected()
                console.log "svg click accepted"
                @deselect()
            else # create new vertex
                x = e.offsetX - @containerMargin
                y = e.offsetY - @containerMargin
                @addVertex({x:x, y:y})

            # if not @selected()
            #     if $target.is("div.vertex-contents")
            #         @selectNode($target.parent())
            #     if $target.is(@displayWidget.$inner)
            #         x = e.offsetX ? e.pageX - @displayWidget.$outer.offset().left
            #         y = e.offsetY ? e.pageY - @displayWidget.$outer.offset().top
            #         width  = @displayWidget._vertexWidth  ? 24
            #         height = @displayWidget._vertexHeight ? 24
            #         dwH = @displayWidget.$inner.height()
            #         dwW = @displayWidget.$inner.width()
            #         if (y - (height / 2) > 0) and (y + (height / 2) < dwH) and
            #            (x - (width / 2) > 0)  and (x + (width / 2) < dwW)
            #             @addVertex({x: x - (width / 2), y: y - (height / 2)})
            # else
            #     if $target.is("div.vertex-contents") and 'vertex' is @selected()
            #         sourceId = @$selectedNode.attr("id")
            #         targetId = $target.parent().attr("id")
            #         if sourceId is targetId
            #             @deselect()
            #         else if @theGraph.edge(sourceId, targetId)
            #             @selectNode(@displayWidget.nodes[targetId])
            #         else
            #             @addEdge(sourceId, targetId)
            #             @removePotentialEdge()
            #     else if $target.is("div.vertex-contents") and 'edge' is @selected()
            #         @selectNode($target.parent())
            #     else if $target.is(@displayWidget.$inner)
            #         @deselect()
            # true

    unsetEditBindings: ->
        @$outer.off("click.vamonos-graph")
        @inner.selectAll("g.vertex").on("click.vamonos-graph", null)

    removeButtons: ->
        @newVertexButton?.remove()

    setConnectionEditBindings: ->

    connectionBindings: (con) ->
        con.bind "click", (c) =>
            @selectConnection(c)
        con.bind "mouseenter", (c) =>
            return if c.id is @$selectedConnection?.id
            c.setPaintStyle(@displayWidget.hoverPaintStyle)
        con.bind "mouseexit", (c) =>
            return if c.id is @$selectedConnection?.id
            @displayWidget.resetConnectionStyle(c)
        if @edgeLabel?
            con.removeOverlay("editableEdgeLabel")
            con.removeOverlay("editableEdgeLabel-back")
            con.removeOverlay("edgeLabel")

            if @theGraph.directed
                loc = 0.70
            else
                loc = 0.5

            if @theGraph.directed and @theGraph.edge(con.targetId, con.sourceId)
                backLoc = 0.30

            con.addOverlay([
                "Custom"
                create: =>
                    edge = @theGraph.edge(con.sourceId, con.targetId)
                    @createEditableEdgeLabel(edge, con)
                id: "editableEdgeLabel"
                cssClass: "graph-label"
                location: loc
            ])

            con.addOverlay([
                "Custom"
                create: =>
                    backEdge = @theGraph.edge(con.targetId, con.sourceId)
                    @createEditableEdgeLabel(backEdge, con)
                id: "editableEdgeLabel-back"
                cssClass: "graph-label"
                location: backLoc
            ]) if backLoc?

    unsetConnectionEditBindings: ->
        # @displayWidget.eachConnection (sourceId, targetId, con) =>
        #     con.unbind("click")
        #     con.unbind("mouseenter")
        #     con.unbind("mouseexit")
        #     con.removeOverlay("editableEdgeLabel")
        #     con.removeOverlay("editableEdgeLabel-back")

    selected: ->
        return 'vertex' if @selectedVertex?
        return 'edge'   if @selectedEdge?
        return false

    selectVertexById: (vid) ->
        console.log "selectVertexById", vid
        @selectVertexBySelector(@inner.select("#" + vid))

    selectVertexBySelector: (sel) ->
        @deselectVertex() if 'vertex' is @selected()
        sel.classed("selected", true)
        @selectedVertex = sel

    selectNode: (node) ->
        @stopEditingLabel()
        @deselectNode()       if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()
        @$selectedNode = node
        @$selectedNode.addClass("selected")
        @$selectedNode.removeClass('hovering')
        @$others = @$selectedNode
            .siblings("div.vertex")
            .children("div.vertex-contents")
        @$others.on "mouseenter.vamonos-graph", (e) =>
            @potentialEdgeTo($(e.target).parent())
        @$others.on "mouseleave.vamonos-graph", @removePotentialEdge
        @openDrawer()

    selectConnection: (con) ->
        @deselectNode()       if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()
        @$selectedConnection = con
        @$selectedConnection.setPaintStyle(@displayWidget.selectedPaintStyle)
        @openDrawer()

    deselect: ->
        @deselectVertex()
        @deselectEdge()
        # @closeDrawer()

    deselectVertex: ->
        return unless @selectedVertex?
        @selectedVertex.classed("selected", false)
        delete @selectedVertex
        # @$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
        # @$selectedNode.removeClass("selected")
        # @$selectedNode = undefined

    deselectEdge: ->
        return unless @$selectedConnection?
        @displayWidget.resetConnectionStyle(@$selectedConnection)
        @$selectedConnection = undefined
        @removePotentialEdge()

    potentialEdgeTo: (node) =>
        sourceId = @$selectedNode.attr("id")
        targetId = node.attr("id")
        return if @displayWidget.connections[sourceId]?[targetId]?

        potentialEdge = @displayWidget.addConnection(sourceId, targetId)
        potentialEdge.setPaintStyle(@displayWidget.potentialEdgePaintStyle)
        @potentialEdge = { sourceId, targetId }

    removePotentialEdge: =>
        return unless @potentialEdge?
        { sourceId, targetId } = @potentialEdge
        edge = @theGraph.edge(sourceId, targetId)
        if edge
            con = @displayWidget.connections[sourceId][targetId]
        else
            con = @displayWidget.removeConnection(sourceId, targetId)
        @displayWidget.resetConnectionStyle(con) if con?

    openDrawer: ->
        type = @selected()
        if type is 'vertex'
            vtx     = @theGraph.vertex(@$selectedNode.attr("id"))
            label   = "vertex&nbsp;&nbsp;#{vtx.name}&nbsp;&nbsp;"
            buttons = []
            for v of @inputVars
                # we have to close over v in this loop. otherwise multiple variables will be all set to the
                # final variable in the click handler.
                do (v, vtx, buttons, inputVars = @inputVars, displayWidget = @displayWidget, theGraph = @theGraph) ->
                    vName = Vamonos.resolveSubscript(v)
                    $b = $("<button>", { text: "#{vName}", title: "Set #{vName}=#{vtx.name}" })
                    $b.on "click.vamonos-graph", (e) =>
                        inputVars[v] = vtx
                        displayWidget.draw(theGraph, inputVars)
                    buttons.push($b)

            buttons.push($("<button>", {text: "del", title: "Delete #{vtx.name}"})
                    .on "click.vamonos-graph", (e) =>
                        @removeVertex(vtx.id))
        else if type is 'edge'
            sourceId = @$selectedConnection.sourceId
            targetId = @$selectedConnection.targetId
            edge     = @theGraph.edge(sourceId, targetId)
            if @theGraph.directed and not @theGraph.edge(targetId,sourceId)
                arr = "&rarr;"
            else
                arr = "-"
            nametag  = edge.source.name + "&nbsp;" + arr + "&nbsp;" + edge.target.name
            label = "edge&nbsp;&nbsp;#{nametag}&nbsp;&nbsp;"
            buttons = [
                $("<button>", {text: "del", title: "Delete #{edge.source.name}->#{edge.target.name}"})
                    .on "click.vamonos-graph", (e) =>
                        if @theGraph.directed and @theGraph.edge(targetId, sourceId)
                            @removeEdge(edge.target.id, edge.source.id)
                        @removeEdge(edge.source.id, edge.target.id)
            ]
        else
            return
        @displayWidget.openDrawer({buttons, label})

    closeDrawer: ->
        @displayWidget.closeDrawer()

    createEditableEdgeLabel: (edge, con) =>
        return unless @edgeLabel.constructor.name is 'String'
        val    = Vamonos.rawToTxt(edge[@edgeLabel] ? "")
        $label = $("<div>#{val}</div>")
            .on "click", =>
                @selectConnection(con)
                @editAttribute($label, edge)

    editAttribute: ($label, edge) =>
        valFunc = () =>
            edge[@edgeLabel] ? ""
        returnFunc = (newVal) =>
            val = Vamonos.txtToRaw(newVal)
            edge[@edgeLabel] = val if val?
            Vamonos.rawToTxt(val)
        Vamonos.editableValue($label, valFunc, returnFunc)

    stopEditingLabel: =>
        @displayWidget.$inner
            .find("input.inline-input")
            .trigger("something-was-selected")

@Vamonos.export { Widget: { Graph } }
