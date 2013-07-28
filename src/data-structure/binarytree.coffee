class BinaryTree

    constructor: (@guts) ->
        @assignOrder()
        @assignDepth()

    assignOrder: -> 
        @count = 0
        @eachNodeInOrder (n) =>
            n.order = @count++

    assignDepth: ->
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

    asGraph: ->
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

    rotateRight: (id) ->
        rotateRightHelper = (node, id) ->
            return unless node?
            if node?.id is id
                return node unless node.left?
                temp       = node
                left       = node.left
                x          = left.right
                left.right = node
                node.left  = x
                return left
            else
                node.left  = rotateRightHelper(node.left, id)
                node.right = rotateRightHelper(node.right, id)
                return node
        @guts = rotateRightHelper(@guts, id)
        @assignOrder()
        @assignDepth()
        "ok"

    rotateLeft: (id) ->
        rotateLeftHelper = (node, id) ->
            return unless node?
            if node?.id is id
                return node unless node.right?
                temp = node
                right = node.right
                x = right.left
                right.left = node
                node.right = x
                return right
            else
                node.left = rotateLeftHelper(node.left, id)
                node.right = rotateLeftHelper(node.right, id)
                return node
        @guts = rotateLeftHelper(@guts, id)
        @assignOrder()
        @assignDepth()
        "ok"


Vamonos.export { DataStructure: { BinaryTree } }
