#_require ../common.coffee

class ControlSlider

    constructor: ({container, @showWhileSliding, frameLabelFirst}) ->
        @$container = Common.jqueryify(container)

        @$slider = $("<div>", {class: "controls-slider"})
        @$frameLabel = $("<div>", {class: "controls-frame-number", text: "- / -"})

        if frameLabelFirst
            @$container.append(@$frameLabel, @$slider)
        else
            @$container.append(@$slider, @$frameLabel)

        @$slider.slider({
            min:0, max:0, value:0,
            slide: (event,ui) => @slideEvent(event,ui)
            stop:  => 
                return unless @mode is "display"
                @visualizer.trigger("jumpFrame", @$slider.slider("option", "value") )
        })


    slideEvent: (event,ui) ->
        return unless @mode is "display"
        if @showWhileSliding
            @visualizer.trigger("jumpFrame", ui.value )
        else
            @writeLabel( ui.value )

    event: (event, options...) -> switch event
        when "setup"
            [stash, @visualizer] = options

        when "editStart"
            @$slider.slider("option", "min", 0)
            @$slider.addClass("controls-disabled")
            @$frameLabel.addClass("controls-disabled")
            @writeLabel("-", "-")
            @mode = "edit"

        when "displayStart"
            @$slider.removeClass("controls-disabled")
            @$frameLabel.removeClass("controls-disabled")
            @mode = "display"

        when "render"
            [frame, type] = options
            @$slider.slider("option", "max",   frame._numFrames)
            @$slider.slider("option", "value", frame._frameNumber)
            @writeLabel()
 

    writeLabel: (value, max) ->
        value ?= @$slider.slider("option", "value")
        max   ?= @$slider.slider("option", "max")
        @$slider.slider("option", "min", 1)
        @$frameLabel.html( "#{value} / #{max}" )
        

Common.VamonosExport { Widget: { ControlSlider } }
