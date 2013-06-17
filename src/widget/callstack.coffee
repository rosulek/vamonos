class CallStack

    constructor: ({container, @procedureNames}) ->
        @procedureNames ?= {}
        @setup(Vamonos.jqueryify(container))

    event: (event, options...) -> switch event
        when "render"
            [frame, type] = options
            @render(frame)

    setup: ($container) ->
        @$tbl = $("<table>", {class: "callstack"})
        $header = $("<th>", {text: "Call Stack"})
        @$tbl.append($header)
        $container.append(@$tbl)


    render: (frame) ->

        @clear()

        return if frame._context is "os"

        for c in frame._callStack when c.context isnt "os"
            @$tbl.append($("<tr>", {
                text: @procedureNames[c.context] ? c.context
            }))

        @$tbl.append($("<tr>", {
            class: "current",
            text: @procedureNames[frame._context] ? frame._context
        }))


    clear: () ->
        @$tbl.find("tr").remove()


Vamonos.export { Widget: { CallStack } }
