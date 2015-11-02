var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./"
  });
  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("index.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/**/*.scss")
        .pipe(sass({
          errLogToConsole: true,
          includePaths: ['styles'].concat(neat)
        }))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);