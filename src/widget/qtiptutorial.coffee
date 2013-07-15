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

    constructor: (@states) ->
        @currStateIndex = null
        @$currTarget    = null

        @$tipXButton  = $("<div>", { style: "float:right; padding: 0 0 8px px; cursor: default;", html: "&#x2612;" })
        @$tipPrevLink = $("<div>", { style: "float:left",  html: "<a href='#'>&lt; previous</a>" })
        @$tipNextLink = $("<div>", { style: "float:right", html: "<a href='#'>next &gt;</a>" })
        @$tipData     = $("<div>", { style: "padding-bottom: 12px;" })
        @$tipContents = $("<div>").append(@$tipXButton, @$tipData, @$tipPrevLink, @$tipNextLink)

        @$tipXButton.on("click.qtiptutorial", => @stop() )
        @$tipPrevLink.on("click.qtiptutorial", => @prevState() )
        @$tipNextLink.on("click.qtiptutorial", => @nextState() )


    setup: () ->

    doState: (newStateIndex) ->
        @$currTarget.qtip("destroy") if @$currTarget?
        return if newStateIndex < 0

        @currStateIndex = newStateIndex
        currState       = @states[@currStateIndex]
        return unless currState?

        console.log(currState)

        @$currTarget = currState.target
        currState.dir ?= "w"

        console.log(@$currTarget)

        @$tipData.html(currState.tooltip);

        @tmp = {
            position: { corner: DIRS[currState.dir] },
            show:     { when: false, ready: true },
            hide:     false,
            style:    { name:"cream", tip: DIRS[currState.dir].tooltip },
            content:  @$tipContents
        }

        console.log(@tmp)

        @$currTarget.qtip(@tmp)

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

Vamonos.export { Widget: { QTipTutorial } }
