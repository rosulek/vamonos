module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON('package.json')

        coffee:
            files: 
                src: [
                    'src/vamonos.coffee'
                    'src/data-structure/*'
                    'src/*.coffee'
                    'src/**/*.coffee'
                ]
                dest: 'lib/<%= pkg.name %>.js'
            options:
                join: true

        less:
            files:
                src: ['src/**/*.less']
                dest: 'lib/<%= pkg.name %>.css'

        watch:
            files: ['src/**/*']
            tasks: ['coffee', 'less', 'shell:concat', 'shell:docs']

        shell:
            header:
                command: "cat header.js lib/vamonos.js > temp; mv temp lib/vamonos.js"

            docs:
                command: 'coffee tools/docgen.coffee'
                options: { stderr: true, stdout: true }
            concat:
                command: "cat header.js deps/jquery.min.js deps/jquery-ui.min.js deps/jquery-jsplumb.js deps/jquery-qtip.min.js lib/vamonos.js > lib/vamonos-all.js"
                options: { stderr: true, stdout: true }
            zip:
                command: """
                    cd lib
                    mkdir vamonos
                    cp vamonos-all.js vamonos.css vamonos
                    zip -r vamonos.zip vamonos
                    rm -r vamonos
                    [ ! -e '../dist' ] && mkdir ../dist
                    mv vamonos.zip ../dist
                    echo created file dist/vamonos.zip
                    """
                options: { stderr: true, stdout: true }

    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-shell')

    grunt.registerTask('default', ['coffee', 'less', 'shell:header', 'shell:docs', 'shell:concat'])

    grunt.registerTask('release', ['coffee','less', 'shell:header', 'shell:concat','shell:zip'])
