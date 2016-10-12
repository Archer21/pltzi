var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nib = require('nib')
var browserify = require('browserify')
var babel = require('babelify')
var source = require('vinyl-source-stream')
var rename = require('gulp-rename')
var watchify = require('watchify')

gulp.task('assets', function () {
  gulp.src('assets/*')
      .pipe(gulp.dest('public'))
})

gulp.task('styles', function () {
  gulp.src('src/client/index.styl')
     .pipe(stylus({
       use: [nib()]
     }))
     .pipe(rename('app.css'))
     .pipe(gulp.dest('public'))
})

function compile (watch) {
  var bundle = browserify('./src/client/index.js', {debug: true})

  if (watch) {
    bundle = watchify(bundle)
    bundle.on('update', function () {
      console.log('--> Bundling...')
      rebundle()
    })
  }

  function rebundle () {
    bundle.transform(babel, {presets: ['es2015']})
      .bundle()
      .on('error', function (err) {
        return console.log(err); this.emit('end')
      })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }

  rebundle()
}

gulp.task('build', function () {
  return compile()
})

gulp.task('watch', function () {
  return compile(true)
})

gulp.task('default', ['assets', 'styles', 'build'])

