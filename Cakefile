{exec} = require 'child_process'
Rehab  = require 'rehab'

task 'build', 'Build single application file from source files', ->
    console.log "Building project from src/*.coffee to lib/vamonos.js"

    files = new Rehab().process('./src')

    to_single_file = "--join lib/vamonos.js"
    from_files = "--compile #{files.join(' ')}"

    exec "coffee #{ to_single_file } #{ from_files }", (err, stdout, stderr) ->
        throw err if err
