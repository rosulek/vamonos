class Pseudocode

    constructor: ({container, @editableBreakpoints, @breakpoints, @procedureName}) ->

        @locals              ?= []
        @args                ?= []
        @procedureName       ?= "main"
        @editableBreakpoints ?= yes

        # most recently displayed line
        @mostRecent = 0

        # sets @$tbl as the jquery selector for the pseudocode table
        nLines = @formatContainer(Vamonos.jqueryify(container))

        if @breakpoints is "all"
            @breakpoints = [1..nLines]
        else
            @breakpoints ?= []

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options
            @viz.setBreakpoint(b, @procedureName) for b in @breakpoints

        when "editStart"
            @enableBreakpointSelection() if @editableBreakpoints
            @showBreakpoints()

        when "displayStart"
            @disableBreakpointSelection() if @editableBreakpoints
            @showBreakpoints()

        when "displayStop"
            @clear()

        when "render"
            [frame, type] = options
            @render(frame) 


    render: (frame) ->
        @clear()

        stackContexts = (c._procName for c in frame._callStack)
        next = frame._nextLine
        prev = frame._prevLine

        return unless (
            @procedureName is next.procName or 
            @procedureName is prev.procName or
            @procedureName in stackContexts
        )

        if prev.procName is @procedureName
            @addClassToLine(prev.number, "pseudocode-previous")

        if next.procName is @procedureName
            @addClassToLine(next.number, "pseudocode-next")

    clear: () ->
        @$tbl.find("tr").removeClass("pseudocode-next")
        @$tbl.find("tr").removeClass("pseudocode-previous")
        @$tbl.find("tr").removeClass("pseudocode-active")

    addClassToLine: (n, klass) ->
        @$tbl.find("tr[vamonos-linenumber=#{ n }]").addClass(klass) if Vamonos.isNumber(n)

    keywords: "for while if else elseif elsif elif begin end then repeat until
               to downto by return error throw and or swap"
                   .split(/\s+/)
                   .sort((a,b) -> b.length - a.length)

    enableBreakpointSelection: ->
        @$tbl.find("td.pseudocode-gutter").on("click", (event) =>
            @toggleBreakpoint(
                $(event.target).closest("tr").attr("vamonos-linenumber")))
        @$tbl.find("td.pseudocode-gutter").prop("title", "Click to toggle a breakpoint on this line")

    disableBreakpointSelection: ->
        @$tbl.find("td.pseudocode-gutter").off("click")
        @$tbl.find("td.pseudocode-gutter").prop("title", "")

    toggleBreakpoint: (n) ->
        return unless Vamonos.isNumber(n)

        n = parseInt(n) 

        gutter = @getLine(n).find("td.pseudocode-gutter")
        if n in @viz.getBreakpoints(@procedureName)
            gutter.find("div.pseudocode-breakpoint").remove()
            @viz.removeBreakpoint(n, @procedureName)
        else
            gutter.append($("<div>", {class: "pseudocode-breakpoint"}))
            @viz.setBreakpoint(n, @procedureName)

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

Vamonos.export { Widget: { Pseudocode } }
