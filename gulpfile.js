var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var minifyCSS = require('gulp-clean-css');

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('scss', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/'))
        .pipe(connect.reload())
});

gulp.task('html', function(){
    gulp.src('./**/*.html')
        // .pipe(gulp.dest('./'))
        .pipe(connect.reload())
})

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['scss']);
    gulp.watch('./**/*.html', ['html'])
});
gulp.task('default', ['connect', 'watch']);