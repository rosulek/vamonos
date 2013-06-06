#_require ../common.coffee


class ControlButtons

    PLAY  = "&#x25b6;"
    PAUSE = "&#x25ae;&#x25ae;"
    STOP  = "stop"
    GO    = "run"
    NEXT  = "&#x25ae;&#x25B6;"
    PREV  = "&#x25c0;&#x25ae;"

    constructor: ({container, noStopGoButton, @autoPlay}) ->
        @$container = Common.jqueryify(container)

        @$stopGoButton    = $("<button>", {class: "controls-button", html: GO})
        @$prevButton      = $("<button>", {class: "controls-button", html: PREV})
        @$nextButton      = $("<button>", {class: "controls-button", html: NEXT})
        @$playPauseButton = $("<button>", {class: "controls-button", html: PLAY})

        @playing = no
        @atLastFrame = no

        @$container.append(@$stopGoButton) unless noStopGoButton
        @$container.append(@$prevButton, @$nextButton, @$playPauseButton)

        @$nextButton.on("click", => @target.nextFrame())
        @$prevButton.on("click", => @target.prevFrame())
        @$stopGoButton.on("click", =>
            if @mode is "edit"
                @target.runAlgorithm()
            else if @mode is "display"
                @target.editMode()
        )
        @$playPauseButton.on("click", =>
            if @playing then @pausePlaying() else @startPlaying()
        )

    startPlaying: ->
        return if @playing or @atLastFrame
        @$playPauseButton.html(PAUSE)
        @playing = yes
        setTimeout( (=> @timedPlay()), 500)

    pausePlaying: ->
        return unless @playing
        @playing = no
        @$playPauseButton.html(PLAY)

    timedPlay: ->
        return unless @playing
        if @atLastFrame
            @pausePlaying()
        else
            @target.nextFrame()
            setTimeout( (=> @timedPlay()), 1000)
                    

    setup: (stash, @target) ->

    setMode: (mode_str) ->
        switch mode_str
            when "edit"
                @$stopGoButton.html(GO)
                @$prevButton.attr("disabled", "true");
                @$nextButton.attr("disabled", "true");
                @$playPauseButton.attr("disabled", "true");
                @$container.addClass("controls-disabled")
                @pausePlaying()

            when "display"
                @$stopGoButton.html(STOP)
                @$prevButton.removeAttr("disabled");
                @$nextButton.removeAttr("disabled");
                @$playPauseButton.removeAttr("disabled");
                @$container.removeClass("controls-disabled")

                @startPlaying() if @autoPlay

        @mode = mode_str

    render: (frame, type) ->
        @atLastFrame = (frame._frameNumber is frame._numFrames)

        if @atLastFrame
            @$nextButton.attr("disabled", "true")
            @$playPauseButton.attr("disabled", "true")
            @pausePlaying()
        else
            @$nextButton.removeAttr("disabled")
            @$playPauseButton.removeAttr("disabled")

        if frame._frameNumber is 1
            @$prevButton.attr("disabled", "true")
        else
            @$prevButton.removeAttr("disabled")
        

    clear: () ->

Common.VamonosExport { Widget: { ControlButtons } }
