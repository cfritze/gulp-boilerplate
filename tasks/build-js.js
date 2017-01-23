const gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat      = require('gulp-concat'),
	uglify      = require("gulp-uglify"),
    notify      = require("gulp-notify");
	copy 		= require("gulp-copy");
	rename 		= require("gulp-rename");

module.exports = function(gulp, config) {
    gulp.task('build-js', function () {
        if (config.activateJsBuild === true) {
            return gulp.src(config.jsSrcPath)
                .pipe(sourcemaps.init())
                .pipe(concat('bundle.js'))
				.pipe(gulp.dest(config.jsDistPath))
				.pipe(rename("bundle.min.js"))
				.pipe(uglify())
                //.pipe(sourcemaps.write())
                .pipe(gulp.dest(config.jsDistPath))
                // You can comment this part out if you don't would like to have notifications on your desktop
                .pipe(notify('JavaScript build and concatenated'));
        }
    });
}