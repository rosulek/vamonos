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
        @prefix = args.prefix   ? ""

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
        @vertices[@idify(vid)]


    @interface.addVertex =
        args: [["vtx", "a vertex object"]]
        description: "adds `vtx` to the graph"
    addVertex: (vtx = {}) ->
        return @vertices[vtx.id] if @vertices[vtx.id]?
        newVtx = {}
        newVtx.type = 'Vertex'
        if vtx.name?
            @removeVertexName(vtx.name)
            newVtx.name = vtx.name
        else
            newVtx.name = @nextVertexName()
        newVtx.id = vtx.id ? @nextVertexId()
        @vertices[newVtx.id] = newVtx
        for k, v of vtx when k not in ['type','name','id']
            if v?.type is 'Vertex'
                newVtx[k] = @vertex(v)
            else
                newVtx[k] = v
        return newVtx


    @interface.removeVertex =
        args: [["v",  "a vertex object containing an id field, or an id"]]
        description:
            "removes the vertex matching `v` and all related edges from the " +
            "graph"
    removeVertex: (v) ->
        vtx = @vertex(v)
        return unless vtx?
        @returnVertexName(vtx.name)
        affectedEdges = @incomingEdges(vtx.id).concat(@outgoingEdges(vtx.id))
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

    @interface.eachVertexBy =
        args: [
            ["comp", "a comparator"]
            ["f", "a function taking a vertex as an argument"]
        ]
        description: "applies `f` to each vertex in the graph, ordered by `comp`"
    eachVertexBy: (comp, f) ->
        vs = (v for id, v of @vertices).sort(comp)
        f(v) for v in vs when v?

    @interface.nextVertexId = description: "returns an unused vertex id"
    nextVertexId: () ->
        @_customVertexNum ?= 0
        newId = "#{@prefix ? "custom-"}vertex-#{@_customVertexNum++}"
        for existingVtx in @getVertices()
            if existingVtx.id == newId
                return @nextVertexId()
        return newId

    @interface.returnVertexName =
        args: [["n", "string"]]
        description: "adds `n` to the list of available vertex names"
    returnVertexName: (n) ->
        customSort = (a,b) ->
            lower   = (x) -> /[a-z]/.test(x)
            capital = (x) -> /[A-Z]/.test(x)
            number  = (x) -> /[0-9]/.test(x)
            sameType = (a,b) ->
                lower(a) and lower(b) or
                capital(a) and capital(b) or
                number(a) and number(b)
            if sameType(a,b)
                if a == b then 0 else if a < b then -1 else 1
            else
                if lower(a) then -1
                else if lower(b) then 1
                else if capital(a) then -1
                else 1
        @_initAvailableNames()
        @availableNames.unshift(n)
        @availableNames.sort(customSort)

    @interface.removeVertexName =
        args: [["name"]]
        description: "removes `name` from the list of available vertex names"
    removeVertexName: (name) ->
        @_initAvailableNames()
        @availableNames = @availableNames.filter((n) -> n isnt name)

    @interface.nextVertexName =
        description: "returns the next available vertex name"
    nextVertexName: () ->
        @_initAvailableNames()
        @availableNames.shift()

    _initAvailableNames: () ->
        @availableNames ?= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".split("")

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
        if @directed
            @edges[sourceId]?[targetId]
        else
            @edges[sourceId]?[targetId] ? @edges[targetId]?[sourceId]

    modifyEdgeSource: (edge, newSource) =>
        newSourceId = @idify(newSource)
        delete @edges[edge.source.id][edge.target.id]
        (@edges[newSourceId] ?= {})[edge.target.id] = edge
        if not @directed
            delete @edges[edge.target.id][edge.source.id]
            (@edges[edge.target.id] ?= {})[newSourceId] = edge
        edge.source = @vertex(newSourceId)

    modifyEdgeTarget: (edge, newTarget) =>
        newTargetId = @idify(newTarget)
        delete @edges[edge.source.id][edge.target.id]
        @edges[edge.source.id][newTargetId] = edge
        if not @directed
            delete @edges[edge.target.id][edge.source.id]
            (@edges[newTargetId] ?= {})[edge.source.id] = edge
        edge.target = @vertex(newTargetId)

    @interface.edgeId =
        args: [["e", "an edge object"]]
        description: "returns a string identifying `e`"
    edgeId: (e) =>
        e.source.id + "--" + e.target.id

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
            for k, v of attrs when k isnt 'source' and k isnt 'target'
                if v?.type is 'Vertex'
                    edge[k] = @vertex(v)
                else
                    edge[k] = v
        (@edges[sourceId] ?= {})[targetId] = edge
        (@edges[targetId] ?= {})[sourceId] = edge unless @directed
        return edge


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
    getEdges: ->
        results = {}
        for source, outgoingEdges of @edges
            for target, edge of outgoingEdges
                name = "#{edge.source.id}->#{edge.target.id}"
                results[name] = edge
        edge for name, edge of results

    @interface.eachEdge =
        args: [["f", "a function taking an edge"]]
        description: "applies `f` to each edge"
    eachEdge: (f) ->
        f(e) for e in @getEdges() when e?

    @interface.eachEdgeBy =
        args: [
            ["comp", "a comparator"]
            ["f", "a function taking an edge"]
        ]
        description: "applies `f` to each edge, ordered by `comp`"
    eachEdgeBy: (comp, f) ->
        es = @getEdges()
        f(e) for e in es.sort(comp) when e?

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
        result = []
        for source, outgoingEdges of @edges
            for target, edge of outgoingEdges
                if source is vid
                    result.push(edge)
        [].concat(result...) # flatten array

    @interface.incomingEdges =
        args: [["v", "a vertex object containing an id field, or an id"]]
        description: "returns all incoming edges of `v`"
    incomingEdges: (v) ->
        vid = @idify(v)
        result = []
        for source, outgoingEdges of @edges
            for target, edge of outgoingEdges
                if target is vid
                    result.push(edge)
        [].concat(result...) # flatten array

    # ------------ edge collapsing and uncollapsing --------- #

    @interface.collapse =
        args: [["e", "an edge of the graph to collapse"]
              ,["overlapFunc", "a function taking two edges and returning one of them"]]
        description: "collapses `e`, creating a new vertex. By default " +
            "vertex names are concatenations of the collapsed vertices' " +
            "names, vertices' positions are averaged, and overlapping " +
            "edges take the min weight. only works on undirected graphs. " +
            "`overlapFunc` is an optional parameter for a function that " +
            "decides what to do with overlapping edges after a collapse. " +
            "By default overlapFunc keeps the edge with least `w`."
    collapse: (edge, overlapFunc) ->
        throw "collapse: called on directed graph" if @directed
        v1 = @vertex(edge.source)
        v2 = @vertex(edge.target)
        throw "collapse: undefined edge" unless v1? and v2?

        overlapFunc ?= (e1,e2) -> if e1.w <= e2.w then e1 else e2

        newVtx = @addVertex
            name: (v1.name + v2.name).split("").sort().join("")
            id: v1.id + v2.id
            x: Math.floor((v1.x + v2.x) / 2)
            y: Math.floor((v1.y + v2.y) / 2)

        alterEdge = (vid, edge) =>
            if edge.source.id is vid
                existingEdge = @edge(newVtx, edge.target)
                if existingEdge
                    choice = overlapFunc(edge, existingEdge)
                    @removeEdge(newVtx, edge.target)
                    @addEdge(newVtx, edge.target, choice)
                else
                    @modifyEdgeSource(edge, newVtx)
            if edge.target.id is vid
                existingEdge = @edge(edge.source, newVtx)
                if existingEdge
                    choice = overlapFunc(edge, existingEdge)
                    @removeEdge(edge.source, newVtx)
                    @addEdge(edge.source, newVtx, choice)
                else
                    @modifyEdgeTarget(edge, newVtx)

        for edge in @getEdges()
            alterEdge(v1.id, edge)
            alterEdge(v2.id, edge)

        # save v1 and v2 along with the vertex they collapse to for
        # the graph widget to use for animations
        (@recentlyCollapsed ?= {})
        @recentlyCollapsed[v1.id] = newVtx
        @recentlyCollapsed[v2.id] = newVtx

        @removeVertex(v1)
        @removeVertex(v2)

        # remove self-loops
        for edge in @getEdges()
            @removeEdge(edge.source, edge.target) if edge.source is edge.target

    # ------------ utility ----------- #

    idify: (v) ->
        return v if typeof v is 'string' or not v?
        v.id

    clone: ->
        r = new Vamonos.DataStructure.Graph({
            directed: @directed
            prefix: @prefix
        })
        @eachVertex (v) -> r.addVertex(v)
        @eachEdge (e) -> r.addEdge(e.source, e.target, e)
        r.recentlyCollapsed = Vamonos.clone(@recentlyCollapsed)
        return r

    @interface.toString =
        description: "returns a javascripty string you could use to initialize a graph with."
    toString: () ->
        s  = """
            defaultGraph: new Vamonos.DataStructure.Graph({
                directed: #{ @directed },
                prefix: "#{ @prefix }",
                vertices: [\n
            """

        @eachVertex (vtx) ->
            attrs = []
            for attr,value of vtx when value?
                continue if attr in ["type"]
                if value.type is 'Vertex'
                    attrs.push("#{ attr }: '#{ value.id }'")
                else if value.constructor.name is 'String'
                    attrs.push("#{ attr }: '#{ value }'")
                else
                    attrs.push("#{ attr }: #{ value }")
            s += "\t\t{ #{ attrs.join(", ") } },\n"

        s += """
            \t],
            \tedges: [\n
            """

        for e in @getEdges()
            attrs = []
            for attr, value of e
                continue if attr in ["type"]
                if value.type is 'Vertex'
                    attrs.push("#{ attr }: '#{ value.id }'")
                else if value.constructor.name is 'String'
                    attrs.push("#{ attr }: '#{ value }'")
                else
                    attrs.push("#{ attr }: #{ value }")

            s += "\t\t{ #{ attrs.join(", ") } },\n"

        s += """
                ]
            }),
            """

        return s

    # reconstruct a graph object from an object that only has vertices
    # and edges but no methods
    reconstruct: (graph) ->
        @prefix = graph.prefix if graph.prefix?
        @directed = graph.directed if graph.directed?
        if graph.vertices?
            @vertices = {}
            @addVertex(vtx) for id, vtx of graph.vertices
        if graph.edges?
            for srcId, tObj of graph.edges
                @addEdge(e.source, e.target, e) for trgId, e of tObj

@Vamonos.export { DataStructure: { Graph } }
