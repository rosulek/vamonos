class VarName

    constructor: ({container, @varName, @inputVar, @displayName, @watchable, @watching}) ->
        @$container   = Vamonos.jqueryify(container)
        @displayName ?= @varName
        @inputVar    ?= false
        @watchable   ?= true
        @watching    ?= false

        @watching   &&= @watchable

        if @inputVar
            @$editIndicator = $("<span>", {class: "var-editable", html: "&#x270e;"}).appendTo(@$container)

        if @watchable
            @$watchToggle   = $("<span>", {class: "var-watch", html: "&#x2605;"}).appendTo(@$container)
    
        @$varName           = $("<span>", {class: "var-name", html: @varName + ":"}).appendTo(@$container)


    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.registerVariable(@varName) 
            @viz.setWatchVar(@varName)                    if @watching

        when "editStart"
            @setWatchStatus()
            @$watchToggle.on("click", => @toggleWatch())  if @watchable
            @$editIndicator.addClass("var-editing")       if @inputVar

        when "editStop"
            @$watchToggle.off("click")                    if @watchable
            @$editIndicator.removeClass("var-editing")    if @inputVar

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
        
Vamonos.export { Widget: { VarName }}
