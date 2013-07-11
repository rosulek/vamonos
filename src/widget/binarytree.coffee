class BinaryTree

    @xscalar = 60
    @yscalar = 60

    constructor: ({container, @varName, defaultTree}) ->
        #@theTree = defaultTree ? new Vamonos.DataStructure.BinaryTree()
        @edges = []
        @nodes = []
        @graphWidget = new Vamonos.Widget.Graph
            container: container
            draggable: false
            updateNodePositions: true
            updateEdges: true
            varName: "tree" # graph model will never see actual frames
            vertexLabels: 
                inner: (n)->n.v
        @theGraph = @graphWidget.theGraph

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @graphWidget.event(event, options...)
        when "render"
            [frame, type] = options
            @generatePositions(frame[@varName])
            if @treeCreated?
                @updateTree(frame[@varName])
            else
                @createTree(frame[@varName])

    nextNodeId: () ->
        @_customNodeNum ?= 0
        return "tree-node-#{@_customNodeNum++}"

    generatePositions: (tree) ->
        tree.eachNodeInOrder (n) =>
            n.x = n.order * BinaryTree.xscalar
            n.y = n.depth * BinaryTree.yscalar

    createTree: (tree) ->
        tree.eachNodeInOrder (n) =>
            @nodes.push(@graphWidget.addVertex(n, false))
        tree.eachNodeInOrder (n) =>
            if n.l?
                @edges.push(@graphWidget.addEdge(n.id, n.l.id))
            if n.r?
                @edges.push(@graphWidget.addEdge(n.id, n.r.id))
        @treeCreated = yes

    updateTree: (tree) ->
        console.log @edges
        activeEdges = []
        tree.eachNodeInOrder (n) =>
            $n = @getNode(n.id)
            @graphWidget.updateNodePosition($n, n) if $n?
            if n.l?
                e = @theGraph.edge(n.id, n.l.id)
                if e?
                    activeEdges.push("#{e.source.id}->#{e.target.id}")
            if n.r?
                e = @theGraph.edge(n.id, n.r.id)
                if e?
                    activeEdges.push("#{e.source.id}->#{e.target.id}")
        console.log activeEdges
        for $e in @edges
            continue unless $e?
            unless "#{$e.sourceId}->#{$e.targetId}" in activeEdges
                @graphWidget.removeEdge($e.sourceId, $e.targetId)
                @edges.splice(@edges.indexOf($e), 1)

    getNode: (nodeId) ->
        return unless @nodes.length and nodeId?
        @nodes.filter(($n) -> $n.attr("id") is nodeId)[0]

Vamonos.export { Widget: { BinaryTree } }
