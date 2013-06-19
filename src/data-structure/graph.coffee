class Graph
    constructor: ({vertices, edges, @directed}) ->
        
        @vertices  = Vamonos.arrayify(vertices)
        @_type     = 'graph'
        @directed ?= yes
        @_adjHash  = {}

        edges = edges.concat(@reversedEdges(edges)) unless @directed

        @edges = (@configEdge(e) for e in Vamonos.arrayify(edges))

        v._type = 'vertex' for v in @vertices
        e._type = 'edge'   for e in @edges

    reversedEdges: (edges) ->
        {source: target, target: source} for {source, target} in edges

    configEdge: (edge) ->
        {source, target} = edge
        edge.source = @vertex(source)
        edge.target = @vertex(target)
        @_adjHash[source] ?= {}
        @_adjHash[source][target] = edge
        return edge

    edge: (s, t) ->
        [s,t] = (@_idify(v) for v in [s,t])
        @_adjHash[s][t]

    vertex: (id_str) ->
        @vertices.filter(({id}) -> id is id_str)[0]

    eachVertex: (f) ->
        f(v) for v in @vertices

    neighbors: (v) ->
        v = @_idify(v)
        @vertex(target) for target, edge of @_adjHash[v]

    eachNeighbor: (v, f) ->
        f(neighbor) for neighbor in @neighbors(v)

    outgoingEdges: (v) ->
        v = @_idify(v)
        @edges.filter(({source}) -> source.id is v)

    incomingEdges: (v) ->
        v = @_idify(v)
        @edges.filter(({target}) -> target.id is v)

    _idify: (v) ->
        return v if typeof v is 'string'
        v.id

    clone: () ->
        r = new Vamonos.DataStructure.Graph
            vertices: Vamonos.clone(@vertices)
            directed: @directed
            edges: []
        Vamonos.mixin(r, this, Vamonos.clone)


Vamonos.export { DataStructure: { Graph } }
