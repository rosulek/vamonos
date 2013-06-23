class Graph
    constructor: ({vertices, edges, @directed}) ->
        
        @vertices  = Vamonos.arrayify(vertices)
        @type      = 'graph'
        @directed ?= yes
        @adjHash   = {}
        @edges     = []

        for e in Vamonos.arrayify(edges)
            @addEdge(e.source, e.target)

        v.type = 'vertex' for v in @vertices

    # ---------- edge functions ----------- #

    edge: (source, target) ->
        sourceId = @_idify(source) 
        targetId = @_idify(target) 
        @edges.filter((e) ->
            e.source.id is sourceId and e.target.id is targetId
        )[0]

    addEdge: (sourceId, targetId) ->
        return if @edge(sourceId, targetId)
        s = @vertex(sourceId) 
        t = @vertex(targetId)
        return unless s? and t?
        edge = { source: s, target: t, type: 'edge' }
        @adjHash[sourceId] ?= {}
        @adjHash[sourceId][targetId] = edge
        @edges.push(edge)
        @addEdge(targetId, sourceId) unless @directed

    removeEdge: (sourceId, targetId) ->
        edge = @edge(sourceId, targetId)
        return unless edge?
        console.log "removeEdge: sourceId=#{sourceId} targetId=#{targetId}"
        index = @edges.indexOf(edge)
        console.log "index: #{index}"
        @edges.splice(@edges.indexOf(edge), 1)
        @adjHash[sourceId][targetId] = undefined
        @removeEdge(targetId, sourceId) unless @directed 

    # ----------- vertex functions ---------- #

    vertex: (id_str) ->
        return id_str unless typeof id_str is 'string'
        @vertices.filter(({id}) -> id is id_str)[0]

    addVertex: (vtx) ->
        vtx.type = 'vertex'
        @vertices.push(vtx)

    removeVertex: (vid) ->
        vtx = @vertex(vid)
        return unless vtx?
        affectedEdges = @edges.filter (e) ->
            e.source.id is vid or e.target.id is vid
        @removeEdge(e) for e in affectedEdges
        @vertices.splice(@vertices.indexOf(vtx), 1)

    eachVertex: (f) ->
        f(v) for v in @vertices

    # ----------- edge and vertex functions ---------- #

    neighbors: (v) ->
        v = @_idify(v)
        @vertex(target) for target, edge of @adjHash[v]

    eachNeighbor: (v, f) ->
        f(neighbor) for neighbor in @neighbors(v)

    outgoingEdges: (v) ->
        v = @_idify(v)
        @edges.filter(({source}) -> source.id is v)

    incomingEdges: (v) ->
        v = @_idify(v)
        @edges.filter(({target}) -> target.id is v)

    # ------------ utility ----------- #

    _idify: (v) ->
        return v if typeof v is 'string' or not v?
        v.id

    clone: () ->
        r = new Vamonos.DataStructure.Graph
            vertices: Vamonos.clone(@vertices)
            directed: @directed
            edges: []
        Vamonos.mixin(r, this, Vamonos.clone)


Vamonos.export { DataStructure: { Graph } }
