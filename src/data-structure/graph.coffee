class Graph

    @description: """
        The Graph data structure provides standard graph functionality
        to Vamonos.
        """

    @spec:
        directed: 
            type: "Boolean"
            description: "Whether the graph is directed."
            defaultValue: false
        prefix:
            type: "String"
            description: "A string prepended to each new vertex id."
            defaultValue: ""
        vertices:
            type: ["Object", "Array"]
            description: "A single vertex or an array of vertices to create the graph with."
            defaultValue: undefined
            example: """
                vertices: [ 
                    {id: "v0", x: 17,  y: 10},
                    {id: "v1", x: 98,  y: 10},
                    {id: "v3", x: 15,  y: 78},
                ]
                """
        edges:
            type: ["Object", "Array"]
            description: "A single edge or an array of edges to create the graph with."
            defaultValue: undefined
            example: """
                edges: [
                    {source: 'v0',target: 'v4'},
                    {source: 'v1',target: 'v2'},
                ]
                """

    @interface = {}

    constructor: (args = {}) ->
        
        @directed = args.directed ? no
        @idPrefix = args.prefix   ? ""

        @type     = 'Graph'
        @edges    = {}
        @vertices = {}

        @addVertex(v) for v in Vamonos.arrayify(args.vertices) when v?
        @addEdge(e.source, e.target, e) for e in Vamonos.arrayify(args.edges) when e?

    # ----------- vertex functions ---------- #

    @interface.vertex = 
        args: [["vid", "a vertex object containing an id field, or an id"]]
        description: "returns the vertex object matching `vid`"
    vertex: (vid) ->
        return @vertices[@idify(vid)]


    @interface.addVertex =
        args: [["vtx", "a vertex object"]]
        description: "adds `vtx` to the graph"
    addVertex: (vtx) ->
        return vtx.id if @vertices[vtx.id]?
        vtx.type  = 'Vertex'
        vtx.name ?= @nextVertexName()
        vtx.id   ?= @nextVertexId()
        @vertices[vtx.id] = vtx
        vtx


    @interface.removeVertex =
        args: [["v",  "a vertex object containing an id field, or an id"]]
        description: 
            "removes the vertex matching `v` and all related edges from the " +
            "graph"
    removeVertex: (v) ->
        vtx = @vertex(v)
        return unless vtx?
        @returnVertexName(vtx.name)
        affectedEdges = @incomingEdges(vtx.id).concat @outgoingEdges(vtx.id)
        @removeEdge(e.source.id, e.target.id) for e in affectedEdges
        delete @vertices[vtx.id]


    @interface.getVertices = description: "returns an array of all vertices"
    getVertices: () ->
        vtx for vid, vtx of @vertices


    @interface.eachVertex =
        args: [["f", "a function taking a vertex as an argument"]]
        description: "applies `f` to each vertex in the graph"
    eachVertex: (f) ->
        vs = (v for id, v of @vertices).sort((a,b) -> a.name - b.name)
        f(v) for v in vs when v?


    @interface.nextVertexId = description: "returns an unused vertex id"
    nextVertexId: () ->
        @_customVertexNum ?= 0
        "#{@idPrefix ? "custom"}-vertex-#{@_customVertexNum++}"


    @interface.returnVertexName = 
        args: [["n", "string"]]
        description: "adds `n` to the list of available vertex names"
    returnVertexName: (n) ->
        @availableNames.unshift(n)
        @availableNames.sort()


    @interface.nextVertexName =
        description: "returns the next available vertex name"
    nextVertexName: () ->
        @availableNames ?= "abcdefghijklmnopqrstuvwxyz".split("")
        @availableNames.shift()

    # ---------- edge functions ----------- #

    @interface.edge =
        args: [
            ["source", "a vertex object containing an id field, or an id"]
            ["target", "a vertex object containing an id field, or an id"]
        ]
        description: 
            "if there is an edge from `source` to `target`, returns it. " +
            "understands undirected graphs."
                
    edge: (source, target) ->
        sourceId = @idify(source)
        targetId = @idify(target)
        @edges[sourceId]?[targetId] or not @directed and @edges[targetId]?[sourceId]


    @interface.addEdge =
        args: [
            ["source", "a vertex object containing an id field, or an id"]
            ["target", "a vertex object containing an id field, or an id"]
            ["attrs", "an object containing edge attributes"]
        ]
        description: "adds an edge from `source` to `target` with attributes copied from `attrs`"
    addEdge: (source, target, attrs) ->
        sourceId = @idify(source)
        targetId = @idify(target)
        return if @edge(sourceId, targetId)
        s = @vertex(sourceId) 
        t = @vertex(targetId)
        return unless s? and t?
        edge = { source: s, target: t, type: 'Edge' }
        if attrs?
            edge[k] = v for k, v of attrs when k isnt 'source' and k isnt 'target'

        (@edges[sourceId] ?= {})[targetId] = edge
        (@edges[targetId] ?= {})[sourceId] = edge unless @directed


    @interface.removeEdge =
        args: [
            ["source", "a vertex object containing an id field, or an id"]
            ["target", "a vertex object containing an id field, or an id"]
        ]
        description: "removes the edge from `source` to `target`. understands directedness."
    removeEdge: (source, target) ->
        sourceId = @idify(source)
        targetId = @idify(target)
        edge = @edges[sourceId]?[targetId]
        delete @edges[sourceId]?[targetId]
        delete @edges[targetId]?[sourceId] unless @directed
        edge


    @interface.getEdges = description: "returns an array of all edges in the graph"
    getEdges: () ->
        uglyArray = (for source, outgoingEdges of @edges
            edge for target, edge of outgoingEdges)
        [].concat(uglyArray...) # flatten array

    # ----------- edge and vertex functions ---------- #

    @interface.neighbors = 
        args: [["v", "a vertex object containing an id field, or an id"]]
        description: "returns all neighbors of `v`"
    neighbors: (v) ->
        (@vertex(target) for target, edge of @edges[@idify(v)])
            .sort (a,b) -> a.name - b.name

    @interface.eachNeighbor = 
        args: [
            ["v", "a vertex object containing an id field, or an id"]
            ["f", "a function that takes a vertex as input"]
        ]
        description: "applies `f` to each neighbor of `v`"
    eachNeighbor: (v, f) ->
        f(neighbor) for neighbor in @neighbors(v) when neighbor?

    @interface.outgoingEdges =
        args: [["v", "a vertex object containing an id field, or an id"]]
        description: "returns all outgoing edges of `v`"
    outgoingEdges: (v) ->
        vid = @idify(v)
        (edge for target, edge of @edges[vid])
            .concat(if @directed then [] else @incomingEdges(vid))

    @interface.incomingEdges =
        args: [["v", "a vertex object containing an id field, or an id"]]
        description: "returns all incoming edges of `v`"
    incomingEdges: (v) ->
        vid = @idify(v)
        uglyArray = (for source, outgoingEdges of @edges
            edge for target, edge of outgoingEdges when target.id is vid)
        [].concat(uglyArray...) # flatten array

    # ------------ utility ----------- #

    idify: (v) ->
        return v if typeof v is 'string' or not v?
        v.id

    clone: () ->
        r = new Vamonos.DataStructure.Graph()
        Vamonos.mixin(r, this, Vamonos.clone)


    @interface.toString = 
        description: "returns a javascripty string you could use to initialize a graph with."
    toString: () ->
        s  = """
            defaultGraph: new Vamonos.DataStructure.Graph({
                directed: #{ @directed },
                vertices: [\n
            """

        @eachVertex (vtx) ->
            s += "\t\t{id: '#{ vtx.id }', x:#{ vtx.x }, y:#{ vtx.y } },\n"

        s += """
            \t],
            \tedges: [\n
            """

        for e in @getEdges()
            s += "\t\t{source: '#{ e.source.id }',target: '#{ e.target.id }', w:'#{ e.w }'},\n"

        s += """
                ]
            }),
            """

        return s


@Vamonos.export { DataStructure: { Graph } }
