{spawn, exec} = require 'child_process'
Rehab  = require 'rehab'

coffee_compiler = "tools/coffee"

###
#   cake build
#
#   concatenate all source files into a single coffee file and then compile.
#
#   resolves dependencies that are sigaled with the tag:
#       "#_require ./relative_location_of_filename.coffee"
###

compileAll = ->
    console.log "Building project from src/*.coffee to lib/vamonos.js"

    files = new Rehab().process('./src')

    to_single_file = "--join lib/vamonos.js"
    from_files     = "--compile #{files.join(' ')}"

    exec "#{coffee_compiler} #{ to_single_file } #{ from_files }",
         (err, stdout, stderr) ->
            console.log stdout
            throw err if err

    console.log "Compiling LESS to CSS"

    lessfile = './src/less/vamonos.less'
    csstarget = './lib/vamonos.css'

    exec "lessc #{ lessfile } #{ csstarget }", (err, stdout, stderr) ->
        console.log stdout
        throw err if err

task 'build', 'Build all coffeescript and less files to the lib directory', ->
    compileAll()

task 'watch', 'Automatically watch directories and recompile when changed', ->
    setInterval(compileIfChanged, 500)

mostRecentCompile = 0
compileIfChanged = ->
    exec "find src -printf '%T@\n' | sort -n | tail -1", (e, stdout, stderr) -> 
        time = parseFloat(stdout)
        if time > mostRecentCompile
            compileAll()
            mostRecentCompile = time 

                
        

