class VarDisplay

    @description = "VarDisplay allows viewing of the contents of variables, and " +
        "if they are objects, their attributes."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself"
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        attributes:
            type: "Array"
            defaultValue: undefined
            description:
                "if the variable is an object, an array of strings representing " +
                "which object attributes to show"
        showChanges:
            type: ["String", "Array"]
            defaultValue: "next"
            description:
                "type of frame shifts to highlight changes at, can be multiple " +
                "types with an array of strings"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @container  = Vamonos.jqueryify(@container)
        @container.addClass("var-display")
        @showChanges = Vamonos.arrayify(@showChanges)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(@varName)

        when "editStart"
            @container.empty()

        when "render"
            @showVars(options...)
            @adjustHeight()

        when "displayStop"
            @resetHeight()

    showVars: (frame, type) ->
        if not frame[@varName]?
            newstr = "-"
        else if @attributes?
            if type in @showChanges
                newstr = Vamonos.formatObject(frame[@varName], @attributes, @oldval)
            else
                newstr = Vamonos.formatObject(frame[@varName], @attributes)
            @dontShowChange = true # formatObject will add changed class for attributes
        else
            newstr = Vamonos.rawToTxt(frame[@varName])

        oldstr = @container.html()

        if newstr isnt oldstr
            if type in @showChanges
                if @dontShowChange
                    @container.removeClass("changed")
                else
                    @container.addClass("changed")
                @container.html(newstr)
                dup = @container.clone()
                @container.replaceWith( dup )
                @container = dup
            else
                @container.html(newstr)
                @container.removeClass("changed")
                @container.children().removeClass("changed")
        else
            @container.removeClass("changed")
            @container.children().removeClass("changed")

        @dontShowChange = undefined
        @oldval = frame[@varName] ? { dummyObj: true }

    # maintains consistent size
    adjustHeight: () ->
        if @container.height() > (@maxHeight ? 0)
            @maxHeight = @container.height()
        else
            @container.css("min-height",@maxHeight)

    resetHeight: () ->
        @maxHeight = 0
        @container.css("min-height","")

@Vamonos.export { Widget: { VarDisplay } }
