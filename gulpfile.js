/*
  gulpfile.js
  Listingslab's Gulp Build Process
*/
"use strict";

const gulp 		= require('gulp');
var del			= require('del');
var colors 		= require('colors');
var runSequence = require('run-sequence');

gulp.task('create_lib', function() {
	console.log('Copying bootstrap & jquery to /public/lib/'.green);
	gulp.src("node_modules/bootstrap/dist/**")
		.pipe(gulp.dest('public/lib/bootstrap'))
	gulp.src("node_modules/jquery/dist/**")
		.pipe(gulp.dest('public/lib/jquery'))
});

gulp.task('del_bootstrap', function () {
	return del('public/lib/bootstrap/**');
});

gulp.task('del_jquery', function () {
	return del('public/lib/jquery/**');
});

gulp.task('default',function (){
	console.log('Running Gulp'.cyanBG);
	runSequence(
		'del_bootstrap',
		'del_jquery',
		'create_lib'
	);
	//gulp.watch('src/html/**', ['html']);
});
