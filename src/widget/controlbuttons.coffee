class ControlButtons

    PLAY  = "\u25b6"
    PAUSE = "\u25ae\u25ae"
    STOP  = "stop"
    RUN   = "run"
    NEXT  = "\u25ae\u25B6"
    PREV  = "\u25c0\u25ae"

    constructor: ({container, noRunStopButton, @autoPlay, @keyboardShortcuts}) ->
        @$container = Vamonos.jqueryify(container)
        @keyboardShortcuts ?= true

        @$runStopButton   = $("<button>", {class: "controls-button", html: RUN})
        @$prevButton      = $("<button>", {class: "controls-button", html: PREV})
        @$nextButton      = $("<button>", {class: "controls-button", html: NEXT})
        @$playPauseButton = $("<button>", {class: "controls-button", html: PLAY})

        @playInterval = null
        @atLastFrame  = no

        @$container.append(@$runStopButton) unless noRunStopButton
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
        
        when "editStart"
            @$runStopButton.html(RUN)
            @$runStopButton.prop("title", "Execute the algorithm with current inputs/breakpoints/etc [shortcut: enter]")

            @prevButtonActive(false)
            @nextButtonActive(false)
            @playPauseButtonActive(false)

            @$container.addClass("controls-disabled")
            @mode = "edit"

        when "displayStart"
            @$runStopButton.html(STOP)
            @$runStopButton.prop("title", "Stop the algorithm to edit inputs/breakpoints/etc [shortcut: escape]")

            @prevButtonActive(true)
            @nextButtonActive(true)
            @playPauseButtonActive(true)

            @$container.removeClass("controls-disabled")
            @mode = "display"
            @startPlaying() if @autoPlay

        when "displayStop"
            @stopPlaying()

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


Vamonos.export { Widget: { ControlButtons } }
