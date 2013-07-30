class VarDisplay
    
    constructor: ({container, watch, showChanges, @varName, @attributes}) ->
        @$container  = Vamonos.jqueryify(container)
        @showChanges = Vamonos.arrayify(showChanges ? "next")

        @$container.addClass("var-display")

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


Vamonos.export { Widget: { VarDisplay } }
