class Pseudocode

    @description = "The Pseudocode widget prettily formats the pseudocode in " +
        "the div you provide it. It also visualizes and allows editing of " +
        "breakpoints."

    @spec =
        container:
            type: ["String", "jQuery Selector"]
            description:
                "The id or a jQuery selector of the div in which this widget " +
                "should draw itself."
        editableBreakpoints:
            type: "Boolean"
            defaultValue: true
            description: "whether breakpoints can be modified with this widget"
        breakpoints:
            type: ["Array", "String"]
            defaultValue: []
            description:
                "initial breakpoints, as an array of line numbers, " +
                "or `'all'` for all breakpoints"
        procedureName:
            type: "String"
            defaultValue: "main"
            description: "the name of the procedure in the algorithm"

    constructor: (args) ->

        args = { container: args } unless typeof args is "object"

        Vamonos.handleArguments
            widgetObject : this
            givenArgs    : args

        @locals              ?= []
        @args                ?= []

        # most recently displayed line
        @mostRecent = 0

        # sets @$tbl as the jquery selector for the pseudocode table
        nLines = @formatContainer(Vamonos.jqueryify(@container))

        @breakpoints = [1..nLines] if @breakpoints is "all"

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.setBreakpoint(b, @procedureName) for b in @breakpoints

        when "editStart"
            @enableBreakpointSelection() if @editableBreakpoints
            @showBreakpoints()
            @$tbl.find("div.pseudocode-breakpoint").addClass("pseudocode-editmode-breakpoint")

        when "editStop"
            @$tbl.find("div.pseudocode-breakpoint").removeClass("pseudocode-editmode-breakpoint")

        when "displayStart"
            @disableBreakpointSelection() if @editableBreakpoints
            @showBreakpoints()

        when "displayStop"
            @clear()
            @$tbl.find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint")

        when "render"
            [frame, type] = options
            @render(frame)


    render: (frame) ->
        @clear()
        return unless @procedureName is frame._procName
        next  = frame._nextLine
        prev  = frame._prevLine
        @addClassToLine(prev, "pseudocode-previous") if prev?
        @addClassToLine(next, "pseudocode-next")     if next?

        if frame._snapshotReasons.breakpoint?
            @getLine(frame._nextLine).find("div.pseudocode-breakpoint").addClass("pseudocode-active-breakpoint")

        if frame._snapshotReasons.error?
            @$tbl.find("tr").removeClass("pseudocode-next")
            @$tbl.find("tr").removeClass("pseudocode-previous")
            @addClassToLine(next, "pseudocode-error")

    clear: () ->
        @$tbl.find("tr").removeClass("pseudocode-next")
        @$tbl.find("tr").removeClass("pseudocode-previous")
        @$tbl.find("tr").removeClass("pseudocode-error")
        @$tbl.find("div.pseudocode-breakpoint").removeClass("pseudocode-active-breakpoint")

    addClassToLine: (n, klass) ->
        @$tbl.find("tr[vamonos-linenumber=#{ n }]").addClass(klass) if Vamonos.isNumber(n)

    keywords: "for while if else elseif elsif elif begin end then repeat until
               to downto by return error throw and or swap each"
                   .split(/\s+/)
                   .sort((a,b) -> b.length - a.length)

    enableBreakpointSelection: ->
        gutter = @$tbl.find("td.pseudocode-gutter")
        gutter.on("mousedown", (event) =>
            n = $(event.target).closest("tr").attr("vamonos-linenumber")
            @toggleBreakpoint(n)
            @mouseDownMode = @getBreakpointStatus(n)
            return false # don't propogate to browser's text-selection handler
        )
        # mouseup anywhere should cancel breakpoint click-drag
        $(window).on("mouseup.vamonos", => @mouseDownMode = null )
        gutter.on("mouseover", =>
            return unless @mouseDownMode?
            n = $(event.target).closest("tr").attr("vamonos-linenumber")
            switch @mouseDownMode
                when "on"  then   @setBreakpoint(n)
                when "off" then @unsetBreakpoint(n)
        )
        gutter.prop("title", "Click to toggle a breakpoint on this line")

    disableBreakpointSelection: ->
        gutter = @$tbl.find("td.pseudocode-gutter")
        gutter.off("mousedown").off("mouseover").prop("title", "")
        $(window).off("mouseup.vamonos")
        @mouseDownMode = null

    getBreakpointStatus: (n) ->
        return unless Vamonos.isNumber(n)
        n = parseInt(n)

        if n in @viz.getBreakpoints(@procedureName)
            return "on"
        else
            return "off"

    setBreakpoint: (n) ->
        return unless @getBreakpointStatus(n) is "off"
        n = parseInt(n)
        @getLine(n).find("td.pseudocode-gutter").append($("<div>", {class: "pseudocode-breakpoint"}))
        @viz.setBreakpoint(parseInt(n), @procedureName)

    unsetBreakpoint: (n) ->
        return unless @getBreakpointStatus(n) is "on"
        n = parseInt(n)
        @getLine(n).find("td.pseudocode-gutter").html("")
        @viz.removeBreakpoint(n, @procedureName)

    toggleBreakpoint: (n) ->
        switch @getBreakpointStatus(n)
            when "on"  then @unsetBreakpoint(n)
            when "off" then   @setBreakpoint(n)

    showBreakpoints: ->
        @$tbl.find("td.pseudocode-gutter div.pseudocode-breakpoint")
             .remove()                       # Clear all old breakpoints.
        for n in @viz.getBreakpoints(@procedureName)
            @getLine(n)
                .find("td.pseudocode-gutter")
                .append($("<div>", {class: "pseudocode-breakpoint"}))

    getLine: (n) ->
        @$tbl.find("tr[vamonos-linenumber=#{ n }]")

    formatContainer: ($container) ->
        title = $container.attr("title")
        $container.removeAttr("title")
        html_lines = $container.html()
            .split(/\r\n|\r|\n/)
            .filter((l) -> l.match /\S/)

        # Create the table we will be modifying.
        # Set it as an attribute of this object.
        @$tbl = $("<table>", {class: "pseudocode"})

        # Create title row in pseudocode table.
        @$tbl.append(
            $("<tr>", {class: "pseudocode-header"}).append(
                $("<td>", {class: "pseudocode-title", colspan: 3, text: title})))

        # Determine the minimum number of leading spaces among pseudocode lines.
        minWhitespace = (line.match(/^\s*/)[0].length for line in html_lines)
                            .reduce((a,b) -> if a < b then a else b)

        # Add each line to the table while adding formatting.
        keywordsPattern = new RegExp("\\b(#{@keywords.join("|")})\\b", "gi")
        lineNumber = 1
        for line in html_lines
            [lineNumberStr, className] =
                if line.match /^\s*(\/\/|\#)/
                    ["" , "pseudocode-comment"]
                else
                    [lineNumber++, "pseudocode-text"]

            # Make keywords bold on all lines but comments.
            unless className is "pseudocode-comment"
                line = line.replace(keywordsPattern, (s) -> "<b>#{s}</b>")

            # The number of indents is the number of spaces beyond the minimum
            # whitespace divided by 4.
            numIndents = Math.floor((line.match(/^\s*/)[0].length - minWhitespace) / 4)
            indents = Array(numIndents+1).join("<span class=pseudocode-indent></span>")

            # Add the formatted pseudocode line to the table we created earlier.
            @$tbl.append(
                $("<tr>", {class: "pseudocode-line", "vamonos-linenumber": lineNumberStr})
                    .append(
                        $("<td>", {class: "pseudocode-gutter"}),
                        $("<td>", {class: "pseudocode-line-number", text: lineNumberStr}),
                        $("<td>", {class: className, html: (indents + line) })))

        # Add the table to the DOM.
        $container.html(@$tbl)
        return lineNumber

@Vamonos.export { Widget: { Pseudocode } }
