DIRS = {
    n:  {target: "topMiddle",    tooltip: "bottomMiddle"},
    s:  {target: "bottomMiddle", tooltip: "topMiddle"},
    e:  {target: "rightMiddle",  tooltip: "leftMiddle"},
    w:  {target: "leftMiddle",   tooltip: "rightMiddle"},
    nw: {target: "topLeft",      tooltip: "rightBottom"},
    ne: {target: "topRight",     tooltip: "leftBottom"},
    se: {target: "bottomRight",  tooltip: "leftTop"},
    sw: {target: "bottomLeft",   tooltip: "rightTop"},
}

class QTipTutorial

    @spec =
        states:
            type: "Array"
            description:
                "array of objects of the format `{ target, dir, tooltip }` where " +
                "target is a jQuery selector for where you want the tooltip to " +
                "appear, tooltip is the message to be displayed."

    constructor: (args) ->

        args = { states: args } if args.constructor.name is 'Array'

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @currStateIndex = null
        @$currTarget    = null

        @$tipXButton  = $("<div>", { style: "float:right; padding: 0 0 8px 8px; cursor: pointer;", html: "&#x2612;" })
        @$tipPrevLink = $("<div>", { style: "float:left; cursor: pointer;",  html: "&laquo; previous" })
        @$tipNextLink = $("<div>", { style: "float:right; cursor: pointer;", html: "next &raquo;" })
        @$tipData     = $("<div>", { style: "padding-bottom: 12px;" })
        @$tipContents = $("<div>").append(@$tipXButton, @$tipData, @$tipPrevLink, @$tipNextLink)

        @$tipXButton.on("click.qtiptutorial", => @stop() )
        @$tipPrevLink.on("click.qtiptutorial", => @prevState() )
        @$tipNextLink.on("click.qtiptutorial", => @nextState() )


    doState: (newStateIndex) ->
        @$currTarget.qtip("destroy") if @$currTarget?
        return if newStateIndex < 0

        @currStateIndex = newStateIndex
        currState       = @states[@currStateIndex]
        return unless currState?

        @$currTarget = currState.target
        currState.dir ?= "w"

        @$tipData.html(currState.tooltip);
        if @currStateIndex > 0 then @$tipPrevLink.show() else @$tipPrevLink.hide()
        if @currStateIndex < @states.length - 1 then @$tipNextLink.show() else @$tipNextLink.hide()

        @$currTarget.qtip({
            position: { corner: DIRS[currState.dir] },
            show:     { when: false, ready: true },
            hide:     false,
            style:    { name:"cream", tip: DIRS[currState.dir].tooltip },
            content:  @$tipContents
        })

    event: ->

    setup: ->

    nextState: ->
        @doState(@currStateIndex + 1);

    prevState: ->
        @doState(@currStateIndex - 1);

    stop: ->
        @doState(-1)

    restart: ->
        @doState(0)

@Vamonos.export { Widget: { QTipTutorial } }
