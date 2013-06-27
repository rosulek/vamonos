class LiveAdjacencyMatrix

    constructor: (args = {}) ->
        @varName = args.varName
        @matrixWidget = new Vamonos.Widget.Matrix(args)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options



Vamonos.export { Widget: { LiveAdjacencyMatrix } }
