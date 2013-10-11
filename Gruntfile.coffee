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
            docs:
                command: 'coffee tools/docgen.coffee'
                options: { stderr: true, stdout: true }
            concat:
                command: 'cat deps/jquery.min.js deps/jquery-ui.min.js deps/jquery-jsplumb.js deps/jquery-qtip.min.js lib/vamonos.js > lib/vamonos-all.js'
                options: { stderr: true, stdout: true }
            tar:
                command: """
                    cd lib
                    mkdir vamonos-all
                    cp vamonos-all.js vamonos.css vamonos-all
                    tar czf vamonos-all.tgz vamonos-all
                    rm -r vamonos-all
                    echo created file lib/vamonos-all.tgz
                    """
                options: { stderr: true, stdout: true }

    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-shell')

    grunt.registerTask('default', ['coffee', 'less', 'shell:docs', 'shell:concat'])

    grunt.registerTask('release', ['coffee','less','shell:concat','shell:tar'])
