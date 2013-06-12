class Hardcoded

    constructor: ({@vars, @breakpoints}) ->
        @vars ?= {}

    event: (event, options...) -> switch event
        when "setup"
            [@stash, visualizer] = options
            for name, value of @vars
                @stash[name] = value 
                @stash._inputVars.push name

            if @breakpoints
                Vamonos.insertSet(p, @stash._breakpoints) for p in @breakpoints

        when "editStop"
            # put things in stash again
            for name, value of @vars
                @stash[name] = value 

Vamonos.export { Widget: { Hardcoded } }
