class BinaryTree

    @xscalar = 60
    @yscalar = 40

    constructor: ({container, @varName, defaultTree}) ->
        @theTree = defaultTree ?= new Vamonos.DataStructure.Tree()
        @graphDisplay = new Vamonos.Widget.GraphDisplay
            container        : container
            vertexLabels     : {inner: (n)->n.val}
            draggable        : false
            highlightChanges : false
            resizable        : false

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
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
            n.x = n.order * BinaryTree.xscalar + @graphDisplay.containerMargin
            n.y = n.depth * BinaryTree.yscalar + @graphDisplay.containerMargin

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
        @editValue(@$selectedNode)
        @openDrawer()

    deselect: ->
        @deselectNode()
        @closeDrawer()

    deselectNode: ->
        return unless @$selectedNode
        @$selectedNode.removeClass("selected")
        @$selectedNode = undefined

    openDrawer: ->
        if @$drawer?
            @$drawer.html("<div class='graph-drawer'></div>")
        else
            @$drawer = $("<div>", { class: "graph-drawer" }).hide()
            @graphDisplay.$outer.parent().append(@$drawer)

        type = @selected()

        switch type
            when 'node'
                node = @theTree.asGraph().vertex(@$selectedNode.attr("id"))

                if node.right?
                    $("<button>", {text: "rotate left"})
                        .on "click.vamonos-graph", (e) =>
                            @theTree.rotateLeft(node.id)
                            @deselect()
                            @draw(@theTree)
                        .appendTo(@$drawer)

                if node.left?
                    $("<button>", {text: "rotate right"})
                        .on "click.vamonos-graph", (e) =>
                            @theTree.rotateRight(node.id)
                            @deselect()
                            @draw(@theTree)
                        .appendTo(@$drawer)

                unless node.left?
                    $("<button>", {text: "add left child"})
                        .on "click.vamonos-graph", (e) =>
                            @theTree.addNode(node.id, "left", {val: node.val})
                            @deselect()
                            @draw(@theTree)
                        .appendTo(@$drawer)

                unless node.right?
                    $("<button>", {text: "add right child"})
                        .on "click.vamonos-graph", (e) =>
                            @theTree.addNode(node.id, "right", {val: node.val})
                            @deselect()
                            @draw(@theTree)
                        .appendTo(@$drawer)

                $("<span>", {html: "&nbsp;"}).appendTo(@$drawer)

                $("<button>", {text: "del"})
                    .on "click.vamonos-graph", (e) =>
                        @theTree.deleteNode(node.id)
                        @deselect()
                        @draw(@theTree)
                    .appendTo(@$drawer)
                        

        @$drawer.fadeIn("fast") unless @$drawer.is(":visible")

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")

    editValue: ($node) ->
        $contents = $node.find("div.vertex-contents")
        nodeId = $node.attr("id")
        val = $contents.text()
        $editor = $("<input class='inline-input'>")
            .hide()
            .width($contents.width())
            .val(val)
            .on "keydown.vamonos-graph", (event) =>
                return unless event.keyCode in [13, 32, 9, 27]
                @doneEditing($editor, $contents, nodeId)
                false
            .on "blur.vamonos-graph something-was-selected", (event) =>
                @doneEditing($editor, $contents, nodeId)
                true
        $contents.html($editor)
        $editor.fadeIn("fast")
            .focus()
            .select()

    doneEditing: ($editor, $contents, nodeId) =>
        val = Vamonos.txtToRaw($editor.val())
        @theTree.changeVal(nodeId, val) if val?
        $contents.html(Vamonos.rawToTxt(val))

    stopEditingLabel: =>
        @displayWidget.$inner
            .find("input.inline-input")
            .trigger("something-was-selected")


Vamonos.export { Widget: { BinaryTree } }
