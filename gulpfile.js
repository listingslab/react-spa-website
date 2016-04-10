/*
  gulpfile.js
  Listingslab's Gulp Build Process
*/
"use strict";

const gulp 		= require('gulp');
var del			= require('del');
var colors 		= require('colors');
var runSequence = require('run-sequence');

gulp.task('create_vendor', function() {
	console.log('Copying bootstrap & jquery to /public/vendor/'.green);
	gulp.src("node_modules/bootstrap/dist/**")
		.pipe(gulp.dest('public/vendor/bootstrap'))
	gulp.src("node_modules/jquery/dist/**")
		.pipe(gulp.dest('public/vendor/jquery'))
});

gulp.task('del_bootstrap', function () {
	return del('public/vendor/bootstrap/**');
});

gulp.task('del_jquery', function () {
	return del('public/vendor/jquery/**');
});

gulp.task('default',function (){
	console.log('Running Gulp'.cyanBG);
	runSequence(
		'del_bootstrap',
		'del_jquery',
		'create_vendor'
	);
	//gulp.watch('src/html/**', ['html']);
});
