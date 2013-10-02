class Array
    
    @spec =
        container:
            type: "String"
            description: "id of the div within which this widget should draw itself"

    constructor: (options) ->
        
        Vamonos.handleArguments
            widgetObject    : this
            givenArgs       : options
            ignoreExtraArgs : true

        @$container = Vamonos.jqueryify(options.container)
        delete options.container
        options.tableContainer = $("<table>", {class: "array"})
        @$container.append(options.tableContainer)
        @guts = new Vamonos.Widget.ArrayGuts(options)

    event: (args...) -> 
        @guts.event(args...)

@Vamonos.export { Widget: { Array } }
