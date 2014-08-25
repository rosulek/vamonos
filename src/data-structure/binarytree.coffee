class BinaryTree

    @interface = {}
    @description = """
        *Experimental*. BinaryTree takes a tree encoded as nested objects of
        the form `{ val, id, left, right }` where left and right are optional
        objects of the same form.
        """

    constructor: (@guts) ->
        @_refresh()
        @type = "BinaryTree"


    @interface.eachNodeInOrder = 
        args: [["f", "a function that takes a node"]]
        description: "applies `f` to each node using an in-order traversal"

    eachNodeInOrder: (f) ->
        (helper = (node) ->
            return unless node?
            helper(node.left)
            f(node)
            helper(node.right)
        )(@guts)


    @interface.eachNodePreOrder = 
        args: [["f", "a function that takes a node"]]
        description: "applies `f` to each node using a pre-order traversal"

    eachNodePreOrder: (f) ->
        (helper = (node) ->
            return unless node?
            f(node)
            helper(node.left)
            helper(node.right)
        )(@guts)


    @interface.eachNodePostOrder = 
        args: [["f", "a function that takes a node"]]
        description: "applies `f` to each node using a post-order traversal"

    eachNodePostOrder: (f) ->
        (helper = (node) ->
            return unless node?
            helper(node.left)
            helper(node.right)
            f(node)
        )(@guts)


    @interface.asGraph = 
        description: "returns an equivalent `Vamonos.DataStructure.Graph`"

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


    @interface.rotateRight = 
        args: [["id", "a node id"]]
        description: "rotates the tree right at the node matching id"

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
        @_refresh()
        "ok"


    @interface.rotateLeft = 
        args: [["id", "a node id"]]
        description: "rotates the tree left at the node matching id"

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
        @_refresh()
        "ok"


    @interface.addNode = 
        args: [
            ["targetId", "a node id"], 
            ["direction", "`\"left\"` or `\"right\"`"]
            ["newNode", "optional: a node object"]
        ]
        description: "adds `newNode` as the `direction` child of the node matching `targetId`"

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
        @_refresh()
        return newNode.id


    @interface.deleteNode = 
        args: [["targetId", "a node id"]]
        description: "deletes the node matching `targetId`, preforming rotations as necessary"

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
        @_refresh()


    @interface.changeVal = 
        args: [["targetId", "a node id"], ["newVal", "an arbitrary value"]]
        description: "changes the val field of the node matching `targetId` to `newVal`"

    changeVal: (targetId, newVal) ->
        changeValHelper = (node) ->
            return unless node?
            if node.id is targetId
                node.val = newVal
                return true
            else
                changeValHelper(node.left) or changeValHelper(node.right)
        changeValHelper(@guts)
        @_refresh()


    _refresh: ->
        @_assignOrder()
        @_assignDepth()

    _assignOrder: -> 
        @count = 0
        @eachNodeInOrder (n) =>
            n.order = @count++

    _assignDepth: ->
        @maxDepth = 0
        (helper = (node, depth) =>
            return unless node?
            node.depth = depth
            @maxDepth = depth if depth > @maxDepth
            helper(node.left, depth + 1)
            helper(node.right, depth + 1)
        )(@guts, 0)


@Vamonos.export { DataStructure: { BinaryTree } }
