class Graph

    constructor: ({container, @varName}) ->

        @$container = Vamonos.jqueryify(container)

        @$container.html("GRAPH GOES HERE")
        
        
    event: (event, options...) -> switch event

        when "setup"
            [@stash, visualizer] = options


Vamonos.export { Widget: { Graph } }
