class BinaryTree

    constructor: (@guts) ->
        @assignOrder()
        @assignDepth()

    assignOrder: () -> 
        @count = 0
        @eachNodeInOrder (n) =>
            n.order = @count++

    assignDepth: () ->
        @maxDepth = 0
        (helper = (node, depth) =>
            return unless node?
            node.depth = depth
            @maxDepth = depth if depth > @maxDepth
            helper(node.left, depth + 1)
            helper(node.right, depth + 1)
        )(@guts, 0)

    eachNodeInOrder: (f) ->
        (helper = (node) ->
            return unless node?
            helper(node.left)
            f(node)
            helper(node.right)
        )(@guts)

    eachNodePreOrder: (f) ->
        (helper = (node) ->
            return unless node?
            f(node)
            helper(node.left)
            helper(node.right)
        )(@guts)

    eachNodePostOrder: (f) ->
        (helper = (node) ->
            return unless node?
            helper(node.left)
            helper(node.right)
            f(node)
        )(@guts)

    asGraph: () ->
        g = new Vamonos.DataStructure.Graph()
        @eachNodePreOrder (n) =>
            thisOne = g.addVertex(n)
            if n.left?
                left = g.addVertex(n.left)
                g.addEdge(n.id, left.id)
            if n.right?
                right = g.addVertex(n.right) 
                g.addEdge(n.id, right.id)
        return g

Vamonos.export { DataStructure: { BinaryTree } }
