class CallStack

    constructor: ({container, @procedureNames, @ignoreMain}) ->
        @procedureNames ?= {}
        @ignoreMain     ?= false
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

        return if frame._context.proc is "os"

        $tbl = $("<table>", {class: "callstack"})

        for c in frame._callStack when c._context.proc isnt "os"
            continue if c._context.proc is "main" and @ignoreMain
            name = @procedureNames[c._context.proc] ? c._context.proc
            args = ("#{k}=#{Vamonos.rawToTxt(v)}" for k, v of c._context.args)
            $cell = @newCell(name, args)
            $tbl.append($cell)

        name = @procedureNames[frame._context.proc] ? frame._context.proc
        args = ("#{k}=#{Vamonos.rawToTxt(v)}" for k, v of frame._context.args)
        $row = @newCell(name, args)
        $row.addClass("current")

        $tbl.append($row)
        @$container.append($tbl)


Vamonos.export { Widget: { CallStack } }
