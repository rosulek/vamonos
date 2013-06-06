#_require ../common.coffee
#_require ./controlslider.coffee
#_require ./controlbuttons.coffee

class Controls

    constructor: ({container, @showWhileSliding, noStopGoButton, autoPlay}) ->
        @$container = Common.jqueryify(container)
        @$buttons    = $("<div>", {class: "controls-buttons"});

        @buttons = new Vamonos.Widget.ControlButtons({
            container: @$buttons, 
            noStopGoButton: noStopGoButton,
            autoPlay: autoPlay
        })

        @$container.append(@$buttons)

        @slider = new Vamonos.Widget.ControlSlider({
            container: @$container,
            frameLabelFirst: yes
        })


    setup: (stash, target) ->
        @buttons.setup(stash, target)
        @slider.setup(stash, target)

    setMode: (mode) ->
        @buttons.setMode(mode)
        @slider.setMode(mode)

    render: (frame, type) ->
        @buttons.render(frame, type)
        @slider.render(frame, type)

    clear: () ->
        @buttons.clear()
        @slider.clear()

Common.VamonosExport { Widget: { Controls } }
