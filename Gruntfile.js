module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    sourcemap: false,
                    compress: false,
                    yuicompress: false,
                    style: 'expanded',
                    lineNumbers: true
                    // browsers: ['last 2 versions', 'ie 9']
                },
                files: {
                    'css/style.css' : 'scss/style.scss',
                    'css/layout.css' : 'scss/layout.scss'
                }
            },
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },

        watch: {
            sass: {
                files: "scss/*.scss",
                tasks: ['sass']
            }
        },

        htmlbuild: {
            dist: {
                src: 'index.html',
                dest: 'samples/',
                options: {
                    beautify: true,
                    prefix: '//some-cdn',
                    relative: true,
                    basePath: false,
                    scripts: {
                        bundle: [
                            '<%= fixturesPath %>/js/*.js',
                            '!**/main.js',
                        ],
                        main: '<%= fixturesPath %>/js/main.js'
                    },
                    styles: {
                        bundle: [
                            '<%= fixturesPath %>/css/libs.css',
                            '<%= fixturesPath %>/css/dev.css'
                        ],
                        test: '<%= fixturesPath %>/css/inline.css'
                    },
                    sections: {
                        views: '<%= fixturesPath %>/views/**/*.html',
                        templates: '<%= fixturesPath %>/templates/**/*.html',
                        layout: {
                            header: '<%= fixturesPath %>/layout/header.html',
                            footer: '<%= fixturesPath %>/layout/footer.html'
                        }
                    },
                    data: {
                        // Data to pass to templates
                        version: "0.1.0",
                        title: "html-builder",
                    },
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default',['browserSync', 'watch', 'htmlbuild']);
}