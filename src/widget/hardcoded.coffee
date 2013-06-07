#_require ../common.coffee

class Hardcoded
    constructor: (@vars) ->

    event: (event, options...) -> switch event
        when "setup"
            [stash, visualizer] = options
            stash[name] = value for name, value of @vars

Common.VamonosExport { Widget: { Hardcoded } }
