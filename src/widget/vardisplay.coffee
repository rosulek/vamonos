#_require ../common.coffee

class VarDisplay
    
    constructor: ({container, watch, showChanges}) ->
        @$container  = Common.jqueryify(container)
        @watch       = Common.arrayify(watch)
        @showChanges = Common.arrayify(showChanges ? "next")

    event: (event, options...) -> switch event
        when "setup"
            [@stash, vis] = options

            @stash[v] ?= null for v in @watch

            @tblRows = {}
            @tblRows[variable] = $("<tr>").append(
                $("<td>", {text: variable}),
                $("<td>", {text: "="}),
                $("<td>", {text: ""})
            ) for variable in @watch

            $table = $("<table>", {class: "var-watcher"})
            $table.append(row) for _, row of @tblRows

            @$container.html($table)

        when "render"
            @showVars(options...)

        when "displayStop"
            @clear()

    showVars: (frame, type) ->
        for v in @watch
            newval = if frame[v]? then Common.rawToTxt(frame[v]) else "<i>undef</i>"
            cell   = @tblRows[v].find("td:nth-child(3)")
            oldval = cell.html()
            if newval isnt oldval and type in @showChanges
                @tblRows[v].addClass("changed")
                cell.html(newval)
                newrow = @tblRows[v].clone()
                @tblRows[v].replaceWith( newrow )
                @tblRows[v] = newrow
            else
                cell.html(newval)
                @tblRows[v].removeClass("changed")

    clear: ->
        e.find("td:nth-child(3)").html("") for v,e of @tblRows

    show: ->
        @$container.show() if @hidden
        @$container.slideDown()



Common.VamonosExport { Widget: { VarDisplay } }
