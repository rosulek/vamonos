class CallStack

    constructor: ({container, @procedureNames, @animate}) ->
        @procedureNames ?= {}
        @$container      = Vamonos.jqueryify(container)
        @animate        ?= ["next"]

        @$inner = $("<div>", {class: "callstack"}).appendTo(@$container)
        @$table = $("<table>", {class: "callstack"}).appendTo(@$inner)

        @$container.hide()

        @$argRows  = []
        @$procRows = []

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options

        when "render"
            [frame, type] = options
            @render(frame, type)
        when "displayStop"
            @$argRows  = []
            @$procRows = []
            @$table.empty()
            @$container.hide()
        when "displayStart"
            @$container.show()


    render: (frame, type) ->
        @$inner.stop()

        stack = frame._callStack[..]
        stack.reverse()
        stack = (f for f in stack when f.procName isnt "input")

        if frame._returnStack?
            stack.push(r) for r in frame._returnStack

        while stack.length > @$argRows.length
            @$argRows.push( $("<tr>").appendTo(@$table) )
            @$procRows.push( $("<tr>").appendTo(@$table) )

        for i,scope of stack
            @setArgRow( @$argRows[i], scope )
            @setProcRow( @$procRows[i], scope )

        tgt = @$procRows[ stack.length - 1 ]
        newScrollTop = @$inner.scrollTop() - @$inner.offset().top \
                     - @$inner.height() + tgt.height() \
                     + tgt.offset().top + 1
                    
        if type in @animate and newScrollTop > 0
            @$inner.animate { scrollTop: newScrollTop }, 500, =>
                while stack.length < @$argRows.length
                    @$argRows.pop().remove()
                    @$procRows.pop().remove()
        else 
            while stack.length < @$argRows.length
                @$argRows.pop().remove()
                @$procRows.pop().remove()

            @$inner.scrollTop( @$inner.prop("scrollHeight") )


    setArgRow: ($tr, scope) ->
        $tr.html("<td class='callstack-args'>" +
          "#{@argStr(scope)}</td><td class='callstack-return'>"  +
          "#{@retStr(scope)}</td>")

    setProcRow: ($tr, scope) ->
        procName = @procedureNames[scope.procName] ? scope.procName
        $tr.html("<td><td><div class='callstack-proc-container'><div class='callstack-proc'>#{procName}</div></div></td>")
        $tr.find("div.callstack-proc").addClass("callstack-returned") if "returnValue" of scope
        $tr.find("div.callstack-proc").addClass("callstack-active")   if scope.activeStackFrame

    argStr: (scope) ->
        ("#{k}=#{Vamonos.rawToTxt(v)}" for k,v of scope.args).join(",") + "<span class='callstack-arrow'>&darr;</span>"

    retStr: (scope) ->
        return "&nbsp;" unless "returnValue" of scope
        ret = Vamonos.arrayify(scope.returnValue)
        "<span class='callstack-arrow'>&uarr;</span>" + (Vamonos.rawToTxt(r) for r in ret).join(",")


Vamonos.export { Widget: { CallStack } }
