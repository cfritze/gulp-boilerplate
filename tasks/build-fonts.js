const gulp        = require('gulp'),
    notify      = require("gulp-notify");

module.exports = function(gulp, config) {
gulp.task('build-fonts', function () {
    if (config.activateFontsBuild === true) {
        return gulp.src(config.fontsSrcPath)
            .pipe(gulp.dest(config.fontsDistPath))
            // You can comment this part out if you don't would like to have notifications on your desktop
            .pipe(notify('Fonts build'));
        }
    })
}
