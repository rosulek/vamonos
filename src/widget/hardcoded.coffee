#_require ../common.coffee

class Hardcoded
    constructor: ({@vars, @breakpoints}) ->

    event: (event, options...) -> switch event
        when "setup"
            [stash, visualizer] = options
            for name, value of @vars
                stash[name] = value 
                stash._inputVars.push name
            for p in @breakpoints 
                unless p in @stash._breakpoints
                    @stash._breakpoints.push p 

Common.VamonosExport { Widget: { Hardcoded } }
