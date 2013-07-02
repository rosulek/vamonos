class Graph
    constructor: (args = {}) ->
        
        @directed = args.directed ? no

        @type     = 'graph'
        @adjHash  = {}
        @edges    = []
        @vertices = []

        for v in Vamonos.arrayify(args.vertices)
            @addVertex(v) if v?

        for e in Vamonos.arrayify(args.edges)
            @addEdge(e.source, e.target, e) if e?

    # ---------- edge functions ----------- #

    edge: (source, target) ->
        sourceId = @_idify(source) 
        targetId = @_idify(target) 
        matches = @edges.filter (e) =>
            (e.source.id is sourceId and e.target.id is targetId) or
                if @directed then false
                else (e.source.id is targetId and e.target.id is sourceId)
        return matches[0]

    addEdge: (sourceId, targetId, args) ->
        return if @edge(sourceId, targetId)
        s = @vertex(sourceId) 
        t = @vertex(targetId)
        return unless s? and t?
        edge = { source: s, target: t, type: 'edge' }
        if args?
            edge[k] = v for k, v of args when k isnt 'source' and k isnt 'target'

        @adjHash[sourceId] ?= {}
        @adjHash[sourceId][targetId] = edge
        unless @directed
            @adjHash[targetId] ?= {}
            @adjHash[targetId][sourceId] = edge 
        @edges.push(edge)

    removeEdge: (sourceId, targetId) ->
        edge = @edge(sourceId, targetId)
        return unless edge?
        index = @edges.indexOf(edge)
        @edges.splice(@edges.indexOf(edge), 1)
        @adjHash[sourceId][targetId] = undefined
        @adjHash[targetId][sourceId] = undefined unless @directed

    # ----------- vertex functions ---------- #

    vertex: (v) ->
        id_str = @_idify(v)
        return id_str unless typeof id_str is 'string'
        @vertices.filter((v) -> v.id is id_str)[0]

    addVertex: (vtx) ->
        vtx.type  = 'vertex'
        vtx.name ?= @nextVertexName()
        @vertices.push(vtx)

    removeVertex: (vid) ->
        vtx = @vertex(vid)
        return unless vtx?
        @returnVertexName(vtx.name)
        affectedEdges = @incomingEdges(vid).concat @outgoingEdges(vid)
        @removeEdge(e.source.id, e.target.id) for e in affectedEdges
        @vertices.splice(@vertices.indexOf(vtx), 1)

    eachVertex: (f) ->
        @vertices.sort (a,b) -> a.name - b.name
        f(v) for v in @vertices when v?

    returnVertexName: (n) ->
        @availableNames.unshift(n)
        @availableNames.sort()

    nextVertexName: () ->
        @availableNames ?= "abcdefghijklmnopqrstuvwxyz".split("")
        return @availableNames.shift()

    # ----------- edge and vertex functions ---------- #

    neighbors: (v) ->
        v = @_idify(v)
        (@vertex(target) for target, edge of @adjHash[v])
            .sort (a,b) -> a.name - b.name

    eachNeighbor: (v, f) ->
        f(neighbor) for neighbor in @neighbors(v) when neighbor?

    outgoingEdges: (v) ->
        v = @_idify(v)
        @edges.filter ({source, target}) =>
            source.id is v or if @directed then false else target.id is v

    incomingEdges: (v) ->
        v = @_idify(v)
        @edges.filter ({source, target}) =>
            target.id is v or if @directed then false else source.id is v

    # ------------ utility ----------- #

    _idify: (v) ->
        return v if typeof v is 'string' or not v?
        v.id

    clone: () ->
        r = new Vamonos.DataStructure.Graph()
        Vamonos.mixin(r, this, Vamonos.clone)


Vamonos.export { DataStructure: { Graph } }
