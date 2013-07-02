class CallStack

    constructor: ({container, @procedureNames}) ->
        @procedureNames ?= {}
        @$container      = Vamonos.jqueryify(container)

    event: (event, options...) -> switch event
        when "render"
            [frame, type] = options
            @render(frame)

    newCell: (proc, args) ->
        $row = $("<tr>", {class: "call"})
        $proc = $("<span>",
            class: "procedure-name"
            text: proc
        )
        $args = $("<span>",
            class: "arguments"
            text: "(#{args.join(",")})"
        )
        $row.append([$proc, $args])
        return $row

    render: (frame) ->

        @$container.html("")

        return if frame._nextLine.context.proc is "global"

        $tbl = $("<table>", {class: "callstack"})

        for context in frame._callStack when context.proc isnt "global"
            name = @procedureNames[context.proc] ? context.proc
            args = ("#{k}=#{Vamonos.rawToTxt(v)}" for k, v of context.args)
            $cell = @newCell(name, args)
            $tbl.append($cell)

        name = @procedureNames[frame._nextLine.context.proc] ? frame._nextLine.context.proc
        args = ("#{k}=#{Vamonos.rawToTxt(v)}" for k, v of frame._nextLine.context.args)
        $row = @newCell(name, args)
        $row.addClass("current")

        $tbl.append($row)
        @$container.append($tbl)



Vamonos.export { Widget: { CallStack } }
