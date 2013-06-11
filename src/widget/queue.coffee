class Queue

    constructor: ({container, @varName}) ->
        @$container = Vamonos.jqueryify(container)

    event: (event, options...) -> switch event

        when "setup"
            [@stash, visualizer] = options

        when "editStop"
            @stash[@varName] = null

Vamonos.export { Widget: { Queue } }
