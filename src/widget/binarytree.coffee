class BinaryTree

    @xscalar = 60
    @yscalar = 40

    constructor: ({container, @varName, defaultTree}) ->
        @theTree = defaultTree ?= new Vamonos.DataStructure.Tree()
        @graphDisplay = new Vamonos.Widget.GraphDisplay
            container: container
            vertexLabels: {inner: (n)->n.val}
            draggable: false
            highlightChanges: false

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
            if not @selected()
                if $target.is("div.vertex-contents")
                    @selectNode($target.parent())
            else
                if $target.is("div.vertex-contents") and 'vertex' is @selected()
                    sourceId = @$selectedNode.attr("id")
                    targetId = $target.parent().attr("id")
                    if sourceId is targetId
                        @deselect()
                else if $target.is(@graphDisplay.$inner)
                    @deselect()
            true

    selected: ->
        return 'node' if @$selectedNode?

    selectNode: (node) ->
        @deselectNode() if 'node' is @selected()
        @$selectedNode = node
        node.addClass("selected")
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
            @$drawer.html("")
        else
            @$drawer = $("<div>", { class: "graph-drawer" })
            @$drawer.hide()
            @graphDisplay.$inner.append(@$drawer)

        type = @selected()

        $inputHolder = $("<span>", {class: "right"})
        switch type
            when 'node'
                id = @$selectedNode.attr("id")
                elem = @theTree.asGraph().vertex(id)
                @$drawer.html(
                    "<span class='left'>node: val=#{elem.val}</span>"
                )

                $left = $("<button>", {text: "rotate left"})
                $left.on "click.vamonos-graph", (e) =>
                    @theTree.rotateLeft(id)
                    @deselect()
                    @draw(@theTree)
                $right = $("<button>", {text: "rotate right"})
                $right.on "click.vamonos-graph", (e) =>
                    @theTree.rotateRight(id)
                    @deselect()
                    @draw(@theTree)
                $inputHolder.append([$left, $right])

        @$drawer.append($inputHolder)

        unless @$drawer.is(":visible")
            @$drawer.fadeIn("fast")
            @graphDisplay.$outer.animate(
                { height: (@graphDisplay.$outer.height() + @$drawer.height()) }
                200
            )

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")
        @graphDisplay.$outer.animate(
            { height: (@graphDisplay.$outer.height() - @$drawer.height()) }
            200
        )
        @$drawer = undefined



Vamonos.export { Widget: { BinaryTree } }
