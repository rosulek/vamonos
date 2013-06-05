#_require ./widget.coffee
#_require ../common.coffee

class Controls extends Widget

    constructor: ({container, noStopButton, noSlider, noFrameNumber, @showWhileSliding}) ->
        @$container = Common.jqueryify(container)

        @$stopButton = $("<button>", {html: "&#x25A0;"})
        @$prevButton = $("<button>", {html: "&#x25C0;"})
        @$nextButton = $("<button>", {html: "&#x25B6;"})
        @$slider     = $("<div>", {class: "controls-slider"})
        @$frameLabel = $("<span>", {class: "controls-frame-number"})

        @$container.append(@$stopButton)                unless noStopButton
        @$container.append(@$prevButton, @$nextButton)
        @$container.append(@$slider)                    unless noSlider
        @$container.append(@$frameLabel)                unless noFrameNumber

        @$slider.slider({
            min:1, max:1, value:0,
            slide: (event,ui) => @slideEvent(event,ui)
            stop:  => @target.jumpFrame( @$slider.slider("option", "value") )
        })

        @$stopButton.on("click", => @target.deactivate() )
        @$nextButton.on("click", =>
            if @mode is "edit"
                @target.generate()
            else if @mode is "display"
                @target.nextFrame()
        )
            
        @$prevButton.on("click", => @target.prevFrame())

    slideEvent: (event,ui) ->
        if @showWhileSliding
            @target.jumpFrame( ui.value )
        else
            @writeLabel( ui.value )

    setup: (@stash, @target) ->
        

    writeLabel: (value) ->
        value ?= @$slider.slider("option", "value")
        max    = @$slider.slider("option", "max")
        @$frameLabel.html( "#{value} / #{max}" )
        

    setMode: (mode_str) ->
        switch mode_str
            when "edit"
                @$stopButton.attr("disabled", "true");
                @$prevButton.attr("disabled", "true");
                @$container.addClass("controls-disabled")

            when "display"
                @$stopButton.removeAttr("disabled");
                @$prevButton.removeAttr("disabled");
                @$container.removeClass("controls-disabled")

        @mode = mode_str

    render: (frame, type) ->
        @$slider.slider("option", "max",   frame._numFrames)
        @$slider.slider("option", "value", frame._frameNumber)
        @writeLabel()

    clear: () ->

Common.VamonosExport { Widget: { Controls } }
