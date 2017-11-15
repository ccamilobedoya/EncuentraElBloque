// Thanks to https://github.com/superhighfives/harp-gulp-browsersync-boilerplate

var gulp        = require('gulp');
var spawn = require('child_process').spawn,
    node;


gulp.task('serve', function () {
  if (node) node.kill()
  node = spawn('node', ['./index.js'], {stdio: 'inherit'})
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.watch(['./index.js', './routes/*.*', './public/*/*.*', './views/*.*'], ['serve']);


gulp.task('default', ['serve']);
