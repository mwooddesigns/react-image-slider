module.exports = function(grunt) {

	grunt.initConfig({
		"babel": {
			options: {
				plugins: ['transform-react-jsx'], // npm install babel-plugin-transform-react-jsx
				presets: ['es2015', 'react'] // npm install babel-preset-es2015 babel-preset-react
			},
			dist: {
				files: [{
					"expand": true,
					"cwd": "src/jsx/",
					"src": ["**/*.jsx"],
					"dest": "build/js",
					"ext": ".js"
				}]
			}
		},
		concat: {
	    options: {
	      separator: ';',
	    },
	    js: {
	      src: ['build/js/components/Slide.js', 'build/js/components/Slider.js'],
	      dest: 'dist/js/image-slider.js'
	    },
	  },
		min: {
			js: {
				src: "dist/js/image-slider.js",
				dest: "dist/js/image-slider.min.js"
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks("grunt-min");

	grunt.registerTask("default", ["babel", "concat", "min"]);
};
