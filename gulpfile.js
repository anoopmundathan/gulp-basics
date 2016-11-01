var gulp = require('gulp');

gulp.task('task1', function() {
  console.log('gulp task1 completed');
});

gulp.task('task2', function() {
  console.log('gulp task2 completed');
});

gulp.task('default', ['task1','task2'], function() {
  console.log('all tasks completed');
});
