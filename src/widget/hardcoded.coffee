#_require ../common.coffee

class Hardcoded
    constructor: (@vars) ->

    event: (event, options...) -> switch event
        when "setup"
            [stash, visualizer] = options
            for name, value of @vars
                stash[name] = value 
                stash._input.push name

Common.VamonosExport { Widget: { Hardcoded } }
