class BinaryTree

    constructor: (@guts) ->
        @refresh()

    refresh: ->
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
        rotateRightHelper = (node) =>
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

    rotateLeft: (id) ->
        rotateLeftHelper = (node) =>
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

    newNode: (val) ->
        @nextId ?= 0
        { height: 0, id: "tree-node-" + @nextId++, val: val }

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
        return newNode.id

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
        @refresh()

    changeAttr: (targetId, attr, newVal) ->
        changeAttrHelper = (node) ->
            return unless node?
            if node.id is targetId
                node[attr] = newVal
                return true
            else
                changeAttrHelper(node.left) or changeAttrHelper(node.right)
        changeAttrHelper(@guts)
        @refresh()

    getNode: (targetId) ->
        traverse = (node) ->
            return unless node?
            if node.id is targetId
                return node
            else
                traverse(node.left) or traverse(node.right)
        traverse(@guts)

    updateHeight: (id) ->
        node = @getNode(id)
        hl = if node.left? then node.left.height else -1
        hr = if node.right? then node.right.height else -1
        node.height = Math.max(hl, hr) + 1

    updateHeights: ->
        @eachNodePostOrder (n) =>
            @updateHeight(n.id)

    balanceFactor: (id) ->
        node = @getNode(id)
        hl = if node.left? then node.left.height else -1
        hr = if node.right? then node.right.height else -1
        hl - hr

    restructure: (id) ->
        node = @getNode(id)
        if @balanceFactor(id) == 2
            if @balanceFactor(node.left.id) == -1
                @rotateLeft(node.left.id)
            @rotateRight(node.id)
        else if @balanceFactor(id) == -2
            if @balanceFactor(node.right.id) == 1
                @rotateRight(node.right.id)
            @rotateLeft(node.id)
        @updateHeights()



Vamonos.export { DataStructure: { BinaryTree } }
