const gulp = require('gulp')
const webserver = require('gulp-webserver')
const sass = require('gulp-sass')
const pug = require('gulp-pug')

const SASS_DIR = 'src/sass/**/*.sass'
const PUG_DIR = 'src/views/*.pug'

const DIST_DIR = 'dist'
const CSS_DIR = 'dist/css'

gulp.task('webserver', function() {
  gulp.watch(SASS_DIR, ['sass'])
  gulp.watch(PUG_DIR, ['pug'])
  gulp.src(DIST_DIR)
    .pipe(webserver({livereload: true}))
})

gulp.task('sass', function() {
  gulp.src(SASS_DIR)
    .pipe(sass({indentedSyntax: true}).on('error', sass.logError))
    .pipe(gulp.dest(CSS_DIR))
})

gulp.task('pug', function buildHTML() {
  gulp.src(PUG_DIR)
    .pipe(pug())
    .pipe(gulp.dest(DIST_DIR))
});
