class BinaryTree

    @description = "A representation of a binary tree."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        defaultTree:
            type: "BinaryTree"
            description: "the initial tree"
            defaultValue: undefined
        xscalar:
            type: "Number"
            defaultValue: 60
            description: "how far to seperate nodes on the x axis"
        yscalar:
            type: "Number"
            defaultValue: 40
            description: "how far to seperate nodes on the y axis"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : args

        @theTree = @defaultTree ? new Vamonos.DataStructure.BinaryTree()

        @graphDisplay = new Vamonos.Widget.GraphDisplay
            container        : @container
            vertexLabels     : {inner: (n)->n.val}
            draggable        : false
            highlightChanges : false
            resizable        : false

    event: (event, options...) -> switch event
        when "setup"
            # display widget handles calling done()
            @graphDisplay.event(event, options...)
        when "render"
            [frame, type] = options
            @draw(frame[@varName])

    draw: (tree) ->
        @generatePositions(tree)
        graph = tree.asGraph()
        @graphDisplay.fitGraph(graph, @graphDrawn)
        @graphDisplay.draw(graph, @graphDrawn)
        @graphDrawn ?= true

    generatePositions: (tree) ->
        tree.eachNodeInOrder (n) =>
            n.x = n.order * @xscalar + @graphDisplay.containerMargin
            n.y = n.depth * @yscalar + @graphDisplay.containerMargin

    editMode: ->
        @draw(@theTree)
        @setContainerEditBindings()

    setContainerEditBindings: ->
        @graphDisplay.$outer.on "click.vamonos-graph", (e) =>
            $target = $(e.target)
            if $target.is("div.vertex-contents")
                @selectNode($target.parent())
            else
                @deselect()
            true

    selected: ->
        return 'node' if @$selectedNode?

    selectNode: (node) ->
        @deselectNode() if 'node' is @selected()
        @$selectedNode = node
        node.addClass("selected")
        node.find("div.vertex-contents").on "click", =>
            @editValue(@$selectedNode)
        @openDrawer()

    deselect: ->
        @deselectNode()
        @closeDrawer()

    deselectNode: ->
        return unless @$selectedNode
        @$selectedNode.find("div.vertex-contents").off "click"
        @$selectedNode.removeClass("selected")
        @$selectedNode = undefined

    openDrawer: ->
        return unless 'node' is @selected()
        node = @theTree.asGraph().vertex(@$selectedNode.attr("id"))
        buttons = []
        if node.right?
            buttons.push(
                $("<button>", {text: "rotate left"})
                    .on "click.vamonos-graph", (e) =>
                        rightChild = node.right
                        @theTree.rotateLeft(node.id)
                        @draw(@theTree)
                        @selectNode(@graphDisplay.nodes[rightChild.id])
            )
        if node.left?
            buttons.push(
                $("<button>", {text: "rotate right"})
                    .on "click.vamonos-graph", (e) =>
                        leftChild = node.left
                        @theTree.rotateRight(node.id)
                        @draw(@theTree)
                        @selectNode(@graphDisplay.nodes[leftChild.id])
            )
        unless node.left?
            buttons.push(
                $("<button>", {text: "add left child"})
                    .on "click.vamonos-graph", (e) =>
                        nodeId = @theTree.addNode(node.id, "left", {val: node.val})
                        @draw(@theTree)
                        @selectNode(@graphDisplay.nodes[nodeId])
            )
        unless node.right?
            buttons.push(
                $("<button>", {text: "add right child"})
                    .on "click.vamonos-graph", (e) =>
                        nodeId = @theTree.addNode(node.id, "right", {val: node.val})
                        @draw(@theTree)
                        @selectNode(@graphDisplay.nodes[nodeId])
            )
        unless node.depth is 0
            buttons.push(
                $("<button>", {text: "del"})
                    .on "click.vamonos-graph", (e) =>
                        @theTree.deleteNode(node.id)
                        @deselect()
                        @draw(@theTree)
            )
        @graphDisplay.openDrawer({buttons, label: ""})


    closeDrawer: ->
        @graphDisplay.closeDrawer()

    editValue: ($node) ->
        $contents = $node.find("div.vertex-contents")
        nodeId = $node.attr("id")
        valFunc = ($contents) -> 
            $contents.text()
        returnFunc = (newVal) =>
            val = Vamonos.txtToRaw(newVal)
            @theTree.changeVal(nodeId, val) if newVal?
            return Vamonos.rawToTxt(val)
        Vamonos.editableValue($contents, valFunc, returnFunc)

@Vamonos.export { Widget: { BinaryTree } }
