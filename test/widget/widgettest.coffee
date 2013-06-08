class WidgetTest

    HTML: """
        <div id="wt-controls" class="container">
            <table>
                <tr id="wt-constructor-tr"><th colspan=2>widget constructor:</th></tr>
                <tr><td></td><td><button id="wt-constructor">create widget</button></td></tr>
                <tr><th colspan=2>basic events:</th></tr>
                <tr><td colspan=2>
                    <button class="wt-event-button" id="wt-setup">setup</button>
                    <button class="wt-event-button" id="wt-editStart">editStart</button>
                    <button class="wt-event-button" id="wt-editStop">editStop</button>
                </th></tr>
                <tr><td colspan=2>
                    <button class="wt-event-button" id="wt-displayStart">displayStart</button>
                    <button class="wt-event-button" id="wt-displayStop">displayStop</button>
                </th></tr>
                <tr><th colspan=2>render event:</th></tr>
                <tr id="wt-render-tr"><td>varname</td><td>value</td></tr>
                <tr><td><input class="wt-varname" id="wt-varname1"></td><td><input id="wt-varvalue1"></td></tr>
                <tr><td><input class="wt-varname" id="wt-varname2"></td><td><input id="wt-varvalue2"></td></tr>
                <tr><td><input class="wt-varname" id="wt-varname3"></td><td><input id="wt-varvalue3"></td></tr>
                <tr><td></td><td><button id="wt-render">send event</button></td></tr>
                <tr><th colspan=2>other:</th></tr>
                <tr><td colspan=2><button id="wt-showstash">show stash</button></td></tr>
                <tr id="wt-css-tr"><th colspan=2>css options:</th></tr>
            </table>
        </div>
        <div class="container">
            <textarea id="wt-log"></textarea>
        </div>
        <div id="wt-container" class="container"></div>
    """

    constructor: ({@objConstructor, @constructorArgs, cssOptions, defaultFrameVars, preprocessContainer}) ->
        $("body").append(@HTML)

        @constructorArgs ?= []
        cssOptions ?= []
        defaultFrameVars ?= []

        preprocessContainer( $("#wt-container") ) if preprocessContainer?

        @constructorOptions = {}
        for [attr, type, defaultVal] in @constructorArgs
            switch type
                when "bool"
                    @constructorOptions[attr] = $("<input>", {type: "checkbox"})
                when "string", "json"
                    @constructorOptions[attr] = $("<input>", {value: defaultVal})

            $("#wt-constructor-tr").after( $("<tr>").append(
                $("<td>", {text: attr}), $("<td>").append(@constructorOptions[attr])
            ))

        $("#wt-constructor").on("click", => @runConstructor() )
        $("#wt-setup").on("click", =>
            $(".wt-event-button").removeClass("wt-active-button")
            $("#wt-setup").addClass("wt-active-button")
            @widget.event("setup", @stash = {}, @)
            @log("sent 'setup' event")
        )

        setupEventButton = (e) =>
            $("#wt-#{e}").on("click", =>
                $(".wt-event-button").removeClass("wt-active-button")
                $("#wt-#{e}").addClass("wt-active-button")
                @widget.event(e)
                @log("sent '#{e}' event")
            )
        setupEventButton(e) for e in ["displayStart", "displayStop", "editStart", "editStop"]

        $("#wt-render").on("click", =>
            frame = {}
            for i in [1,2,3]
                varname = $("#wt-varname#{i}").val()
                value = $("#wt-varvalue#{i}").val()
                if (varname + value).length > 0
                    frame[varname] = @JSONparse(value)

            @widget.event("render", frame)
            @log("sent 'render' event with frame=" + JSON.stringify(frame))
        )

        for i in [1,2,3]
            $("#wt-varname#{i}").val( defaultFrameVars[i-1] ) if defaultFrameVars[i-1]?

        $("#wt-showstash").on("click", =>
            @log("stash: " + JSON.stringify(@stash))
        )

        addCssOption = (opt) =>
            $checkbox = $("<input>", {type: "checkbox"}).on("click", =>
                $("#wt-container").toggleClass(opt)
            )
            $("#wt-css-tr").after(
                $("<tr>").append(
                    $("<td>", {text: opt}),
                    $("<td>").append( $checkbox )
                )
            )

        addCssOption(o) for o in cssOptions


    runConstructor: ->
        args = {container: "wt-container"}
        for [attr, type] in @constructorArgs
            switch type
                when "bool"
                    args[attr] = @constructorOptions[attr].is(":checked")
                when "string"
                    args[attr] = @constructorOptions[attr].val()
                when "json"
                    args[attr] = @JSONparse( @constructorOptions[attr].val() )

        @log("called widget constructor with args " + JSON.stringify(args))

        @widget = new @objConstructor(args)

    trigger: (type, args...) ->
        @log("got a trigger from the widget of type '#{type}', args=" + JSON.stringify(args))
        
    JSONparse: (txt) ->
        try
            return JSON.parse(txt)
        catch err
            return txt

    log: (msg) ->
        t = $("#wt-log")
        t.append( msg + "\n\n")
        t.scrollTop( t[0].scrollHeight - t.height() )
