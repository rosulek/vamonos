class Queue

    @dependencies = [ "Vamonos.Widget.ArrayGuts" ]

    @spec =
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        showCellNumber:
            type: "Boolean"
            description: "whether to show numbers above queue elements"
            defaultValue: false

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject    : this
            givenArgs       : args
            ignoreExtraArgs : true

        args.showCellNumber = @showCellNumber

        @arrayWidget = new Vamonos.Widget.Array(args)

    event: (event, options...) -> switch event
        when "setup"
            [viz] = options
            viz.registerVariable(@varName)
            @arrayWidget.event(event, viz)

        when "render"
            [frame, type] = options
            newFrame = Vamonos.clone(frame)
            newFrame[@varName] = frame[@varName]?.guts
            @arrayWidget.event("render", newFrame, type)

        else
            @arrayWidget.event(event, options...)


@Vamonos.export { Widget: { Queue } }
