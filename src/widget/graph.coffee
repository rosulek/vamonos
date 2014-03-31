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

        (@_args.edgeCssAttributes ?= {}).potential ?= (edge) -> edge._potential
        (@_args.edgeCssAttributes ?= {}).selected  ?= (edge) -> edge._selected

        @edgeLabel = @_args.edgeLabel?.edit ? @_args.edgeLabel
        super(@_args)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @registerVariables()
            @updateVariables()
            super("setup", @viz)

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

    startEditing: ->
        @draw(@theGraph, @inputVars)
        if @editable
            @setEditBindings()

    stopEditing: ->
        if @editable
            @deselect()
            @closeDrawer()
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

    addVertex: (vertex) ->
        newv = @theGraph.addVertex(vertex)
        @draw(@theGraph, @inputVars)
        @setEditBindings()
        @selectVertexById(newv.id)

    removeVertex: (vid) ->
        @deselect()
        @closeDrawer()
        @theGraph.removeVertex(vid)
        for k, v of @inputVars when v? and v.id is vid
            @inputVars[k] = undefined
        @draw(@theGraph, @inputVars)


    addEdge: (sourceId, targetId) ->
        @removePotentialEdge()
        attrs = {}
        if @defaultEdgeAttrs?
            # set edgeLabel default values
            attrs[k] = v for k,v of @defaultEdgeAttrs
        @theGraph.addEdge(sourceId, targetId, attrs)
        @draw(@theGraph, @inputVars)
        @setEditBindings()

    removeEdge: (sourceId, targetId) ->
        @deselect() if 'edge' is @selected()
        @closeDrawer()
        @theGraph.removeEdge(sourceId, targetId)
        @draw(@theGraph, @inputVars)

    createButtons: () ->
        @newVertexButton = $("<button>new vertex</button>")
            .on("click", () => @addVertex())
            .insertAfter("#g-var")

    setEditBindings: ->
        @inner.selectAll("g.vertex")
            .classed("editable-vertex", true)
            .on "click.vamonos-graph", (d) =>
                sourceId = @selectedVertex?.attr("id")
                targetId = d3.event.target.__data__.id
                # if a vertex is selected and there is no (actual) edge already
                if sourceId? and @theGraph.edge(sourceId, targetId)._potential?
                    @addEdge(sourceId, targetId)
                else if sourceId is targetId
                    @deselect()
                    @closeDrawer()
                else
                    @selectVertexById(targetId)
                @_notNewVertexClick = true
        @inner.selectAll("path.edge")
            .on "mouseenter.vamonos-graph", (d) ->
                d3.select(this).classed("selectme", true)
            .on "mouseout.vamonos-graph", (d) ->
                d3.select(this).classed("selectme", null)
            .on "click.vamonos-graph", (d) =>
                @selectEdgeBySelector(d3.select(d3.event.target))
                @_notNewVertexClick = true
        @$outer.off("click.vamonos-graph") # dont register multiple identical handlers, jquery
        @$outer.on "click.vamonos-graph", (e) =>
            if @_notNewVertexClick
                delete @_notNewVertexClick
            else if @selected()
                @deselect()
                @closeDrawer()
            else # create new vertex
                x = e.offsetX - @containerMargin
                y = e.offsetY - @containerMargin
                @addVertex({x:x, y:y})

    unsetEditBindings: ->
        @$outer.off("click.vamonos-graph")
        @inner.selectAll("g.vertex")
            .on("click.vamonos-graph", null)
            .classed("editable-vertex", null)
        @inner.selectAll("path.edge")
            .on("mouseenter.vamonos-graph", null)
            .on("mouseout.vamonos-graph", null)
            .classed("selectme", null)

    removeButtons: ->
        @newVertexButton?.remove()

    selected: ->
        return 'vertex' if @selectedVertex?
        return 'edge'   if @selectedEdge?
        return false

    selectEdgeBySelector: (sel) ->
        oldEdgeId = @selectedEdge?.attr('id')
        @deselect()
        return if oldEdgeId is sel.attr('id')
        @selectedEdge = sel.classed("selected", true)
        @openDrawer()

    selectVertexById: (vid) ->
        @selectVertexBySelector(@inner.select("#" + vid))

    selectVertexBySelector: (sel) ->
        @deselect()
        @selectedVertex = sel.classed("selected", true)
        @inner.selectAll("g.vertex")
            .on("mouseover.vamonos-graph", (v) => @potentialEdgeTo(v.id))
            .on("mouseleave.vamonos-graph", (v) => @removePotentialEdge())
        @openDrawer()

    deselect: ->
        @deselectVertex()
        @deselectEdge()

    deselectVertex: ->
        return unless @selectedVertex?
        @selectedVertex.classed("selected", false)
        delete @selectedVertex
        @unsetPotentialEdgeBindings()

    unsetPotentialEdgeBindings: () ->
        @removePotentialEdge()
        @inner.selectAll("g.vertex")
            .on("mouseover.vamonos-graph", null)
            .on("mouseleave.vamonos-graph", null)

    deselectEdge: ->
        return unless @selectedEdge?
        @selectedEdge.classed("selected", null)
        delete @selectedEdge

    potentialEdgeTo: (vid) =>
        sourceId = @selectedVertex.attr("id")
        return unless sourceId isnt vid
        @removePotentialEdge()
        @potentialEdge = @theGraph.addEdge(sourceId, vid, { _potential: true })
        @draw(@theGraph, @inputVars)

    removePotentialEdge: =>
        return unless @potentialEdge?
        e = @potentialEdge
        @theGraph.removeEdge(e.source.id, e.target.id)
        delete @potentialEdge
        @draw(@theGraph, @inputVars)

    openDrawer: ->
        type = @selected()
        if type is 'vertex'
            vtx     = @theGraph.vertex(@selectedVertex.attr("id"))
            label   = "vertex&nbsp;&nbsp;#{vtx.name}&nbsp;&nbsp;"
            buttons = []
            for v of @inputVars
                # we have to close over v in this loop. otherwise
                # multiple variables will be all set to the final
                # variable in the click handler.
                do (v, vtx, buttons, ths = @, inputVars = @inputVars, theGraph = @theGraph) ->
                    vName = Vamonos.resolveSubscript(v)
                    $b = $("<button>", { text: vName, title: "Set #{vName}=#{vtx.name}" })
                    $b.on "click.vamonos-graph", (e) =>
                        inputVars[v] = vtx
                        ths.draw(theGraph, inputVars)
                    buttons.push($b)

            buttons.push($("<button>", {text: "del", title: "Delete #{vtx.name}"})
                    .on "click.vamonos-graph", (e) =>
                        @removeVertex(vtx.id))
        else if type is 'edge'
            edge = @selectedEdge.data()[0]
            sourceId = edge.source.id
            targetId = edge.target.id
            if @theGraph.directed
                arr = "&rarr;"
            else
                arr = "-"
            nametag  = edge.source.name + "&nbsp;" + arr + "&nbsp;" + edge.target.name
            label = "edge&nbsp;&nbsp;#{nametag}&nbsp;&nbsp;"
            buttons = []
            for attrName, defaultVal of @defaultEdgeAttrs
                do (edge, attrName, buttons, ths = @, inputVars = @inputVars, theGraph = @theGraph) ->

                    $val = $("<span>", { text: edge[attrName] })
                    $label = $("<div>", { text: "#{attrName} = ", class: "editable-attr" })
                        .append($val)
                        .on("click", =>
                            update = (newVal) ->
                                edge[attrName] = +newVal
                                ths.draw(theGraph, inputVars)
                                $label.removeClass("active")
                                return newVal
                            $label.addClass("active")
                            Vamonos.editableValue($val, ((e)->e.text()), update))

                    buttons.push($label)

                continue
            buttons.push(
                $("<button>", {
                    text: "del",
                    title: "Delete #{edge.source.name}->#{edge.target.name}"
                }).on "click.vamonos-graph", (e) => @removeEdge(edge.source.id, edge.target.id)
            )
        else return
        super({ buttons, label })

@Vamonos.export { Widget: { Graph } }
