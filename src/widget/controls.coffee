#_require ../common.coffee
#_require ./controlslider.coffee
#_require ./controlbuttons.coffee

class Controls

    constructor: ({container, showWhileSliding, noRunStopButton, autoPlay}) ->
        @$container = Common.jqueryify(container)
        @$buttons    = $("<div>", {class: "controls-buttons"});

        @buttons = new Vamonos.Widget.ControlButtons({
            container: @$buttons, 
            noRunStopButton: noRunStopButton,
            autoPlay: autoPlay
        })

        @$container.append(@$buttons)

        @slider = new Vamonos.Widget.ControlSlider({
            container: @$container,
            frameLabelFirst: yes,
            showWhileSliding: showWhileSliding
        })

    event: (event, options...) ->
        @buttons.event(event, options...)
        @slider.event(event, options...)

Common.VamonosExport { Widget: { Controls } }
