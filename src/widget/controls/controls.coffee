class Controls

    constructor: ({container, showWhileSliding, noRunStopButton, autoPlay}) ->
        @$container = Vamonos.jqueryify(container)
        @$inner     = $("<div>", {class: "controls-combined"});
        @$buttons   = $("<div>", {class: "controls-buttons"});

        @buttons = new Vamonos.Widget.ControlButtons({
            container: @$buttons, 
            noRunStopButton: noRunStopButton,
            autoPlay: autoPlay
        })

        @$container.append(@$inner)
        @$inner.append(@$buttons);

        @slider = new Vamonos.Widget.ControlSlider({
            container: @$inner,
            frameLabelFirst: yes,
            showWhileSliding: showWhileSliding
        })

    event: (event, options...) ->
        @buttons.event(event, options...)
        @slider.event(event, options...)

Vamonos.export { Widget: { Controls } }
