class Controls

    constructor: ({container, showWhileSliding, runStopButton, autoPlay, keyboardShortcuts, fullscreen}) ->
        @$container = Vamonos.jqueryify(container)
        @$inner     = $("<div>")
        @$buttons   = $("<div>", {class: "controls-buttons"});

        @$inner.addClass( if fullscreen then "controls-fullscreen" else "controls-combined" )

        @buttons = new Vamonos.Widget.ControlButtons({
            container: @$buttons, 
            runStopButton: runStopButton,
            autoPlay: autoPlay,
            keyboardShortcuts: keyboardShortcuts
        })

        @$container.append(@$inner)
        @$inner.append(@$buttons);

        @slider = new Vamonos.Widget.ControlSlider({
            container: @$inner,
            frameLabelFirst: yes,
            showWhileSliding: showWhileSliding,
        })

    event: (event, options...) ->
        @buttons.event(event, options...)
        @slider.event(event, options...)

Vamonos.export { Widget: { Controls } }
