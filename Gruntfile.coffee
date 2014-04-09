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
            vamonos:
                files:
                    'lib/<%= pkg.name %>-demos.css' : 'src/less/vamonos-demos.less'
                    'lib/<%= pkg.name %>.css' : 'src/less/vamonos.less'

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
                command: "cat header-all.js deps/jquery.min.js deps/jquery-ui.min.js " +
                         "deps/jquery-qtip.min.js " +
                         "deps/jquery.ui.touch-punch.js lib/vamonos.js " +
                         "deps/d3.min.js " +
                         "> lib/vamonos-all.js"
                options: { stderr: true, stdout: true }
            zip:
                command: """
                    mkdir -p lib/vamonos
                    cat generic-readme.txt dist-readme.txt > lib/vamonos/readme.txt
                    cd lib
                    cp vamonos.js vamonos-all.js vamonos.css vamonos
                    cp -r ../deps vamonos
                    zip -r vamonos.zip vamonos
                    rm -r vamonos
                    [ ! -e '../dist' ] && mkdir ../dist
                    mv vamonos.zip ../dist
                    echo created file dist/vamonos.zip
                    """
                options: { stderr: true, stdout: true }

            demos:
                command: """
                    mkdir -p lib/vamonos-demos
                    cat generic-readme.txt demos-readme.txt > lib/vamonos-demos/readme.txt
                    for DEMO in demos/*
                        do tools/inline.pl $DEMO > lib/vamonos-demos/$(basename $DEMO)
                    done
                    cd lib
                    zip -r vamonos-demos.zip vamonos-demos
                    rm -r vamonos-demos
                    [ ! -e '../dist' ] && mkdir ../dist
                    mv vamonos-demos.zip ../dist
                    echo created file dist/vamonos.zip
                    """
                options: { stderr: true, stdout: true }

    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-shell')

    grunt.registerTask('default', ['coffee', 'less', 'shell:header', 'shell:docs', 'shell:concat'])

    grunt.registerTask('release', ['coffee','less', 'shell:header', 'shell:concat','shell:zip', 'shell:demos'])
