// deployment to github or githubpages - if you would like to run it, just use: gulp deploy
const gulp    = require('gulp'),
    deploy  = require('gulp-gh-pages');

module.exports = function(gulp, config) {
    if (config.activateDeployment === true ) {
        var options = {
            remoteUrl: 'your-github-repo-here ',
            branch: 'master'};
        gulp.task('deploy', function () {
            gulp.src(config.mdDistPath)
                .pipe(deploy(options));
        });
    }
}
