module.exports = function(grunt) {

	grunt.initConfig({
		concat: {
			
			dist: {
				src: ['styles/variables.scss', 'styles/mixin.scss', 'styles/reset.scss', 'styles/style_320px.scss', 'styles/style_768px.scss', 'styles/style_1440px.scss'],
				dest: 'styles/main.scss',
			}
		},
		uglify: {
			dist: {
				src: ['js/dist/script.main.js'],
				dest: 'js/dist/script.main.min.js'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'styles',
					src: ['*main.scss'],
					dest: 'styles',
					ext: '.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['styles/*.scss'],
				tasks: ['concat', 'sass']
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['concat', 'uglify', 'sass']);


};