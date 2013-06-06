#_require ../common.coffee

# TODO: @showWhileSliding not implemented

class ControlSlider

    constructor: ({container, @showWhileSliding, frameLabelFirst}) ->
        @$container = Common.jqueryify(container)

        @$slider = $("<div>", {class: "controls-slider"})
        @$frameLabel = $("<div>", {class: "controls-frame-number"})

        if frameLabelFirst
            @$container.append(@$frameLabel, @$slider)
        else
            @$container.append(@$slider, @$frameLabel)

        @$slider.slider({
            min:0, max:0, value:0,
            slide: (event,ui) => @slideEvent(event,ui)
            stop:  => @visualizer.jumpFrame( @$slider.slider("option", "value") )
        })


    slideEvent: (event,ui) ->
        if @showWhileSliding
            @visualizer.jumpFrame( ui.value )
        else
            @writeLabel( ui.value )

    setup: (stash, @visualizer) ->
        

    writeLabel: (value, max) ->
        value ?= @$slider.slider("option", "value")
        max   ?= @$slider.slider("option", "max")
        @$slider.slider("option", "min", 1)
        @$frameLabel.html( "#{value} / #{max}" )
        

    setMode: (mode) -> switch mode
        when "edit"
            @$slider.slider("option", "min", 0)
            @$container.addClass("controls-disabled")
            @writeLabel("-", "-")
        when "display"
            @$container.removeClass("controls-disabled")


    render: (frame, type) ->
        @$slider.slider("option", "max",   frame._numFrames)
        @$slider.slider("option", "value", frame._frameNumber)
        @writeLabel()

    clear: () ->

Common.VamonosExport { Widget: { ControlSlider } }
