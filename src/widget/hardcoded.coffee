class Hardcoded

    constructor: (@args) ->
        @args ?= {}

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            for name, value of @args
                if name is "breakpoints"
                    @setBreakpoints(value)
                else
                    @viz.setVariable(name, value, true)

        when "editStop"
            # put things in stash again
            for name, value of @args
                @viz.setVariable(name, value, true)

    setBreakpoints: (breakpoints) ->
        if breakpoints.constructor.name is 'Array'
            @viz.setBreakpoint(n, "main") for n in breakpoints
        else 
            for context, points of breakpoints
                @viz.setBreakpoint(n, context.proc) for n in points

Vamonos.export { Widget: { Hardcoded } }
