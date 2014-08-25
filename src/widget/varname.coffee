class VarName

    @description = "VarName shows the variable name and provides " +
        "a buton to set the variable as a watchVar, and visual feedback for " +
        "editable variables in editMode."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        displayName:
            type: "String"
            description:
                "alternate varname to display - defaults to `varName`. " +
                "subscript can be displayed as everything following an underscore."
            defaultValue: undefined
            example: "displayName: \"G_f\""
        inputVar:
            type: "Boolean"
            description: "whether to accept input for this variable in edit mode"
            defaultValue: false
        watchable:
            type: "Boolean"
            description: "whether the variable can be set as a watchVar"
            defaultValue: true
        watching:
            type: "Boolean"
            description: "whether the variable starts off set as a watchVar"
            defaultValue: false

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @displayName ?= @varName
        @displayName = Vamonos.resolveSubscript(@displayName)

        @$container = Vamonos.jqueryify(@container)
        @watching &&= @watchable

        if @inputVar
            @$editIndicator = $("<span>", {class: "var-editable", html: "&#x270e;"}).appendTo(@$container)

        if @watchable
            @$watchToggle   = $("<span>", {class: "var-watch", html: "&#x2605;"}).appendTo(@$container)

        @$varName           = $("<span>", {class: "var-name", html: @displayName + ":"}).appendTo(@$container)


    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(@varName)
            @viz.setWatchVar(@varName) if @watching

        when "editStart"
            @setWatchStatus()
            if @watchable
                @$watchToggle.on("mousedown", => @toggleWatch())
                @$watchToggle.prop("title", "Click to toggle breaking when this variable changes")

            if @inputVar
                @$editIndicator.addClass("var-editing")
                @$editIndicator.prop("title", "Now in edit mode, you can change the contents of this variable")

        when "editStop"
            if @watchable
                @$watchToggle.off("mousedown")
                @$watchToggle.prop("title", "")

            if @inputVar
                @$editIndicator.removeClass("var-editing")
                @$editIndicator.prop("title", "")

        when "displayStart"
            @setWatchStatus()

        when "displayStop"
            @$watchToggle.removeClass("var-watch-active") if @watchable

        when "render"
            [frame] = options
            return unless @watchable
            if frame._snapshotReasons.watchVarsChanged? and @varName in frame._snapshotReasons.watchVarsChanged
                @$watchToggle.addClass("var-watch-active")
            else
                @$watchToggle.removeClass("var-watch-active")

    setWatchStatus: ->
        return unless @watchable
        if @viz.isWatchVar(@varName)
            @$watchToggle.addClass("var-watching")
            @watching = true
        else
            @$watchToggle.removeClass("var-watching")
            @watching = false

    toggleWatch: ->
        return unless @watchable
        if @watching
            @viz.removeWatchVar(@varName)
        else
            @viz.setWatchVar(@varName)
        @setWatchStatus()
        return false

@Vamonos.export { Widget: { VarName }}
