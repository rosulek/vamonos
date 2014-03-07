class Graph

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
        tooltips:
            type: "Boolean"
            defaultValue: true
            description: "whether to display tooltips"
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
            "tooltips"
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
        @displayWidget = new Vamonos.Widget.GraphDisplay(@_args)

    event: (event, options...) -> switch event
        when "setup"
            [@viz, done] = options
            @registerVariables()
            @updateVariables()
            @displayWidget.event("setup", @viz, done) # displayWidget calls done()

        when "render"
            [frame, type] = options
            if type in @showChanges
                @displayWidget.highlightChanges = true
            else
                @displayWidget.highlightChanges = false

            if frame[@varName]?
                @displayWidget.fitGraph(frame[@varName])
                @displayWidget.draw(frame[@varName], frame)
            else
                @displayWidget.hideGraph()
                @displayWidget.fitGraph()

        when "displayStart"
            @displayWidget.mode = "display"
            @setDisplayToolTips() if @tooltips

        when "displayStop"
            unless @editable
                @displayWidget.clearDisplay()
                @displayWidget.fitGraph()

        when "editStart"
            if @editable
                @displayWidget.mode = "edit"
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

    setEditToolTips: ->
        @displayWidget.$outer.prop("title", "Click on whitespace to add vertices, edges to modify them.")
        @displayWidget.$outer.children(".vertex").prop("title", "Click a vertex to modify vertex attributes and edges.")
        # @displayWidget.svg.selectAll("line").append("svg:title").text("Click an edge attribute to modify it.")

    setNodeSelectionToolTips: ->
        @displayWidget.$outer.prop("title", "Click on white space to deselect.")
        @displayWidget.$outer.children(".vertex").prop("title", "Click a vertex to add an edge or change selected vertex.")

    setConnectionSelectionToolTips: ->
        @displayWidget.$outer.prop("title", "Click on white space to deselect. Click on another edge to select it.")
        @displayWidget.$outer.children(".vertex").prop("title", "Click a vertex to select it.")

    setDisplayToolTips: ->
        @displayWidget.$outer.prop("title", "Drag a vertex to move it.")
        @displayWidget.$outer.children(".vertex").removeAttr("title")
        @displayWidget.$outer.children(".graph-label").removeAttr("title")

    startEditing: ->
        # fitGraph needs to come before draw so as to prevent strange bug wherein the
        # first potential edge causing a new edge would make all the endpoints on the
        # source vertex flip 180 degrees. weird.
        @displayWidget.fitGraph(@theGraph)
        @displayWidget.draw(@theGraph, @inputVars)
        if @editable
            @setContainerEditBindings()
            @setConnectionEditBindings()
            @setEditToolTips() if @tooltips

    stopEditing: ->
        if @editable
            @deselect()
            @unsetConnectionEditBindings()
            @unsetContainerEditBindings()
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

    addVertex: (vertex) ->
        newv = @theGraph.addVertex(vertex)
        @displayWidget.draw(@theGraph, @inputVars)
        node = @displayWidget.nodes[newv.id]
        @selectNode(node)
        return node

    removeVertex: (vid) ->
        @deselect()
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined
        @displayWidget.draw(@theGraph, @inputVars)

    addEdge: (sourceId, targetId) ->
        attrs = {}
        if @defaultEdgeAttrs?
            # set edgeLabel default values
            attrs[k] = v for k,v of @defaultEdgeAttrs
        @theGraph.addEdge(sourceId, targetId, attrs)
        @displayWidget.draw(@theGraph, @inputVars)
        @setConnectionEditBindings()

    removeEdge: (sourceId, targetId) ->
        @deselect() if 'edge' is @selected()
        @theGraph.removeEdge(sourceId, targetId)
        @displayWidget.draw(@theGraph, @inputVars)

    setContainerEditBindings: ->
        @displayWidget.$outer.on "click.vamonos-graph", (e) =>
            $target = $(e.target)
            if not @selected()
                if $target.is("div.vertex-contents")
                    @selectNode($target.parent())
                if $target.is(@displayWidget.$inner)
                    x = e.offsetX ? e.pageX - @displayWidget.$outer.offset().left
                    y = e.offsetY ? e.pageY - @displayWidget.$outer.offset().top
                    width  = @displayWidget._vertexWidth  ? 24
                    height = @displayWidget._vertexHeight ? 24
                    dwH = @displayWidget.$inner.height()
                    dwW = @displayWidget.$inner.width()
                    if (y - (height / 2) > 0) and (y + (height / 2) < dwH) and
                       (x - (width / 2) > 0)  and (x + (width / 2) < dwW)
                        @addVertex({x: x - (width / 2), y: y - (height / 2)})
            else
                if $target.is("div.vertex-contents") and 'vertex' is @selected()
                    sourceId = @$selectedNode.attr("id")
                    targetId = $target.parent().attr("id")
                    if sourceId is targetId
                        @deselect()
                    else if @theGraph.edge(sourceId, targetId)
                        @selectNode(@displayWidget.nodes[targetId])
                    else
                        @addEdge(sourceId, targetId)
                        @removePotentialEdge()
                else if $target.is("div.vertex-contents") and 'edge' is @selected()
                    @selectNode($target.parent())
                else if $target.is(@displayWidget.$inner)
                    @deselect()
            true

    unsetContainerEditBindings: ->
        @displayWidget.$outer.off("click.vamonos-graph")

    setConnectionEditBindings: ->
        @displayWidget.eachConnection (sourceId, targetId, con) =>
            @connectionBindings(con)

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
        @displayWidget.eachConnection (sourceId, targetId, con) =>
            con.unbind("click")
            con.unbind("mouseenter")
            con.unbind("mouseexit")
            con.removeOverlay("editableEdgeLabel")
            con.removeOverlay("editableEdgeLabel-back")

    selected: ->
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
        @$others = @$selectedNode
            .siblings("div.vertex")
            .children("div.vertex-contents")
        @$others.on "mouseenter.vamonos-graph", (e) =>
            @potentialEdgeTo($(e.target).parent())
        @$others.on "mouseleave.vamonos-graph", @removePotentialEdge
        @openDrawer()
        @setNodeSelectionToolTips() if @tooltips

    selectConnection: (con) ->
        @deselectNode()       if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()
        @$selectedConnection = con
        @$selectedConnection.setPaintStyle(@displayWidget.selectedPaintStyle)
        @openDrawer()
        @setConnectionSelectionToolTips() if @tooltips

    deselect: ->
        @deselectNode()
        @deselectConnection()
        @closeDrawer()
        @setEditToolTips() if @tooltips

    deselectNode: ->
        return unless @$selectedNode?
        @$others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
        @$selectedNode.removeClass("selected")
        @$selectedNode = undefined

    deselectConnection: ->
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
