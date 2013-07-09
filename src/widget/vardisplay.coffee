class VarDisplay
    
    constructor: ({container, watch, showChanges}) ->
        @$container  = Vamonos.jqueryify(container)
        @showChanges = Vamonos.arrayify(showChanges ? "next")

        @watch = for v in Vamonos.arrayify(watch)
            name              = @varName(v)
            attrs             = @attributes(v)
            isDefaultWatchVar = /^\*/.test(v)
            {name, attrs, isDefaultWatchVar}

    event: (event, options...) -> switch event
        when "setup"
            [@viz] = options

            @viz.registerVariable(v.name) for v in @watch
            $table = $("<table>", {class: "var-display"})

            @$header = $("<tr>", {class: "header"})
                .append($("<td>", {colspan: 10, text: "Var Display"}))
            $table.append(@$header)

            @tblRows = {}
            for {name, attrs, isDefaultWatchVar} in @watch
                @viz.setWatchVar(name) if isDefaultWatchVar
                $row = $("<tr>").append($("<td>", {text: name, class: "var"}))
                $table.append($row)
                @tblRows[name] = $row

            @$container.html($table)
        
        when "editStart"
            @$header.children().html("Watch")
            for name, $r of @tblRows
                $box = $("<td class='checkbox'><input type='checkbox'></td>")
                $box.appendTo($r)
                if @viz.isWatchVar(name)
                    $box.children("input:checkbox").prop("checked", true) 

        when "editStop"
            for name, $r of @tblRows
                $box = $r.find("td.checkbox")
                if $box.find("input:checkbox").is(":checked")
                    @viz.setWatchVar(name)
                else
                    @viz.removeWatchVar(name)
                $box.remove()
                $r.children("td:eq(1)").text("=")

        when "displayStart"
            @$header.children().html("Variables")
            for {name, attrs} in @watch
                if @viz.isWatchVar(name)
                    @tblRows[name].addClass("watched-var")
                @tblRows[name].append([
                    $("<td>", {class: "equals", html: "&nbsp;=&nbsp;"})
                    $("<td>", {class: "val"})
                ])

        when "displayStop"
            for name, $r of @tblRows
                $r.removeClass("watched-var")
                $r.find("td.equals, td.val").remove()

        when "render"
            @showVars(options...)

    varName: (str) ->
        str.match(/^\*?([\w:]+)/)?[1]

    attributes: (str) ->
        str.match(/^\*?[\w:]+\[([\w,]+)\]/)?[1].split(/\s*,\s*/)

    showVars: (frame, type) ->
        for {name, attrs} in @watch
            if not frame[name]?
                newval = "<i>undef</i>" 
            else if attrs?[0] is "none" and attrs.length is 1
                @tblRows[name].find("td.equals").text("")
                newval = ""
            else if attrs?
                vals = for attr in attrs 
                    if frame[name][attr]?
                        "#{attr}: #{Vamonos.rawToTxt(frame[name][attr])}"
                    else
                        "#{attr}: <i>undef</i>"
                newval = "{ #{vals.join(", ")} }"
            else
                newval = Vamonos.rawToTxt(frame[name])

            cell   = @tblRows[name].find("td.val")
            oldval = cell.html()

            if newval isnt oldval and type in @showChanges
                @tblRows[name].addClass("changed")
                cell.html(newval)
                newrow = @tblRows[name].clone()
                @tblRows[name].replaceWith( newrow )
                @tblRows[name] = newrow
            else
                cell.html(newval)
                @tblRows[name].removeClass("changed")

    show: ->
        @$container.show() if @hidden
        @$container.slideDown()

Vamonos.export { Widget: { VarDisplay } }
