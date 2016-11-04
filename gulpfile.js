var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var del = require('del');

// 1. Concatinate js files and create final.js in dist folder
gulp.task('concat', function() {
  return gulp.src('js/*.js')
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('js'));
});

// 2. Minify js files
gulp.task('uglify', ['concat'], function() {
  return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

// 3. Compile sass file into css
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('/'))
    .pipe(gulp.dest('./css'));
});

// Watch task
gulp.task('watchFiles', function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('js/*.js',['concat']);
});

// Build task
gulp.task('build', ['uglify', 'sass'], function() {
  return gulp.src(['js/app.min.js', 'css/style.css'], {base:'./'})
    .pipe(gulp.dest('dist'));
});

// Clean task before build
gulp.task('clean', function() {
  return del(['dist','js/app*.js*','css']);
});

// Default gulp task
gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
