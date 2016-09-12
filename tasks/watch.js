const gulp = require('gulp');

module.exports = function(gulp) {
    gulp.task('watch', function () {
        gulp.watch('./source/**/*.html', ['build-html']);
		gulp.watch('./source/assets/fonts/**/*', ['build-fonts']);
        gulp.watch('./source/assets/scss/**/*.scss', ['build-css']);
        gulp.watch('./source/assets/js/**/*.js', ['build-js']);
        gulp.watch('./source/markdown/**/*.md', ['markdown-to-html']);
        gulp.watch('./source/images/**/*.png', ['image-optim']);
        gulp.watch('./source/images/**/*.jpg', ['image-optim']);
    });
}