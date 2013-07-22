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
            helper(node.l, depth + 1)
            helper(node.r, depth + 1)
        )(@guts, 0)

    eachNodeInOrder: (f) ->
        (helper = (node) ->
            return unless node?
            helper(node.l)
            f(node)
            helper(node.r)
        )(@guts)

    eachNodePreOrder: (f) ->
        (helper = (node) ->
            return unless node?
            f(node)
            helper(node.l)
            helper(node.r)
        )(@guts)

    eachNodePostOrder: (f) ->
        (helper = (node) ->
            return unless node?
            helper(node.l)
            helper(node.r)
            f(node)
        )(@guts)

    asGraph: () ->
        g = new Vamonos.DataStructure.Graph()
        @eachNodeInOrder (n) =>
            leftId  = g.addVertex(n.left)  if n.left?
            rightId = g.addVertex(n.right) if n.right?
            g.addEdge(leftId, rightId)
        return g

Vamonos.export { DataStructure: { BinaryTree } }
