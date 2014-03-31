class Array

    @description =
        "The Array widget displays an array. It is a minimal wrapper " +
        "around the ArrayGuts widget."

    @dependencies = [ "Vamonos.Widget.ArrayGuts" ]

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
        options.container = $("<table>", {class: "array"})
        @$container.append(options.container)
        @guts = new Vamonos.Widget.ArrayGuts(options)

    event: (event, options...) ->
        @guts.event(arguments...)
        if event is 'setup'
            [viz] = options

@Vamonos.export { Widget: { Array } }
