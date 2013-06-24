class Queue

    constructor: (options) ->
        @varName     = options.varName
        @$container  = Vamonos.jqueryify(options.container)
        @arrayWidget = new Vamonos.Widget.Array(options)

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


Vamonos.export { Widget: { Queue } }
