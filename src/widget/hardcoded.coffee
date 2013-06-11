class Hardcoded

    constructor: ({@vars, @breakpoints}) ->

    event: (event, options...) -> switch event
        when "setup"
            [stash, visualizer] = options
            for name, value of @vars
                stash[name] = value 
                stash._inputVars.push name

            if @breakpoints
                Vamonos.insertSet(p, @stash._breakpoints) for p in @breakpoints

Vamonos.export { Widget: { Hardcoded } }
