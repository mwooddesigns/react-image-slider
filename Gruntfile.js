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
		webpack: {
			options: require("./webpack.config.js"),
			prod: {

			},
		},
		min: {
			js: {
				src: "dist/js/slider.js",
				dest: "dist/js/slider.min.js"
			}
		}
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-webpack');
	grunt.loadNpmTasks("grunt-min");

	grunt.registerTask("default", ["babel", "webpack", "min"]);
};
