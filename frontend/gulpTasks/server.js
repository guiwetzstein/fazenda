const gulp = require('gulp');
const webserver = require('gulp-webserver');

gulp.task('watch', (done) => {
    gulp.watch('app/**/*.html', gulp.task('app.html'));
    gulp.watch('app/**/*.css', gulp.task('app.css'));
    gulp.watch('app/**/*.js', gulp.task('app.js'));
    gulp.watch('assets/**/*.*', gulp.task('app.assets'));
    done();
});

gulp.task('server', gulp.series(['watch'], () => {
    return gulp
        .src('public')
        .pipe(webserver({
            livereload: true,
            port: 3000,
            open: true
        }))
}));
