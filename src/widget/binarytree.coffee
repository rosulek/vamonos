class BinaryTree

    @xscalar = 60
    @yscalar = 40

    constructor: ({container, @varName}) ->
        @graphDisplay = new Vamonos.Widget.GraphDisplay
            container: container
            draggable: false
            vertexLabels: 
                inner: (n)->n.v

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
        when "render"
            [frame, type] = options
            @generatePositions(frame[@varName])
            @graphDisplay.draw(frame[@varName])

    generatePositions: (tree) ->
        tree.eachNodeInOrder (n) =>
            n.x = n.order * BinaryTree.xscalar
            n.y = n.depth * BinaryTree.yscalar

Vamonos.export { Widget: { BinaryTree } }
