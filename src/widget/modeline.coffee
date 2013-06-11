class ModeLine

    constructor: ({container, @editModeText, @displayModeText}) ->
        @$container = Vamonos.jqueryify(container)

    event: (event, options...) -> switch event
        when "editStart"
            @$container.html(@editModeText)
        when "displayStart"
            @$container.html(@displayModeText)
        
Vamonos.export { Widget: { ModeLine } }
