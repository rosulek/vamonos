class VarDisplay

    @spec = 
        container: 
            type: "String"
            description: "id of the div within which this widget should draw itself"
        varName:
            type: "String"
            description: "the name of variable that this widget represents"
        attributes:
            type: "Array"
            defaultValue: undefined
            description: 
                "if the variable is an object, an array of which attributes to display"
        showChanges:
            type: ["String", "Array"]
            defaultValue: "next"
            description: 
                "type of frame shifts to highlight changes at, can be multiple
                types with an array of strings"
    
    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @$container  = Vamonos.jqueryify(@container)
        @$container.addClass("var-display")
        @showChanges = Vamonos.arrayify(@showChanges)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options

            @viz.registerVariable(@varName)
        
        when "editStart"
            @$container.empty()

        when "render"
            @showVars(options...)

    parseVarName: (str) ->
        str.match(/^\*?([\w:]+)/)?[1]

    parseAttributes: (str) ->
        str.match(/^\*?[\w:]+\[([\w,]+)\]/)?[1].split(/\s*,\s*/)

    showVars: (frame, type) ->
        if not frame[@varName]?
            newval = "-" 
        else if @attributes?
            newval = Vamonos.formatObject(frame[@varName], @attributes)
            @dontShowChange = true
        else
            newval = Vamonos.rawToTxt(frame[@varName])

        oldval = @$container.html()

        if newval isnt oldval and type in @showChanges
            @$container.addClass("changed") unless @dontShowChange
            @$container.html(newval)
            dup = @$container.clone()
            @$container.replaceWith( dup )
            @$container = dup
        else
            @$container.html(newval)
            @$container.removeClass("changed")

        @dontShowChange = undefined


@Vamonos.export { Widget: { VarDisplay } }
