class ResultProperty

    @description = """
        The `ResultProperty` widget takes as its constructor an object mapping
        (potentially namespaced) variable names in the stash to side-effecting
        functions taking those variables.
        """

    constructor: (@vars) ->

    event: (event, options...) -> switch event
        when 'setup'
            [@viz] = options
        when 'displayStart'
            view = @viz.frames[..].pop()
            for vName, vFunc of @vars
                vFunc(view[vName])

@Vamonos.export { Widget: { ResultProperty } }
