class Queue

    constructor: (options) ->
        @varName = options.varName
        @arrayWidget = new Vamonos.Widget.Array(options)

    event: (event, options...) -> switch event
        when "setup"
            [stash, viz] = options
            stash[@varName] ?= undefined

        when "render"
            [frame, viz] = options
            newFrame = Vamonos.clone(frame)
            newFrame[@varName] = frame[@varName]?.guts
            @arrayWidget.event("render", newFrame, viz)
        else
            @arrayWidget.event(event, options...)

Vamonos.export { Widget: { Queue } }
