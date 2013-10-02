class Queue

    @spec =
        varName:
            type: "String"
            description: "the name of variable that this widget represents"

    constructor: (args) ->

        # Queue passes most of its args to the underlying Array widget,
        # so set ignoreExtraArgs to true.
        Vamonos.handleArguments
            widgetObject    : this
            givenArgs       : args
            ignoreExtraArgs : true

        @arrayWidget = new Vamonos.Widget.Array(args)

    event: (event, options...) -> switch event
        when "setup"
            [viz] = options
            viz.registerVariable(@varName)
            @arrayWidget.event(event, options...)

        when "render"
            [frame, type] = options
            newFrame = Vamonos.clone(frame)
            newFrame[@varName] = frame[@varName]?.guts
            @arrayWidget.event("render", newFrame, type)

        else
            @arrayWidget.event(event, options...)


@Vamonos.export { Widget: { Queue } }
