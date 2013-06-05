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

    setup: (args...) ->
        super(args)
        @vars._breakpoints = @breakpoints

    formatContainer: ($container) ->
        #get title, remove title
        title = $container.attr("title")
        $container.removeAttr("title")

        # get html as an array of lines, remove the html from div
        html_lines = $container.html().split(/\r\n|\r|\n/).filter((l) -> l.match /\S/)

        # create table
        $tbl = $("<table>", {class: "pseudocode"})

        # create title
        $tbl.append(
            $("<tr>", {class: "pseudocode-header"}).append(
                $("<td>", {class: "pseudocode-title", colspan: 3, text: title})
            )
        )

        # trim common space
        min = 21394189812938
        for line in html_lines
            ws = line.match(/^\s*/)[0].length
            min = ws if ws < min

        n = 1

        # add each line
        for line in html_lines
            [lineNumber, className] = 
                if line.match /^\s*\/\//
                    ["" , "pseudocode-comment"]
                else 
                    [n++, "pseudocode-text"]

            indent_num = Math.floor((line.match(/^\s*/)[0].length - min) / 4 )
            indent = ("<span class=pseudocode-indent></span>" for [] in length:indent_num).join("")

            $tbl.append(
                $("<tr>", {class: "pseudocode-line"}).append(
                    $("<td>", {class: "pseudocode-gutter"}),
                    $("<td>", {class: "pseudocode-line-number", text: lineNumber}),
                    $txt = $("<td>", {class: className}),
                )
            )
            
            $txt.append(indent + line)

        $container.html($tbl)


Common.VamonosExport { Interfacers: { Pseudocode } }
