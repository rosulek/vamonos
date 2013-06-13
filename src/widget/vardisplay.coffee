class VarDisplay
    
    constructor: ({container, watch, showChanges}) ->
        @$container  = Vamonos.jqueryify(container)
        @showChanges = Vamonos.arrayify(showChanges ? "next")

        @watch = for v in Vamonos.arrayify(watch)
            name:  @varName(v)
            attrs: @attributes(v)

    event: (event, options...) -> switch event
        when "setup"
            [@stash, vis] = options

            @stash[v.name] ?= null for v in @watch

            @tblRows = {}
            @tblRows[v.name] = $("<tr>").append(
                $("<td>", {text: v.name}),
                $("<td>", {text: "="}),
                $("<td>", {text: ""})
            ) for v in @watch

            $table = $("<table>", {class: "var-watcher"})
            $table.append(@tblRows[v.name]) for v in @watch

            @$container.html($table)

        when "render"
            @showVars(options...)

        when "displayStop"
            @clear()

    varName: (str) ->
        str.match(/^\w+/)?[0]

    attributes: (str) ->
        str.match(/^\w+\[([\w,]+)\]/)?[1].split(/\s*,\s*/)

    showVars: (frame, type) ->
        for variable in @watch
            {name, attrs} = variable

            newval = unless frame[name]?
                "<i>undef</i>"
            else if attrs?
                vals = for attr in attrs 
                    if frame[name][attr]?
                        "#{attr}: #{Vamonos.rawToTxt(frame[name][attr])}"
                    else
                        "#{attr}: <i>undef</i>"
                "{ #{vals.join(", ")} }"
            else
                Vamonos.rawToTxt(frame[name])

            cell   = @tblRows[name].find("td:nth-child(3)")
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

    clear: ->
        e.find("td:nth-child(3)").html("") for v,e of @tblRows

    show: ->
        @$container.show() if @hidden
        @$container.slideDown()

Vamonos.export { Widget: { VarDisplay } }
