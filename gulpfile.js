var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('task1', function() {
  console.log('gulp task1 completed');
});

gulp.task('task2', function() {
  console.log('gulp task2 completed');
});

gulp.task('default', ['task1','task2','scripts'], function() {
  console.log('all tasks completed');
});
