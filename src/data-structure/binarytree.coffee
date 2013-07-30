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
        rotateRightHelper = (node) ->
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
        rotateLeftHelper = (node) ->
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

    addNode: (targetId, direction, newNode = {}) ->
        @nextId ?= 0
        newNode.id ?= "tree-node-" + @nextId++
        addNodeHelper = (node) ->
            return unless node?
            if node?.id is targetId
                node[direction] = newNode
            else
                addNodeHelper(node.left)
                addNodeHelper(node.right)
        addNodeHelper(@guts)
        @assignOrder()
        @assignDepth()

    deleteNode: (targetId) ->
        deleteNodeHelper = (node) ->
            return unless node?
            if node.right?.id is targetId
                node.right = undefined
                return true
            else if node.left?.id is targetId
                node.left = undefined
                return true
            else
                deleteNodeHelper(node.left) or deleteNodeHelper(node.right)
        if @guts.id is targetId
            @guts = undefined
        else
            deleteNodeHelper(@guts)
        @assignOrder()
        @assignDepth()

    changeVal: (targetId, newVal) ->
        changeValHelper = (node) ->
            return unless node?
            if node.id is targetId
                node.val = newVal
                return true
            else
                changeValHelper(node.left) or changeValHelper(node.right)
        changeValHelper(@guts)
        @assignOrder()
        @assignDepth()

Vamonos.export { DataStructure: { BinaryTree } }
