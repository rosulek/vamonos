class ModeLine

    @description = "Display a string that changes depending upon which mode " +
        "the visualizer is in."

    @spec =
        container:
            type: "String"
            description: "id of the div within which this widget should draw itself"
        editModeText:
            type: "String"
            description: "message ModeLine displays in editMode"
        displayModeText:
            type: "String"
            description: "message ModeLine displays in displayMode"

    constructor: (args) ->
        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @$container = Vamonos.jqueryify(@container)

    event: (event, options...) -> switch event
        when "editStart"
            @$container.html(@editModeText)
        when "displayStart"
            @$container.html(@displayModeText)
        
@Vamonos.export { Widget: { ModeLine } }
