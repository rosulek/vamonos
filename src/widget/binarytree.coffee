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
                id   = @$selectedNode.attr("id")
                elem = @theTree.asGraph().vertex(id)
                $("<span class='label'>node: val=#{elem.val}&nbsp;&nbsp;</span>")
                    .appendTo(@$drawer)

                if elem.right?
                    $("<button>", {text: "rotate left"})
                        .on "click.vamonos-graph", (e) =>
                            @theTree.rotateLeft(id)
                            @deselect()
                            @draw(@theTree)
                        .appendTo(@$drawer)

                if elem.left?
                    $("<button>", {text: "rotate right"})
                        .on "click.vamonos-graph", (e) =>
                            @theTree.rotateRight(id)
                            @deselect()
                            @draw(@theTree)
                        .appendTo(@$drawer)

        @$drawer.fadeIn("fast") unless @$drawer.is(":visible")

    closeDrawer: () ->
        return unless @$drawer?
        @$drawer.fadeOut("fast")
        @$drawer.hide()


Vamonos.export { Widget: { BinaryTree } }
