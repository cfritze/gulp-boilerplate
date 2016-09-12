const gulp      = require('gulp'),
    imagemin  = require('gulp-imagemin'),
    pngquant  = require('imagemin-pngquant'),
    notify    = require("gulp-notify");

  module.exports = function(gulp, config) {
    gulp.task('image-optim', function() {
        if (config.activateImgBuild === true) {
            return gulp.src(config.imgSrcPath)
                .pipe(imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()]
                }))
                .pipe(gulp.dest(config.imgDistPath))
                .pipe(notify('Images optimized'));
        }
    });
}
