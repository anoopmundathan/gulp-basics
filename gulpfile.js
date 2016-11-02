var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(concat('final.js'))
    .pipe(gulp.dest('dist/'))
    .pipe(rename('final-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass', function() {
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['scripts','sass'], function() {
  console.log('all tasks completed');
});
