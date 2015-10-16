class Controls

    @description = "The Controls widget controls the Visualizer - switching " +
        "modes and frames."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        autoPlay:
            type: "Boolean"
            defaultValue: false
            description: "whether the visualization should skip edit mode"
        fullscreen:
            type: "Boolean"
            defaultValue: false
            description: "whether the visualization is in fullscreen mode"
        buttons:
            type: "Boolean"
            defaultValue: true
            description: "whether to show the buttons"
        slider:
            type: "Boolean"
            defaultValue: true
            description: "whether to show the slider"
        frameNumber:
            type: "Boolean"
            defaultValue: true
            description: "whether to show the frame number"
        showWhileSliding:
            type: "Boolean"
            defaultValue: true
            description: "whether to update visualization when sliding"
        keyboardShortcuts:
            type: "Boolean"
            defaultValue: true
            description: "whether to handle keyboard shortcuts"
        runStopButton:
            type: "Boolean"
            defaultValue: true
            description: "whether to show the run and stop button"
        inputVars:
            type: "Object"
            defaultValue: undefined
            description: "a mapping from var names to default values"


    constructor: (arg) ->

        unless typeof(arg) is "object"
            arg = {container: arg}

        Vamonos.handleArguments
            widgetObject: this
            givenArgs: arg

        @$container  = Vamonos.jqueryify(@container)
        @$inner      = $("<div>", {class: "controls controls-disabled"})

        @$slider     = $("<div>")
        @$buttons    = $("<div>")
        @$frameLabel = $("<div>")

        if @frameNumber
            @frameLabel = new ControlFrameLabel({ container: @$frameLabel })

        if @slider
            @sliderObj = new ControlSlider({
                container: @$slider,
                showWhileSliding: @showWhileSliding,
                labelWidget: @frameLabel
            })

        if @buttons
            @buttonsObj = new ControlButtons({
                container: @$buttons,
                runStopButton: @runStopButton,
                autoPlay: @autoPlay,
                keyboardShortcuts: @keyboardShortcuts,
                inputVars: @inputVars,
            })

        @$container.append(@$inner)

        @$inner.append(@$buttons)     if @buttons
        @$inner.append(@$frameLabel)  if @frameNumber
        @$inner.append(@$slider)      if @slider

        @$inner.addClass("controls-full") if @buttons and @slider


        switch @fullscreen
            when "auto"
                if (!window.screenTop && !window.screenY)
                    @$container.addClass("controls-fullscreen")
                $(window).on "resize", =>
                    if (!window.screenTop && !window.screenY)
                        @$inner.addClass("controls-fullscreen")
                    else
                        @$inner.removeClass("controls-fullscreen")
            when true
                @$inner.addClass("controls-fullscreen")

    event: (event, options...) ->
        @buttonsObj?.event(event, options...)
        @sliderObj?.event(event, options...)
        @frameLabel?.event(event, options...)

        switch event
            when "setup"
                [viz] = options
            when "displayStart"
                @$inner.removeClass("controls-disabled")
            when "displayStop"
                @$inner.addClass("controls-disabled")

@Vamonos.export { Widget: { Controls } }

#===============================================================================
#===============================================================================
#===============================================================================

class ControlFrameLabel

    constructor: ({container}) ->
        @$frameLabel = Vamonos.jqueryify(container)
        @$frameLabel.addClass("controls-frame-number")
        @writeLabel(null)

    event: (event, options...) -> switch event
        when "editStart", "displayStop"
            @writeLabel(null)
        when "displayStart"
            @writeLabel(0,0)

        when "render"
            [frame, type] = options
            @writeLabel(frame._frameNumber, frame._numFrames)

    writeLabel: (value, max) ->
        if value?
            @$frameLabel.html( "#{value} / #{max}" )
        else
            @$frameLabel.html( "stopped" )



#===============================================================================
#===============================================================================
#===============================================================================



class ControlButtons

    PLAY  = "\u25b6"
    PAUSE = "\u25ae\u25ae"
    STOP  = "stop"
    RUN   = "run"
    NEXT  = "\u25ae\u25B6"
    PREV  = "\u25c0\u25ae"

    constructor: ({container, runStopButton, @autoPlay, @keyboardShortcuts, @inputVars}) ->
        @$container         = Vamonos.jqueryify(container)


        @$runStopButton   = $("<button>", {class: "controls-button", html: RUN})
        @$prevButton      = $("<button>", {class: "controls-button", html: PREV})
        @$nextButton      = $("<button>", {class: "controls-button", html: NEXT})
        @$playPauseButton = $("<button>", {class: "controls-button", html: PLAY})

        @playInterval = null
        @atLastFrame  = no

        @$container.addClass("controls-buttons")
        @$container.append(@$runStopButton) if runStopButton
        @$container.append(@$prevButton, @$nextButton, @$playPauseButton)

        @$nextButton.on("click", =>
            @visualizer.trigger("nextFrame")
            @stopPlaying()
        )
        @$prevButton.on("click", =>
            @visualizer.trigger("prevFrame")
            @stopPlaying()
        )
        @$runStopButton.on("click", =>
            if @mode is "edit"
                @visualizer.trigger("runAlgorithm")
            else if @mode is "display"
                @visualizer.trigger("editMode")
        )
        @$playPauseButton.on("click", =>
            if @playInterval? then @stopPlaying() else @startPlaying()
        )

    setupInput: () ->
        return unless @inputVars?
        throw "controller input: no visualizer" unless @visualizer
        for varName, defaultValue of @inputVars
            @visualizer.registerVariable(varName)
            @visualizer.setVariable(varName, defaultValue) if defaultValue?
            @$inputDivs ?= {}
            @$inputDivs[varName] = $("<div>", {class: "controls-input"})
            $input = $("<span>", {text: "input: " + varName + " = "})
            $val = $("<span>", {class: "val", html: if defaultValue? then Vamonos.rawToTxt(defaultValue) else "???" })
            @$inputDivs[varName].append($input, $val)
            @$container.prepend(@$inputDivs[varName])

    acceptInput: () ->
        for varName, $div of @$inputDivs
            do (varName = varName, $div = $div, ths = this) ->
                $div.on(
                    "click",
                    () =>
                        Vamonos.editableValue($div.children("span.val"),
                            ((e)-> Vamonos.txtToRaw(e.text()))
                            (newval) =>
                                if newval?
                                    v = Vamonos.txtToRaw(newval)
                                    ths.inputVars[varName] = v
                                    ths.visualizer.setVariable(varName, v)
                                return Vamonos.rawToTxt(ths.inputVars[varName])
                        )
                )

    rejectInput: () ->
        $div.off("click") for varName, $div of @$inputDivs


    startPlaying: ->
        return if @playInterval? or @atLastFrame
        @$playPauseButton.html(PAUSE)
        @$playPauseButton.prop("title", "Pause automatic playback of algorithm [shortcut: space bar]")
        @playInterval = setInterval(
            (=> @visualizer.trigger("nextFrame") unless @visualizer.frozen),
            1000)

    stopPlaying: ->
        return unless @playInterval?
        clearTimeout(@playInterval)
        @playInterval = null
        @$playPauseButton.html(PLAY)
        @$playPauseButton.prop("title", "Start automatic playback of algorithm [shortcut: space bar]")

    event: (event, options...) -> switch event
        when "setup"
            [@visualizer] = options
            $("body").on("keydown.controlbuttons", (e) => @keyDownHandler(e) ) if @keyboardShortcuts
            @setupInput() if @inputVars?

        when "editStart"
            @$runStopButton.html(RUN)
            @$runStopButton.prop("title", "Execute the algorithm with current inputs/breakpoints/etc [shortcut: enter]")

            @prevButtonActive(false)
            @nextButtonActive(false)
            @playPauseButtonActive(false)

            @$container.addClass("controls-disabled")
            @mode = "edit"
            @acceptInput() if @inputVars?

        when "editStop"
            @rejectInput() if @inputVars?

        # treat displayStart as being at 0 frames out of 0
        when "displayStart"
            @$runStopButton.html(STOP)
            @$runStopButton.prop("title", "Stop the algorithm to edit inputs/breakpoints/etc [shortcut: escape]")

            @$container.removeClass("controls-disabled")
            @mode = "display"
            @startPlaying() if @autoPlay

        when "displayStop"
            @stopPlaying()
            @mode = null

        when "render"
            [frame, type] = options

            @atLastFrame = (frame._frameNumber is frame._numFrames)

            @nextButtonActive(!@atLastFrame)
            @playPauseButtonActive(!@atLastFrame)
            @prevButtonActive( frame._frameNumber isnt 1 )


    keyDownHandler: (event) ->
        return true if @visualizer.frozen

        if @mode is "display"
            switch event.keyCode
                when 37 # left arrow
                    @$prevButton.trigger("click") unless @$prevButton.attr("disabled")
                    return false

                when 39 # right arrow
                    @$nextButton.trigger("click") unless @$nextButton.attr("disabled")
                    return false

                when 32 # space
                    @$playPauseButton.trigger("click") unless @$playPauseButton.attr("disabled")
                    return false

                when 27 # esc
                    @$runStopButton.trigger("click")
                    return false

        else
            switch event.keyCode
                when 13 # enter
                    @$runStopButton.trigger("click")
                    return false

        return true

    playPauseButtonActive: (active) ->
        if active
            @$playPauseButton.removeAttr("disabled");
            @$playPauseButton.prop("title", "Start automatic playback of algorithm [shortcut: space bar]")
        else
            @$playPauseButton.attr("disabled", "true");
            @$playPauseButton.prop("title", "")

    nextButtonActive: (active) ->
        if active
            @$nextButton.removeAttr("disabled");
            @$nextButton.prop("title", "Step forwards through the algorithm's execution [shortcut: right arrow]")
        else
            @$nextButton.attr("disabled", "true");
            @$nextButton.prop("title", "")

    prevButtonActive: (active) ->
        if active
            @$prevButton.removeAttr("disabled");
            @$prevButton.prop("title", "Step backwards through the algorithm's execution [shortcut: left arrow]")
        else
            @$prevButton.attr("disabled", "true");
            @$prevButton.prop("title", "")




#===============================================================================
#===============================================================================
#===============================================================================


class ControlSlider

    constructor: ({container, @showWhileSliding, @labelWidget}) ->
        @$slider           = Vamonos.jqueryify(container)

        @$slider.addClass("controls-slider")
        @$slider.attr("title", "Slide to jump forward/backward through algorithm's execution")

        @$slider.slider({
            min:0, max:0, value:0,
            slide: (event,ui) => @slideEvent(event,ui)
            stop:  => @stopEvent()
        })

    stopEvent: ->
        if @mode is "display"
            @visualizer.trigger("jumpFrame", @$slider.slider("option", "value") )

    slideEvent: (event,ui) ->
        return unless @mode is "display"

        if @showWhileSliding
            @visualizer.trigger("jumpFrame", ui.value )
        else if @labelWidget?
            @labelWidget.writeLabel( ui.value, @$slider.slider("option", "max") )

    event: (event, options...) -> switch event
        when "setup"
            [@visualizer] = options

        when "editStart"
            @mode = "edit"

        when "displayStart"
            @mode = "display"
            @$slider.slider("option", "min",   0)
            @$slider.slider("option", "max",   0)
            @$slider.slider("option", "value", 0)

        when "render"
            [frame, type] = options
            @$slider.slider("option", "min",   1)
            @$slider.slider("option", "max",   frame._numFrames)
            @$slider.slider("option", "value", frame._frameNumber)
