class CallStack

    constructor: ({container}) ->
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

        if frame._callStack.length is 0
            $row = $("<tr>", {text: "empty"})
            @$tbl.append($row)
            return

        for c in frame._callStack
            $row = $("<tr>", {text: "#{c.newcontext} called by #{c.context}"})
            @$tbl.append($row)


    clear: () ->
        @$tbl.find("tr").remove()


Vamonos.export { Widget: { CallStack } }
