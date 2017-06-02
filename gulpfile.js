var del = require('del');
var gulp = require('gulp');
var fs = require('fs');
var concat = require('gulp-concat');
var header = require('gulp-header');
var iife = require('gulp-iife');
var jsdoc = require('gulp-jsdoc3');
var replace = require('gulp-replace');
var jasmine = require('gulp-jasmine');

var config = {
	docs: './docs',
	dist: './dist',
	header: './src/_header.js',
	output: 'Panda_TripleTriad.js',
	sources: [
		'./src/_globals.js',
		'./src/Game_Board.js',
		'./src/_exports.js'
	],
	tests: './spec/*.js'
};

gulp.task('build', function() {
	return gulp.src(config.sources)
		.pipe(replace(/\/\*global.*\*\/(\r?\n)+/g, ''))
		.pipe(replace(/(.+)/g, '\t$1'))
		.pipe(concat(config.output))
		.pipe(replace(/(\r?\n)+$/g, ''))
		.pipe(iife({
			useStrict: false,
			trimCode: false,
			prependSemicolon: false
		}))
		.pipe(header(fs.readFileSync(config.header, 'utf8') + '\n'))		
		.pipe(gulp.dest(config.dist))
	;
});

gulp.task('test', ['build'], function() {
	gulp.src(config.tests)
		.pipe(jasmine())
	;
});

gulp.task('clean', function() {
	return del([
		config.docs + '/gen/*'
	]);
});

gulp.task('docs', ['clean'], function (cb) {
	var _params = {
		tags: {
			allowUnknownTags: true
		},
		opts: {
			destination: config.docs
		},
		plugins: [
			'plugins/markdown'
		],
		templates: {
			cleverLinks: false,
			monospaceLinks: false,
			default: {
				outputSourceFiles: true
			},
			path: 'ink-docstrap',
			theme: 'cerulean',
			navType: 'vertical',
			linenums: true,
			dateFormat: 'MMMM Do YYYY, h:mm:ss a'
		}
	};

	gulp.src(config.sources)
        .pipe(jsdoc(_params, cb))
	;
});

gulp.task('default', ['build']);
