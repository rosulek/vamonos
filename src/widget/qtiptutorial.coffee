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
        @currState     = @states.start
        @currStateName = "start"
        @$currTarget   = null

    setup: () ->

    doState: (stateName) ->
        return unless @currState?
        @$currTarget.qtip("destroy")           if @$currTarget? and @currState.tooltip?
        @$currTarget.off("click.qtiptutorial") if @currState.on.clickTarget?

        @currStateName = stateName
        @currState     = @states[@currStateName]
        return unless @currState?

        @$currTarget = @currState.target

        if @$currTarget?
            if @currState.on.clickTarget?
                @$currTarget.on("click.qtiptutorial", => @click())
            
            if @currState.tooltip?
                @currState.dir ?= "w"
                @$currTarget.qtip({
                    position: {corner: DIRS[@currState.dir]},
                    show: { when: false, ready: true },
                    hide: false,
                    style: {name:"cream", tip: DIRS[@currState.dir].tooltip},
                    content: @currState.tooltip
                })

        @delayedTransition(@currState.on.auto) if @currState.on?.auto?
    

    click: () ->
        @delayedTransition(@currState.on.clickTarget) if @currState?.on?.clickTarget?
        
    event: (type) -> switch type
        when "editStart"
            @delayedTransition(@currState.on.edit) if @currState?.on?.edit?
        when "displayStart"
            @delayedTransition(@currState.on.display) if @currState?.on?.display?
        when "render"
            @delayedTransition(@currState.on.frame) if @currState?.on?.frame?

    delayedTransition: (nextState) ->
        return unless nextState?

        @currState.delay ?= 500
        from   = @currStateName
        helper = =>
            @doState(nextState) if @currStateName is from

        setTimeout( helper, @currState.delay )

Vamonos.export { Widget: { QTipTutorial } }
