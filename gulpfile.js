"use strict";

const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    jeditor = require('gulp-json-editor'),
    insert = require('gulp-insert'),
    settings = {
        version: '1.0.3',
        name: 'lski-console-shim'
    };

gulp.task('clean', () => {
    return del('./dist');
});

/**
 * Minify the code and add version comment
 */
gulp.task('js', () => {

    return gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(insert.prepend('/*! ' + settings.name + '-' + settings.version + ' */\n'))
        .pipe(gulp.dest('./dist'));
});

/**
 * Ensures the project name and the version number in settings files to match the dist
 */
gulp.task('version', function() {

    return gulp.src("./*.json")
        .pipe(jeditor(settings))
        .pipe(gulp.dest('./'));
});

/**
 * Run build
 */
gulp.task('default', ['clean','version'], () => {
    gulp.start('js');
});
