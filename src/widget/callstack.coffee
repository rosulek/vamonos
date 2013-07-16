class CallStack

    constructor: ({container, @procedureNames}) ->
        @procedureNames ?= {}
        @$container      = Vamonos.jqueryify(container)

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.breakOnReturn = yes
        when "render"
            [frame, type] = options
            @render(frame)

        when "editStart"
            @drawHeader()

    render: (frame) ->
        @drawHeader()
        stack = frame._callStack[..]
        r = frame._nextLine.result
        @addProcedure(c._procName, c._args) for c in stack.reverse()
        @$table.find("td.callstack-proc").last().addClass("callstack-active")
        @addProcedure(r._procName, r._args, r._returnValue ? "&nbsp;") if r?
        
    addProcedure: (proc, args, ret) ->
        return if proc is 'input'
        proc = @procedureNames[proc] ? proc
        $proc = $("<tr><td class='callstack-args'>" +
          "#{@argStr(args)}</td><td class='callstack-return'>"  +
          "#{@retStr(ret)}</td></tr><tr><td colspan='2' class='callstack-proc'><div>"  +
          "#{proc}</div></td></tr>")
        $proc.find("td.callstack-proc").addClass("callstack-returned") if ret?
        $proc.appendTo(@$table)

    # expects format {arg1: 1, arg2: "b"}
    argStr: (args) ->
        ("#{k}=#{Vamonos.rawToTxt(v)}" for k,v of args).join(",") + "<span class='callstack-arrow'>&darr;</span>"

    # expects format [true, 1] or simply "true"
    retStr: (ret) ->
        return "&nbsp;" unless ret?
        ret = Vamonos.arrayify(ret)
        "<span class='callstack-arrow'>&uarr;</span>" + (Vamonos.rawToTxt(r) for r in ret).join(",")

    drawHeader: () ->
        @$container.html("")
        @$table = $(
            "<table class='callstack'><tr class='callstack-header'>" +
            "<td colspan='2'>Call Stack</td></tr></table>"
        )
        @$container.html(@$table)
        @drawn = yes

Vamonos.export { Widget: { CallStack } }
