#_require ../common.coffee
#_require ./widget.coffee

class Pseudocode extends Widget

    keywords: "for while if else elseif elsif elif begin end then repeat until
               to downto by return error throw and or"
                   .split(/\s+/)
                   .sort((a,b) -> b.length - a.length)
                   .join("|")


    constructor: ({container, @userBreakpoints, @breakpoints}) ->
        # sets @$tbl as the jquery selector for the pseudocode object
        @formatContainer(Common.jqueryify(container))


    setup: (@stash) ->
        @stash._breakpoints = @breakpoints
        @showBreakpoints()


    setMode: (mode) ->
        if mode is 'edit'
            @$tbl.find("tr.pseudocode-active").removeClass("pseudocode-active")
            @enableBreakpointSelection()

        else if mode is 'display'
            @showBreakpoints()
            @disableBreakpointSelection()

    disableBreakpointSelection: ->
        @$tbl.find("td.pseudocode-gutter")
             .off("click")

    enableBreakpointSelection: ->
        @$tbl.find("td.pseudocode-gutter")
             .on("click", (event) =>
                 console.log "handler: ", event.target
                 @breakPointToggle(
                     $(event.target).closest("tr").attr("vamonos-linenumber"),
                     $(event.target)
                 )
             )

    breakPointToggle: (n, $e) ->
        n = parseInt(n, 10)
        if n in @stash._breakpoints
            console.log "remove breakpoint", n
            @removeBreakpoint(n)

        else
            console.log "add breakpoint", n
            @ensureBreakpoint(n)

        console.log @stash._breakpoints


    ensureBreakpoint: (n) ->
        return if n in @stash._breakpoints
        @getNthPseudocodeLine(n)
            .find("td.pseudocode-gutter")
            .append($("<div>", {class: "pseudocode-breakpoint"}))
        @stash._breakpoints.push(n)

    removeBreakpoint: (n) ->
        return unless n in @stash._breakpoints
        @getNthPseudocodeLine(n)
            .find("td.pseudocode-gutter")
            .find("div.pseudocode-breakpoint")
            .remove()
        @stash._breakpoints.splice(@stash._breakpoints.indexOf(n), 1)

    showBreakpoints: ->
        @$tbl.find("td.pseudocode-gutter div.pseudocode-breakpoint").remove()
        for n in @breakpoints
            @getNthPseudocodeLine(n)
                .find("td.pseudocode-gutter")
                .append($("<div>", {class: "pseudocode-breakpoint"}))

    getNthPseudocodeLine: (n) ->
        @$tbl.find("tr[vamonos-linenumber=#{ n }]")

    render: (frame, type) ->

        @$tbl.find("tr").removeClass("pseudocode-active")

        # change highlighted line to frame's line number
        @$tbl.find("tr[vamonos-linenumber=#{ frame._lineNumber }]")
             .addClass("pseudocode-active")


    formatContainer: ($container) ->
        #get title, remove title
        title = $container.attr("title")
        $container.removeAttr("title")

        # get html as an array of lines, remove the html from div
        html_lines = $container.html().split(/\r\n|\r|\n/).filter((l) -> l.match /\S/)

        # create table
        @$tbl = $("<table>", {class: "pseudocode"})

        # create title
        @$tbl.append(
            $("<tr>", {class: "pseudocode-header"}).append(
                $("<td>", {class: "pseudocode-title", colspan: 3, text: title})
            )
        )

        # add bold keywords but not to comments
        pattern    = new RegExp("\\b(#{@keywords})\\b", "g")
        html_lines = for line in html_lines
            if line.match /^\s*\/\//
                line
            else
                line.replace(pattern, (s) -> "<b>#{s}</b>")


        minWhitespace = (line.match(/^\s*/)[0].length for line in html_lines)
                            .reduce((a,b) -> if a < b then a else b)

        # add each line to the table while adding tabs
        lineNumber = 1
        for line in html_lines
            [lineNumberStr, className] =
                if line.match /^\s*\/\//
                    ["" , "pseudocode-comment"]
                else
                    [lineNumber++, "pseudocode-text"]

            indent_num = Math.floor((line.match(/^\s*/)[0].length - minWhitespace) / 4 )
            indent = ("<span class=pseudocode-indent></span>" for [] in length:indent_num).join("")

            @$tbl.append(
                $("<tr>", {class: "pseudocode-line", "vamonos-linenumber": lineNumberStr}).append(
                    $("<td>", {class: "pseudocode-gutter"}),
                    $("<td>", {class: "pseudocode-line-number", text: lineNumberStr}),
                    $("<td>", {class: className, html: (indent + line) }),
                )
            )

        $container.html(@$tbl)


Common.VamonosExport { Widget: { Pseudocode } }
