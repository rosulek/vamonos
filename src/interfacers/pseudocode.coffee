#_require ../common.coffee
#_require ./interfacer.coffee

class Pseudocode extends Interfacer

    constructor: ({container, @userBreakpoints, @breakpoints}) ->
        @formatContainer(Common.jqueryify(container))
        
    # if user breakpoints is set enable/disable clicking in the gutter
    # to the set breakpoints
    changeMode: (mode_str) ->
        return unless mode_str is 'input'
        @vars[name] = value for name, value of @obj

        #  clear highlighted line
        
    setup: (args...) ->
        super(args)
        @vars._breakpoints = @breakpoints

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

        minWhitespace = (line.match(/^\s*/)[0].length for line in html_lines)
                            .reduce((a,b) -> if a < b then a else b)

        lineNumber = 1

        # add each line
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


Common.VamonosExport { Interfacers: { Pseudocode } }
