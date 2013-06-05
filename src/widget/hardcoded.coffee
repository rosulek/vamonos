#_require ./widget.coffee
#_require ../common.coffee

class Hardcoded extends Widget

    constructor: (@obj) ->

    setup: (@stash) ->
        
    setMode: (mode_str) ->
        return unless mode_str is 'input'
        @stash[name] = value for name, value of @obj

    render: () ->

Common.VamonosExport { Widget: { Hardcoded } }
