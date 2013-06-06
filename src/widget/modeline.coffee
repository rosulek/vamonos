#_require ../common.coffee

class ModeLine extends GenericWidget

    constructor: ({container, @editModeText, @displayModeText}) ->
        @$container = Common.jqueryify(container)

    setMode: (mode_str) -> switch mode_str
        when "edit"
            @$container.html(@editModeText)
        when "display"
            @$container.html(@displayModeText)
        
Common.VamonosExport { Widget: { ModeLine } }
