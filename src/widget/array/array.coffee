class Array

    constructor: (options) ->
        @$container = Vamonos.jqueryify(options.container)
        options.tableContainer = $("<table>", {class: "array"})
        @$container.append(options.tableContainer)
        @guts = new Vamonos.Widget.ArrayGuts(options)

    event: (args...) -> 
        @guts.event(args...)

Vamonos.export { Widget: { Array } }
