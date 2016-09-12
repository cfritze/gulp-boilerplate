const gulp        = require('gulp'),
    notify      = require("gulp-notify");

module.exports = function(gulp, config) {
gulp.task('build-html', function () {
    if (config.activateHtmlBuild === true) {
        return gulp.src(config.htmlSrcPath)
            .pipe(gulp.dest(config.htmlDistPath))
            // You can comment this part out if you don't would like to have notifications on your desktop
            .pipe(notify('Html build'));
        }
    })
}
