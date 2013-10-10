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
            tasks: ['coffee', 'less']

        shell:
            docs:
                command: 'coffee tools/docgen.coffee'
                options: { stderr: true, stdout: true }
            concat:
                command: 'cat deps/jquery.min.js deps/jquery-ui.min.js deps/jquery-jsplumb.js deps/jquery-qtip.min.js lib/vamonos.js > lib/vamonos-all.js'
                options: { stderr: true, stdout: true }
            tarConcat:
                command: 'tar czf lib/vamonos-all.tgz lib/vamonos-all.js lib/vamonos.css'
                options: { stderr: true, stdout: true }
            tarWithDeps:
                command: 'tar czf lib/vamonos-with-deps.tgz deps/jquery.min.js deps/jquery-ui.min.js deps/jquery-jsplumb.js deps/jquery-qtip.min.js lib/vamonos.js lib/vamonos.css'
                options: { stderr: true, stdout: true }
            tarDemos:
                command: 'tar czf lib/vamonos-demos.tgz demos/* lib/vamonos-all.js lib/vamonos.css'
                options: { stderr: true, stdout: true }
            tarJustVamonos:
                command: 'tar czf lib/vamonos.tgz demos/* lib/vamonos.js lib/vamonos.css'
                options: { stderr: true, stdout: true }

    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-shell')

    grunt.registerTask('default', ['coffee', 'less', 'shell:docs', 'shell:concat'])

    grunt.registerTask('tars', ['coffee','less','shell:concat','shell:tarConcat','shell:tarWithDeps','shell:tarDemos','shell:tarJustVamonos'])
