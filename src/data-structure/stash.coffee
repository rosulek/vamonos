class Stash
    constructor: () ->
        @_breakpoints = []
        @_inputVars   = []
        @_watchVars   = []
        @_stack       = []
        @_type        = "stash"
        @_callStack   = []

    _initialize: () ->
        for v of this
            @[v] = undefined unless v.match(/^_/) or v in @_inputVars

    _clone: () ->
        Vamonos.mixin(new Stash(), this, Vamonos.clone)

    _bind: (args = {}) ->
        vars    = args.vars ? {}
        context = args.context ? "main"
        if @_context?
            @_callStack.push(@_context) 
            console.log "pushed context", @_context
        @_context = context

        # save old scope
        @_stack.push([key, @[key]] for key, val of vars)

        # bind new vars
        @[key] = val for key, val of vars

    _return: () ->
        @_context = @_callStack.pop()
        console.log "popped context", @_context

        bindings = @_stack.pop()

        # delete new bindings not in old scope
        keys = (binding[0] for binding in bindings)
        delete @[key] for key of this when not key in keys

        # restore bound arguments
        @[key] = val for [key, val] in bindings
            

Vamonos.export { DataStructure: { Stash } }
