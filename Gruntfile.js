module.exports = function(grunt) {
    grunt.initConfig({
        TemplatePath: "templates",
        StylePath: "css",
        watch: {
            sass: {
                files: "scss/*.scss",
                tasks: ['sass']
            }
        },
        sass: {
            dev: {
                files: {
                    "css/style.css" : "scss/style.scss"
                }
            }
        },

        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                        "css/*.css",
                        "*./*.html"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./",
                        styleDir: "css/",
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

        sprite:{
            all: {
                src: 'sprites/*.png',
                dest: 'destination/spritesheet.png',
                destCss: 'scss/_sprites.scss'
            }
        },

        htmlbuild: {
            dist: {
                src: 'templates/*.html',
                dest: './',
                options: {
                    beautify: true,
                    relative: true,
                    processFiles: true,
                    styles: {
                        st: '<%= StylePath %>/**/*.css',
                    },
                    sections: {
                        header: '<%= TemplatePath %>/common/header.html',
                        footer: '<%= TemplatePath %>/common/footer.html',
                        banner: '<%= TemplatePath %>/views/banner.html',
                        banner_pro: '<%= TemplatePath %>/views/banner_pro.html',
                        main: '<%= TemplatePath %>/views/main.html',
                        main_rec: '<%= TemplatePath %>/views/main_rec.html',
                        main_pro: '<%= TemplatePath %>/views/main_pro.html',
                        nav: '<%= TemplatePath %>/views/nav.html',
                    },
                    data: {
                        version: "0.1.0",
                        title: "test",
                    },
                }
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.registerTask('default',['browserSync', 'htmlbuild', 'watch']);
}