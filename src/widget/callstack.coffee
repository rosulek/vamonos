class CallStack

    constructor: ({container, @procedureNames}) ->
        @procedureNames ?= {}
        @$container      = Vamonos.jqueryify(container)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
        when "render"
            [frame, type] = options
            @render(frame)

        when "editStart"
            @drawHeader()

    render: (frame) ->
        @drawHeader()
        stack = frame._callStack
        n = frame._nextLine.context
        r = frame._nextLine.result
        @addProcedure(c.proc, c.args) for c in stack
        @addProcedure(n.proc, n.args)
        @$table.find("tr.callstack-procedure").last().addClass("callstack-active")
        @addProcedure(r.proc, r.args, r.returnValue ? "&nbsp;") if r?
        
    addProcedure: (proc, args, ret) ->
        return if proc is 'global'
        proc = @procedureNames[proc] ? proc
        $proc = $("<tr class='callstack-values'><td class='callstack-args'>" +
          "#{@argStr(args)}</td>td class='callstack-middle'></td><td class='callstack-return'>"  +
          "#{@retStr(ret)}<tr class='callstack-procedure'><td colspan=3>"  +
          "#{proc}</td></tr></td></tr>")
        $proc.eq(1).addClass("callstack-returned") if ret?
        $proc.appendTo(@$table)

    # expects format {arg1: 1, arg2: "b"}
    argStr: (args) ->
        ("#{k}=#{Vamonos.rawToTxt(v)}" for k,v of args).join(",") + "&nbsp;&darr;"

    # expects format [true, 1] or simply "true"
    retStr: (ret) ->
        return "" unless ret?
        ret = Vamonos.arrayify(ret)
        "&uarr;&nbsp;" + (Vamonos.rawToTxt(r) for r in ret).join(",")

    drawHeader: () ->
        @$container.html("")
        @$table = $(
            "<table class='callstack'><tr class='callstack-header'>" +
            "<td colspan=3>Call Stack</td></tr></table>"
        )
        @$container.html(@$table)
        @drawn = yes

Vamonos.export { Widget: { CallStack } }
