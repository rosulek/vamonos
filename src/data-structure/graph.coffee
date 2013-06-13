class Graph
    constructor: ({@vertices, edges, directed}) ->
        directed ?= yes

        @_adjHash = {}
        @edges = for e in edges
            {source, target} = e
            e.source = @getVertex(source)
            e.target = @getVertex(target)
            @_adjHash[source] ?= {}
            @_adjHash[source][target] = e 
            e

    edge: (s, t) ->
        @_adjHash[s][t]

    getNeighbors: (v) ->
        @getVertex(target) for target, edge of @_adjHash[v.id]

    getOutgoingEdges: (v) ->

    getIncomingEdges: (v) ->

    mutateVertices: (f) ->

    getVertex: (id_str) ->
        @vertices.filter(({id}) -> id is id_str)[0]
    

Vamonos.export { DataStructure: { Graph } }
