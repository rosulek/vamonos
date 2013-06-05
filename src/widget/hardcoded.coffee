#_require ./widget.coffee
#_require ../common.coffee

class Hardcoded extends Widget

    constructor: (@obj) ->
        
    changeMode: (mode_str) ->
        return unless mode_str is 'input'
        @vars[name] = value for name, value of @obj

Common.VamonosExport { Widget: { Hardcoded } }
