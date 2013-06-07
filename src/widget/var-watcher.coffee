#_require ../common.coffee

class VarWatcher
    
    constructor: ({container, watch}) ->
        @$container = Common.jqueryify(container)
        @watch      = Common.arrayify(watch)
        @hidden     = yes
        @$container.hide()


    event: (event, options...) -> switch event
        when "setup"
            [@stash, vis] = options
            @stash[v] = null for v in @watch

        when "editStop"
            @stash[v] = null for v in @watch
            
        when "render"
            @showVars(options...)

        when "displayStart"
            @show()

        when "displayStop"
            @hide()

    showVars: (frame) ->
        @clear()
        $tbl = $("<table>")
        for v in @watch
            val = if frame[v]? then Common.rawToTxt(frame[v]) else "<i>undef</i>"
            $tbl.append("<tr><td><i>#{ v }</i></td><td> &nbsp=&nbsp #{ val } </td></tr>")
        @$container.html($tbl)

    clear: ->
        @$container.html("")

    hide: ->
        @$container.slideUp()

    show: ->
        @$container.show() if @hidden
        @$container.slideDown()



Common.VamonosExport { Widget: { VarWatcher } }
