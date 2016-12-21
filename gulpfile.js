'use strict';

var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');


gulp.task('html', function(){
	gulp.src(['./src/js/**/*.html'])
		.pipe(gulp.dest('./www/js/'));
});

gulp.task('css', function(){
	gulp.src(['./src/css/**/*'])
		.pipe(gulp.dest('./www/css'));
});

gulp.task('img', function(){
	gulp.src(['./src/img/**/*'])
		.pipe(gulp.dest('./www/img'));
});

gulp.task('lib', function(){
	gulp.src(['./src/js/lib/**/*'])
		.pipe(gulp.dest('./www/js/lib'));
});

gulp.task('build', ['index', 'html', 'css', 'img', 'lib']);
