const gulp = require('gulp'),
    config = require('./config.json');

require(config.tasksPath + '/webserver')(gulp, config) // Webserver and livereloader
require(config.tasksPath + '/build-js')(gulp, config); // JS Build
require(config.tasksPath + '/build-css')(gulp,config); // CSS Build
require(config.tasksPath + '/build-html')(gulp, config); // HTML Build
require(config.tasksPath + '/build-fonts')(gulp, config); // Fonts Build
require(config.tasksPath + '/build-images')(gulp, config);// Image optimization
require(config.tasksPath + '/watch')(gulp, config);  //watcher


// Default Task Triggers Watch
    gulp.task('default', ['serve', 'build-html', 'build-fonts', 'build-css', 'build-js', 'image-optim', 'watch'], function() {
        gulp.start('watch');
});






