class BinaryTree

    @xscalar = 60
    @yscalar = 40

    constructor: ({container, @varName, defaultTree}) ->
        #@theTree = defaultTree ? new Vamonos.DataStructure.BinaryTree()
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
            @drawTree(frame[@varName])

    nextNodeId: () ->
        @_customNodeNum ?= 0
        return "tree-node-#{@_customNodeNum++}"

    generatePositions: (tree) ->
        tree.eachNodeInOrder (n) =>
            n.x = n.order * BinaryTree.xscalar
            n.y = n.depth * BinaryTree.yscalar

    drawTree: (tree) ->
        @drawNodes(tree)
        @drawEdges(tree)
        @treeCreated = yes
        @oldTree = tree

    drawEdges: (tree) ->
        if @oldTree?
            @oldTree.eachNodeInOrder (n) =>
                if n.l?
                    @graphWidget.removeEdge(n.id, n.l.id)
                if n.r?
                    @graphWidget.removeEdge(n.id, n.r.id)

        tree.eachNodeInOrder (n) =>
            if n.l?
                @graphWidget.addEdge(n.id, n.l.id)
            if n.r?
                @graphWidget.addEdge(n.id, n.r.id)
        
    drawNodes: (tree) ->
        tree.eachNodeInOrder (n) =>
            $n = @graphWidget.getNode(n.id)
            if $n?
                @graphWidget.updateNodePosition($n, n) 
            else
                @graphWidget.addVertex(n, false)


Vamonos.export { Widget: { BinaryTree } }
