class Graph

    @spec =
        container:
            type: "String"
            description: "id of the div within which this widget should draw itself"
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
                "a mapping of variable names to vertex ids of the form: 
                { var1: 'node1' } for displaying variables that contain 
                vertices."
        vertexLabels:
            type: "Object"
            defaultValue: {}
            description:
                "an object containing a mapping of label positions 
                (inner, nw, sw, ne, se) to labels. Labels can display
                simple variable names (corresponding to inputVars).
                This must be provided in the form: label: ['var1', 'var2'].
                It can be more complicated, as a function that takes
                a vertex and returns some html. if we give a label
                an object, we can control what is shown in edit/display
                mode in the form: 
                label : { edit: function{..}, display: function{..} }"
            example: 
                "vertexLabels: {\n" +
                "    inner : {\n" +
                "        edit: function(vtx){return vtx.name}, \n" +
                "        display: function(vtx){return vtx.d} \n" +
                "    },\n" +
                "    sw    : function(vtx){return vtx.name} \n" +
                "    },\n" +
                "    ne    : ['u', 'v'],\n" +
                "    nw    : ['s'],\n" +
                "}"
        edgeLabel: 
            type: "Array"
            defaultValue: []
            description: 
                "an array, containing the name of the edge attribute to display
                and the default value for new edges."
            example:
                "edgeLabel: [ 'w', 1 ]"
        colorEdges:
            type: "Array"
            defaultValue: []
            description:
                "provides a way to set edge coloring based on vertex variables
                or edge properties. takes an array of doubles of the form 
                [ edge-predicate, color ], where color is a hex color and edge-
                predicate is either a string of the form 'vertex1->vertex2' or
                a function that takes an edge and returns a boolean"
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
                "provides a way to change CSS classes of vertices based on 
                 vertex attributes. takes an object of the form { attribute: 
                 value/[list of values]. in the case of a single value, 
                 the vertex will simply get a class with the same name as
                 the attribute. in the case of a list of values, the css
                 class will be of the form 'attribute-value' when its value
                 matches."
            example:
                "vertexCssAttributes: { done: true }\n
                 vertexCssAttributes: { color: ['white', 'gray', 'black'] }"
        containerMargin:
            type: "Number"
            defaultValue: 30
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

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : args
            ignoreExtraArgs: true

        @theGraph      = @defaultGraph ? new Vamonos.DataStructure.Graph()
        @inputVars[k]  = @theGraph.vertex(v) for k,v of @inputVars

        @displayWidget = new Vamonos.Widget.GraphDisplay
            container           : @container
            vertexLabels        : @vertexLabels
            vertexCssAttributes : @vertexCssAttributes
            edgeLabel           : @edgeLabel
            colorEdges          : @colorEdges
            containerMargin     : @containerMargin
            minX                : @minX
            minY                : @minY
            resizable           : @resizable

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @registerVariables()
            @updateVariables()

        when "render"
            [frame, type] = options
            @displayWidget.fitGraph(frame[@varName]) unless @fitAlready
            @fitAlready = true
            @displayWidget.draw(frame[@varName], frame)

        when "displayStop"
            @fitAlready = false

        when "editStart"
            @startEditing()

        when "editStop"
            @stopEditing()

    # ----------------- EDITING MODE ------------------------ #

    startEditing: ->
        @displayWidget.clearDisplay()
        @displayWidget.mode = "edit"
        @displayWidget.fitGraph(@theGraph)
        @displayWidget.draw(@theGraph, @inputVars)
        @setContainerEditBindings()
        @setConnectionEditBindings()

    stopEditing: ->
        @deselect()
        @displayWidget.mode = undefined
        @unsetConnectionEditBindings()
        @unsetContainerEditBindings()
        @updateVariables()
        @displayWidget.clearDisplay()

    registerVariables: ->
        @viz.registerVariable(key, true) for key of @inputVars
        for e in @colorEdges when typeof e[0] is 'string'
            @viz.registerVariable(v) for v in e[0].split(/<?->?/)
        for label, values of @vertexLabels
            for v in values when typeof v is 'string'
                @viz.registerVariable(v)

    updateVariables: ->
        graph = Vamonos.clone(@theGraph)
        @viz.setVariable(@varName, graph)
        for k, v of @inputVars
            # TODO do alerting in a friendlier way - maybe using mikes boxes
            unless v?
                alert "GRAPH WIDGET: please set #{k}!"
                throw "GRAPH WIDGET: need a value for #{k}!"
            @viz.setVariable(k, graph.vertex(v.id), true)

    # adds a vertex to the graph being edited and redraws the graph.
    addVertex: (vertex = {}, autoSelect = true) ->
        newv = @theGraph.addVertex(vertex)
        @displayWidget.draw(@theGraph, @inputVars)
        node = @displayWidget.nodes[newv.id]
        @selectNode(node) if autoSelect
        node

    removeVertex: (vid) ->
        @deselect()
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined
        @displayWidget.draw(@theGraph, @inputVars)

    addEdge: (sourceId, targetId) ->
        attrs = {}
        if @edgeLabel?.length
            attrs[@edgeLabel[0]] = @edgeLabel[1]
        @theGraph.addEdge(sourceId, targetId, attrs)
        @displayWidget.draw(@theGraph, @inputVars)
        @connectionBindings(@displayWidget.connections[sourceId][targetId])

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
                    @addVertex({x: e.offsetX - 12, y: e.offsetY - 12})
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
            con.hideOverlay("edgeLabel")
            con.addOverlay([
                "Custom"
                create: =>
                    edge = @theGraph.edge(con.sourceId, con.targetId)
                    @createEditableEdgeLabel(edge, con)
                id: "editableEdgeLabel"
                cssClass: "graph-label"
            ])


    unsetConnectionEditBindings: ->
        @displayWidget.eachConnection (sourceId, targetId, con) =>
            con.unbind("click")
            con.unbind("mouseenter")
            con.unbind("mouseexit")
            con.removeOverlay("editableEdgeLabel")
            con.showOverlay("edgeLabel")

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
        @others = @$selectedNode
            .siblings("div.vertex")
            .children("div.vertex-contents")
        @others.on "mouseenter.vamonos-graph", (e) =>
            @potentialEdgeTo($(e.target).parent())
        @others.on "mouseleave.vamonos-graph", @removePotentialEdge
        @openDrawer()

    selectConnection: (con) ->
        @deselectNode()       if 'vertex' is @selected()
        @deselectConnection() if 'edge' is @selected()
        @$selectedConnection = con
        @$selectedConnection.setPaintStyle(@displayWidget.selectedPaintStyle)
        @openDrawer()

    deselect: ->
        @deselectNode()
        @deselectConnection()
        @closeDrawer()

    deselectNode: ->
        return unless @$selectedNode?
        @displayWidget.jsPlumbInstance.detach(@possibleEdge) if @possibleEdge?
        @others.off("mouseenter.vamonos-graph mouseleave.vamonos-graph")
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

        @potentialEdge = @displayWidget.jsPlumbInstance.connect
            source     : sourceId
            target     : targetId
            paintStyle : @displayWidget.potentialEdgePaintStyle

        @displayWidget.setOverlays(@potentialEdge)

    removePotentialEdge: =>
        return unless @potentialEdge?
        @displayWidget.jsPlumbInstance.detach(@potentialEdge)
        @potentialEdge = undefined

    openDrawer: ->
        type = @selected()
        if type is 'vertex'
            vtx     = @theGraph.vertex(@$selectedNode.attr("id"))
            label   = "vertex&nbsp;&nbsp;#{vtx.name}&nbsp;&nbsp;"
            buttons = []
            for v of @inputVars
                buttons.push $("<button>", {text: "#{v}"})
                    .on "click.vamonos-graph", (e) =>
                        @inputVars[v] = vtx
                        @displayWidget.draw(@theGraph, @inputVars)

            buttons.push($("<button>", {text: "del"})
                    .on "click.vamonos-graph", (e) =>
                        @removeVertex(vtx.id))
        else if type is 'edge'
            sourceId = @$selectedConnection.sourceId
            targetId = @$selectedConnection.targetId
            edge     = @theGraph.edge(sourceId, targetId)
            nametag  = edge.source.name + "&nbsp;" +
                (if @theGraph.directed then "&rarr;" else "-") +
                "&nbsp;" + edge.target.name
            label = "edge&nbsp;&nbsp;#{nametag}&nbsp;&nbsp;"
            buttons = [
                $("<button>", {text: "del"})
                    .on "click.vamonos-graph", (e) =>
                        @removeEdge(edge.source.id, edge.target.id)
            ]
        else
            return
        @displayWidget.openDrawer({buttons, label})

    closeDrawer: ->
        @displayWidget.closeDrawer()

    createEditableEdgeLabel: (edge, con) =>
        val    = Vamonos.rawToTxt(edge[@edgeLabel[0]] ? "")
        $label = $("<div>#{val}</div>")
            .on "click", =>
                @selectConnection(con)
                @editAttribute($label, edge)

    editAttribute: ($label, edge) =>
        valFunc = () =>
            edge[@edgeLabel[0]] ? ""
        returnFunc = (newVal) =>
            val = Vamonos.txtToRaw(newVal)
            edge[@edgeLabel[0]] = val if val?
            Vamonos.rawToTxt(val)
        Vamonos.editableValue($label, valFunc, returnFunc)

    stopEditingLabel: =>
        @displayWidget.$inner
            .find("input.inline-input")
            .trigger("something-was-selected")

@Vamonos.export { Widget: { Graph } }
