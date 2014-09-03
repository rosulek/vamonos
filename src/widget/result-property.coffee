class ResultProperty

    @description = "The `ResultProperty` allows you to check upon entering DisplayMode that " +
        "a variable has some arbitrary property, and set the html of a container accordingly."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        varName:
            type: "String"
            description: "the name of variable that will be tested"
        success:
            type: "String"
            description: "what `container` should be set to when `varName` is true"
        failure:
            type: "String"
            description: "what `container` should be set to when `varName` is false"
        test:
            type: "Function"
            description: "a function that tests for a property on `varName`"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @container  = Vamonos.jqueryify(@container)

    event: (event, options...) -> switch event
        when 'setup'
            [@viz] = options
            @viz.registerVariable(@varName)
        when 'displayStart'
            view = @viz.frames[..].pop()
            console.log view
            if @test(view[@varName])
                @container.html(@success)
            else
                @container.html(@failure)


@Vamonos.export { Widget: { ResultProperty } }
