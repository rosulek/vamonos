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
            vals = for attr in @attributes 
                if frame[@varName][attr]?
                    "#{attr}: #{Vamonos.rawToTxt(frame[@varName][attr])}"
                else
                    "#{attr}: -"
            newval = "{ #{vals.join(", ")} }"
        else
            newval = Vamonos.rawToTxt(frame[@varName])

        oldval = @$container.html()

        if newval isnt oldval and type in @showChanges
            @$container.addClass("changed")
            @$container.html(newval)
            dup = @$container.clone()
            @$container.replaceWith( dup )
            @$container = dup
        else
            @$container.html(newval)
            @$container.removeClass("changed")


Vamonos.export { Widget: { VarDisplay } }
