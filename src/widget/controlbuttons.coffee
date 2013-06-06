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

        @$nextButton.on("click", => @visualizer.trigger("nextFrame"))
        @$prevButton.on("click", => @visualizer.trigger("prevFrame"))
        @$stopGoButton.on("click", =>
            if @mode is "edit"
                @visualizer.trigger("runAlgorithm")
            else if @mode is "display"
                @visualizer.trigger("editMode")
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
            @visualizer.trigger("nextFrame")
            setTimeout( (=> @timedPlay()), 1000)
                    
    event: (event, options...) -> switch event
        when "setup"
            [stash, @visualizer] = options
        
        when "editStart"
            @$stopGoButton.html(GO)
            @$prevButton.attr("disabled", "true");
            @$nextButton.attr("disabled", "true");
            @$playPauseButton.attr("disabled", "true");
            @$container.addClass("controls-disabled")
            @pausePlaying()
            @mode = "edit"

        when "displayStart"
            @$stopGoButton.html(STOP)
            @$prevButton.removeAttr("disabled");
            @$nextButton.removeAttr("disabled");
            @$playPauseButton.removeAttr("disabled");
            @$container.removeClass("controls-disabled")
            @mode = "display"
            @startPlaying() if @autoPlay

        when "render"
            [frame, type] = options

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
        

Common.VamonosExport { Widget: { ControlButtons } }
