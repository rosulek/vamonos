class Graph
    constructor: ({@vertices, edges, directed}) ->
        @_type = 'graph'
        directed ?= yes

        @_adjHash = {}
        @edges = for e in edges
            {source, target} = e
            e.source = @vertex(source)
            e.target = @vertex(target)
            @_adjHash[source] ?= {}
            @_adjHash[source][target] = e 
            e

        v._type = 'vertex' for v in @vertices
        e._type = 'edge'   for e in @edges

    edge: (s, t) ->
        @_adjHash[s][t]

    vertex: (id_str) ->
        @vertices.filter(({id}) -> id is id_str)[0]

    neighbors: (v) ->
        @vertex(target) for target, edge of @_adjHash[v.id]

    outgoingEdges: (v) ->
        @edges.filter(({source}) -> source is v)

    incomingEdges: (v) ->
        @edges.filter(({target}) -> target is v)


Vamonos.export { DataStructure: { Graph } }
