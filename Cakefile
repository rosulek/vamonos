{exec} = require 'child_process'
Rehab  = require 'rehab'

###
#   cake build
#
#   concatenate all source files into a single coffee file and then compile.
#
#   resolves dependencies that are sigaled with the tag:
#       "#_require ./relative_location_of_filename.coffee"
###
task 'build', 'Build single application file from source files', ->
    console.log "Building project from src/*.coffee to lib/vamonos.js"

    files = new Rehab().process('./src')

    to_single_file = "--join lib/vamonos.js"
    from_files     = "--compile #{files.join(' ')}"

    exec "coffee #{ to_single_file } #{ from_files }", (err, stdout, stderr) ->
        throw err if err

    console.log "Compiling LESS to CSS"

    lessfile = './src/less/vamonos.less'
    csstarget = './lib/vamonos.css'

    exec "lessc #{ lessfile } #{ csstarget }", (err, stdout, stderr) ->
        throw err if err
