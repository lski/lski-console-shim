var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    del = require('del');

gulp.task('clean', function(cb) {
    del('dist', cb);
});

gulp.task('js', function() {

    return gulp.src('src/*.js')
        .pipe(uglify({ preserveComments: 'some' }))
        .pipe(gulp.dest('dist'));
});
              
gulp.task('default', ['clean'], function() {
    gulp.start('js');
});