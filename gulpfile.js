var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
	rename = require("gulp-rename"),
	minifyCSS = require('gulp-minify-css');

gulp.task('default', function () {
  return gulp.src('assets/templates/cci/css/*.css')
    .pipe(concatCss("style.css"))
	.pipe(minifyCSS({keepBreaks:true}))
	.pipe(rename('style.min.css'))
    .pipe(gulp.dest('app/assets/templates/cci/css/'));
});