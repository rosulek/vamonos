class BinaryTree

    @xscalar = 60
    @yscalar = 40

    constructor: ({container, @varName}) ->
        @graphDisplay = new Vamonos.Widget.GraphDisplay
            container: container
            vertexLabels: {inner: (n)->n.val}
            draggable: false
            highlightChanges: false
        @graphDrawn = false

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
        when "render"
            [frame, type] = options
            @generatePositions(frame[@varName])
            graph = frame[@varName].asGraph()
            @graphDisplay.fitGraph(graph, @graphDrawn)
            @graphDisplay.draw(graph, @graphDrawn)
            @graphDrawn = true

    generatePositions: (tree) ->
        tree.eachNodeInOrder (n) =>
            n.x = n.order * BinaryTree.xscalar + @graphDisplay.containerMargin
            n.y = n.depth * BinaryTree.yscalar + @graphDisplay.containerMargin

Vamonos.export { Widget: { BinaryTree } }
