class CallStack

    constructor: ({container, @procedureNames, @defaultArgs}) ->
        @defaultArgs    ?= {}
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

        return if frame._context.proc is "os"

        for c in frame._callStack when c.context.proc isnt "os"
            args = if @defaultArgs[c.context.proc]?
                @defaultArgs[c.context.proc]
            else
                []
            argstr = "(#{args.concat(c.context.args).join(",")})"

            @$tbl.append($("<tr>", {
                text: 
                    ( @procedureNames[c.context.proc] ? c.context.proc ) + argstr
            }))

        args = if @defaultArgs[frame._context.proc]?
            @defaultArgs[frame._context.proc]
        else
            []
        argstr = "(#{args.concat(frame._context.args).join(",")})"
        @$tbl.append($("<tr>", {
            class: "current",
            text: ( @procedureNames[frame._context.proc] ? frame._context.proc ) + argstr
        }))


    clear: () ->
        @$tbl.find("tr").remove()


Vamonos.export { Widget: { CallStack } }
