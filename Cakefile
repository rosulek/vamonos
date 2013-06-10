{exec} = require 'child_process'
Rehab  = require 'rehab'

###
#   cake build
#
#   concatenate all source files into a single coffee file and then compiles.
#
#   resolves dependencies that are sigaled with the tag:
#       "#_require ./relative_location_of_filename.coffee"
###

compileAll = ->
    console.log "Building project..."

    files = new Rehab().process('./src')

    coffee_compiler = "tools/coffee"
    output_js   = "lib/vamonos.js"
    coffeefiles = files.join(' ')

    exec "#{coffee_compiler} --join #{ output_js } --compile #{ coffeefiles }",
        (err, stdout, stderr) -> throw err if err

    console.log "...compiled lib/vamonos.js"

    less_compiler   = "tools/lessc"
    lessfile = './src/less/vamonos.less'
    csstarget = './lib/vamonos.css'

    exec "#{less_compiler} #{ lessfile } #{ csstarget }",
        (err, stdout, stderr) -> throw err if err

    console.log "...compiled lib/vamonos.css"


lastCompile = 0
compileIfChanged = ->
    exec "find src -printf '%T@\n' | sort -n | tail -1", 
        (e, stdout, stderr) -> 
            modDate = parseFloat(stdout)
            if modDate > lastCompile
                compileAll()
                mostRecentCompile = time 


task 'build', 'Build all coffeescript and less files to the lib directory', ->
    compileAll()

task 'watch', 'Automatically watch directories and recompile when changed', ->
    setInterval(compileIfChanged, 500)
