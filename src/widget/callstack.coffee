class CallStack

    constructor: ({container, @procedureNames}) ->
        @procedureNames ?= {}
        @$container      = Vamonos.jqueryify(container)

        header  = $("<div>", {text: "Call Stack", class: "callstack-header"}).appendTo(@$container)
        @$inner = $("<div>", {class: "callstack"}).appendTo(@$container)
        @$table = $("<table>", {class: "callstack"}).appendTo(@$inner)

        @$argRows  = []
        @$procRows = []

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options

        when "render"
            [frame, type] = options
            @render(frame)
        when "displayStop"
            @$table.empty()


    render: (frame) ->
        stack = frame._callStack[..]
        stack.reverse()
        stack = (f for f in stack when f.procName isnt "input")

        if frame._returnStack?
            stack.push(r) for r in frame._returnStack

        console.log("stack = ", stack, "_callStack =", frame._callStack, "_returnStack = ", frame._returnStack)

        if stack.length < @$argRows.length

            newScrollTop = \
                ( (cont, tgt) -> cont.scrollTop() - cont.offset().top \
                                  - cont.height() + tgt.height() + tgt.offset().top + 1 \
                )( @$inner, @$procRows[ stack.length - 1 ] )

            for i,f of stack
                @setArgRow( @$argRows[i], f )
                @setProcRow( @$procRows[i], f )

            @$inner.stop(true,true).animate { scrollTop: newScrollTop }, 500, =>
                while stack.length < @$argRows.length
                    @$argRows.pop().remove()
                    @$procRows.pop().remove()

        else
            while stack.length > @$argRows.length
                @$argRows.push( $("<tr>").appendTo(@$table) )
                @$procRows.push( $("<tr>").appendTo(@$table) )

            for i,f of stack
                @setArgRow( @$argRows[i], f )
                @setProcRow( @$procRows[i], f )

    #        @$inner.scrollTop( @$inner.prop("scrollHeight") )
            @$inner.stop()
            @$inner.animate({ scrollTop: @$inner.prop("scrollHeight") }, 500)


    setArgRow: ($tr, frame) ->
        $tr.html("<td class='callstack-args'>" +
          "#{@argStr(frame)}</td><td class='callstack-return'>"  +
          "#{@retStr(frame)}</td>")

    setProcRow: ($tr, frame) ->
        procName = @procedureNames[frame.procName] ? frame.procName
        $tr.html("<td colspan='2' class='callstack-proc'><div>#{procName}</div></td>")
        $tr.find("td").addClass("callstack-returned") if frame.returning


    # expects format {arg1: 1, arg2: "b"}
    argStr: (frame) ->
        ("#{k}=#{Vamonos.rawToTxt(v)}" for k,v of frame.args).join(",") + "<span class='callstack-arrow'>&darr;</span>"

    # expects format [true, 1] or simply "true"
    retStr: (frame) ->
        return "&nbsp;" unless frame.returning
        ret = Vamonos.arrayify(frame.returnValue)
        "<span class='callstack-arrow'>&uarr;</span>" + (Vamonos.rawToTxt(r) for r in ret).join(",")


Vamonos.export { Widget: { CallStack } }
