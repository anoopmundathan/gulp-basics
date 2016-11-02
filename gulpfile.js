var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Path
var destJSPath = 'dist/js';
var destCSSPath = 'dist/css';

// This gulp task will do the following
// 1. concatinate js files and create final.js in dist folder
// 2. rename final.js to final-min.js
// 3. uglify the js file
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(concat('final.js'))
    .pipe(gulp.dest(destJSPath))
    .pipe(rename('final-min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(destJSPath));
});

// Compile sass file into css
gulp.task('sass', function() {
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(destCSSPath));
});

// Default gulp task
gulp.task('default', ['scripts','sass'], function() {
  console.log('All gulp tasks are completed');
});
