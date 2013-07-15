class Graph
    constructor: (args = {}) ->
        
        @directed = args.directed ? no

        @type     = 'graph'
        @edges    = {}
        @vertices = {}

        @addVertex(v) for v in Vamonos.arrayify(args.vertices) when v?
        @addEdge(e.source, e.target, e) for e in Vamonos.arrayify(args.edges) when e?

    # ---------- edge functions ----------- #

    edge: (source, target) ->
        return @edges[@_idify(source)]?[@_idify(target)]

    addEdge: (sourceId, targetId, args) ->
        return if @edge(sourceId, targetId)
        s = @vertex(sourceId) 
        t = @vertex(targetId)
        return unless s? and t?
        edge = { source: s, target: t, type: 'edge' }
        if args?
            edge[k] = v for k, v of args when k isnt 'source' and k isnt 'target'

        (@edges[sourceId] ?= {})[targetId] = edge
        unless @directed
            (@edges[targetId] ?= {})[sourceId] = edge

    removeEdge: (sourceId, targetId) ->
        edge = @edges[sourceId]?[targetId]
        @edge[sourceId][targetId] = undefined
        @edge[targetId][sourceId] = undefined unless @directed
        edge

    # ----------- vertex functions ---------- #

    vertex: (v) ->
        return @vertices[@_idify(v)]

    addVertex: (vtx) ->
        vtx.type  = 'vertex'
        vtx.name ?= @nextVertexName()
        vtx.id   ?= @nextVertexId()
        @vertices[vtx.id] = vtx
        vtx.id

    removeVertex: (v) ->
        vtx = @vertex(@_idify(v))
        return unless vtx?
        @returnVertexName(vtx.name)
        affectedEdges = @incomingEdges(vid).concat @outgoingEdges(vid)
        @removeEdge(e.source.id, e.target.id) for e in affectedEdges

    eachVertex: (f) ->
        vs = (v for id, v in @vertices).sort((a,b) -> a.name - b.name)
        f(v) for v in vs when v?

    nextVertexId: () ->
        @_customVertexNum ?= 0
        "custom-vertex-#{@_customVertexNum++}"

    returnVertexName: (n) ->
        @availableNames.unshift(n)
        @availableNames.sort()

    nextVertexName: () ->
        @availableNames ?= "abcdefghijklmnopqrstuvwxyz".split("")
        @availableNames.shift()

    # ----------- edge and vertex functions ---------- #

    neighbors: (v) ->
        (@vertex(target) for target, edge of @edges[@_idify(v)])
            .sort (a,b) -> a.name - b.name

    eachNeighbor: (v, f) ->
        f(neighbor) for neighbor in @neighbors(v) when neighbor?

    outgoingEdges: (v) ->
        vid = @_idify(v)
        @edges[vid].concat(if @directed then [] else @incomingEdges(vid))

    incomingEdges: (v) ->
        vid = @_idify(v)
        uglyArray = (for source, outgoingEdges of @edges
            edge for target, edge of outgoingEdges when target.id is vid)
        [].concat(uglyArray...) # flatten array

    # ------------ utility ----------- #

    _idify: (v) ->
        return v if typeof v is 'string' or not v?
        v.id

    clone: () ->
        r = new Vamonos.DataStructure.Graph()
        Vamonos.mixin(r, this, Vamonos.clone)


Vamonos.export { DataStructure: { Graph } }
