// Webserver - just keep in mind, there is a livereload server who listen to port: 35729
const gulp  = require('gulp'),
    gls   = require('gulp-live-server');

module.exports = function(gulp, config) {
    gulp.task('serve', function () {
        if (config.activateWebServer === true) {
            var server = gls.static('build', 4000);
            server.start()
        }
    });
}