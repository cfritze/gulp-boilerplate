const gulp       = require('gulp'),
    sass        = require('gulp-sass'),
    notify      = require("gulp-notify"),
    sourcemaps  = require('gulp-sourcemaps'),
	rename      = require('gulp-rename'),
	cleanCSS    = require('gulp-clean-css');

module.exports = function(gulp, config) {
gulp.task('build-css', function () {
    if (config.activateCssBuild === true) {
        return gulp.src(config.scssSrcPath)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
			
			.pipe(gulp.dest(config.cssDistPath))
			.pipe(rename({
                suffix: '.min'
            }))
			.pipe(cleanCSS({ keepSpecialComments: 1, processImport: false }))
			.pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.cssDistPath))
            .pipe(notify('CSS build complete'));
        }
    })
}