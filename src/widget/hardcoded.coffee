class Hardcoded

    constructor: (@args) ->
        @args ?= {}

    event: (event, options...) -> switch event
        when "setup"
            [@stash, visualizer] = options
            for name, value of @args
                if name is "breakpoints"
                    @setBreakpoints(value)
                else
                    @stash[name] = value 
                    @stash._inputVars.push name

        when "editStop"
            # put things in stash again
            for name, value of @vars
                @stash[name] = value 

    setBreakpoints: (breakpoints) ->
        Vamonos.insertSet(b, @stash._breakpoints) for b in breakpoints

Vamonos.export { Widget: { Hardcoded } }
