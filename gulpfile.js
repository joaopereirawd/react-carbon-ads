'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass');
//sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
         gulp.src('src/scss/carbon.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        //.pipe(sourcemaps.write())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});



gulp.task('watch', function () {
    watch('src/scss/**/*.scss', function () {
        gulp.start('sass');
    });
});


gulp.task('default', ['sass', 'watch']);

