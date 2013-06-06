#_require ../common.coffee

class ModeLine

    constructor: ({container, @editModeText, @displayModeText}) ->
        @$container = Common.jqueryify(container)

    event: (event, options...) -> switch event
        when "editStart"
            @$container.html(@editModeText)
        when "displayStart"
            @$container.html(@displayModeText)
        

Common.VamonosExport { Widget: { ModeLine } }
