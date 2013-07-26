class Graph

    constructor: ({
        @varName
        @defaultGraph
        @inputVars

        @colorEdges     # for registering vars with viz
        @vertexLabels   # for registering vars with viz
    }) ->

        @inputVars           ?= {}
        @updateNodePositions ?= false

        @theGraph = @defaultGraph ? new Vamonos.DataStructure.Graph()
        @inputVars[k] = @theGraph.vertex(v) for k,v of @inputVars

        @displayWidget = new Vamonos.Widget.GraphDisplay(arguments...)
   
    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(key, true) for key of @inputVars
            for e in @colorEdges when typeof e[0] is 'string'
                @viz.registerVariable(v) for v in e[0].split(/<?->?/)
            for label, values of @vertexLabels
                for v in values when typeof v is 'string'
                    @viz.registerVariable(v)
            @viz.setVariable(@varName, Vamonos.clone(@defaultGraph), true)

        when "render"
            [frame, type] = options
            @displayWidget.draw(frame[@varName], frame)

        when "displayStart" 
            @mode = "display"

        when "displayStop"  
            @displayWidget.clear()

        when "editStart"    
            @displayWidget.startEditing(@theGraph, @inputVars)

        when "editStop"     
            [@theGraph, @inputVars] = @displayWidget.stopEditing()
            @updateVizVariables()

    updateVizVariables: () ->
        graph = Vamonos.clone(@theGraph)
        @viz.setVariable(@varName, graph)
        for k, v of @inputVars
            # TODO do alerting in a friendlier way - maybe using mikes boxes
            unless v?
                alert "GRAPH WIDGET: please set #{k}!"
                throw "GRAPH WIDGET: need a value for #{k}!"
            @viz.setVariable(k, graph.vertex(v.id), true)

Vamonos.export { Widget: { Graph } }
