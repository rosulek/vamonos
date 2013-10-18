class Array

    @description = 
        "The Array widget displays an array. It is a minimal wrapper " +
        "around the ArrayGuts widget."

    @dependencies = [ "Widget.ArrayGuts" ]
    
    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description: 
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."

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
