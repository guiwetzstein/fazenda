const gulp = require('gulp');
const util = require('gulp-util');

require('./gulpTasks/app');
require('./gulpTasks/deps');
require('./gulpTasks/server');

if (util.env.production) {
    gulp.task('default', gulp.series('deps', 'app'));
} else {
    gulp.task('default', gulp.series('deps', 'app', 'server'));
}
