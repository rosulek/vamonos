class Graph

    constructor: ({container, @vertices, @adjacencyList, @startVertex, @graphName}) ->

        @$container = Vamonos.jqueryify(container)
        
        
    event: (event, options...) -> switch event

        when "setup"
            [@stash, visualizer] = options

            for v in [@graphName, @startVertex, @vertices...]
                Vamonos.insertSet(v, @stash._inputVars) 

            G     = @stash[@graphName]     = {}
            G[v]  = {} for v in @vertices
            G.Adj = @adjacencyList
            G.V   = @vertices

Vamonos.export { Widget: { Graph } }
