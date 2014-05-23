class CallStack

    @description = "CallStack is a representation of the stash's call stack. " +
        "It also displays the values a procedure was called with, and its " +
        "return value. Note: setting \"\_callStack\" as a watchVar will cause " +
        "the visualizer to break on procedure calls and returns."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        procedureNames:
            type: "Object"
            defaultValue: {}
            description:
                "an object mapping procedure names (those in the Visualizer's " +
                "'algorithm' argument) to their fully capitalized and formatted " +
                "display forms."
            example:
                    "procedureNames: {\n" +
                    "    main: \"DFS\",\n" +
                    "    visit: \"DFS-Visit\",\n" +
                    "}"
        animate:
            type: "Array"
            defaultValue: ["next"]
            description: "types of frame changes to show an animation on"
        resizable:
            type: "Boolean"
            defaultValue: true
            description: "whether the widget should have a resize triangle"
        ignoreMain:
            type: "Boolean"
            defaultValue: false
            description:
                "CallStack will not display calls to the `main` procedure when set. " +
                "This is useful when you'd like to use `main` to set variables, or " +
                "do other useful housekeeping."
        ignoreArgumentValues:
            type: "Array"
            defaultValue: []
            description:
                "An array of argument names `\['arg1','arg2'\]` that should only " +
                "show their name in the Call Stack."
        formatArgumentValues:
            type: "Object"
            defaultValue: {}
            description:
                "A mapping of arg-names to functions of arg-values to strings"
        formatReturnValue:
            type: "Object"
            defaultValue: {}
            description: "A mapping of proc names to functions from a " +
                "return-value to a string"

    constructor: (args) ->

        Vamonos.handleArguments
            widgetObject   : this
            givenArgs      : args

        @$container      = Vamonos.jqueryify(@container)

        @$inner = $("<div>", {class: "callstack"}).appendTo(@$container)
        @$table = $("<table>", {class: "callstack"}).appendTo(@$inner)

        @$container.hide()

        if @resizable
            @$container.resizable(
                handles: "se"
                alsoResize: @$inner
            )
            @$container.addClass("ui-resizable-roomforscrollbar")

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

    ignoreFrame: (frame) ->
        frame.procName is "input" or @ignoreMain and frame.procName is 'main'

    render: (frame, type) ->
        @$inner.stop()

        stack = frame._callStack[..]
        stack.reverse()
        stack = (f for f in stack when not @ignoreFrame(f))

        if frame._returnStack?
            stack.push(r) for r in frame._returnStack when not @ignoreFrame(r)

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
        return unless $tr.html?
        $tr.html("<td class='callstack-args'>" +
          "#{@argStr(scope)}</td><td class='callstack-return'>"  +
          "#{@retStr(scope)}</td>")

    setProcRow: ($tr, scope) ->
        return unless $tr.html?
        procName = @procedureNames[scope.procName] ? scope.procName
        $tr.html("<td><td><div class='callstack-proc-container'><div class='callstack-proc'>#{procName}</div></div></td>")
        $tr.find("div.callstack-proc").addClass("callstack-returned") if "returnValue" of scope
        $tr.find("div.callstack-proc").addClass("callstack-active")   if scope.activeStackFrame

    argStr: (scope) ->
        r = (for k,v of scope.args when not /^_/.test(k)
            if k in @ignoreArgumentValues
                k
            else if k of @formatArgumentValues
                "#{k}=#{ @formatArgumentValues[k](v) }"
            else if v.constructor.name is 'Array'
                "#{k}=#{k}"
            else
                "#{k}=#{Vamonos.rawToTxt(v)}"
        )


        return r.join(",") + "<span class='callstack-arrow'>&darr;</span>"

    retStr: (scope) ->
        return "&nbsp;" unless "returnValue" of scope
        if scope.procName of @formatReturnValue
            s = @formatReturnValue[scope.procName](scope.returnValue)
        else
            ret = Vamonos.arrayify(scope.returnValue)
            s = (Vamonos.rawToTxt(r) for r in ret).join(",")
        return "<span class='callstack-arrow'>&uarr;</span>" + s


@Vamonos.export { Widget: { CallStack } }
