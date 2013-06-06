#_require ./widget.coffee
#_require ../common.coffee

class ModeLine extends Widget

    constructor: ({container, @editModeText, @displayModeText}) ->
        @$container = Common.jqueryify(container)

    setup: ->
        
    setMode: (mode_str) -> switch mode_str
        when "edit"
            @$container.html(@editModeText)
        when "display"
            @$container.html(@displayModeText)
        
    render: ->

Common.VamonosExport { Widget: { ModeLine } }
