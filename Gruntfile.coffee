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
                command: 'coffee tools/docgen.coffee > lib/vamonos-api.md'
            

    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-shell')

    grunt.registerTask('default', ['coffee', 'less', 'shell:docs'])
