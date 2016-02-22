var gulp = require('gulp'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    imageop = require('gulp-image-optimization'),
    wiredep = require('wiredep').stream;
//Html
gulp.task('html', function () {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});
/*gulp.task('default', function () {
  return gulp.src('assets/templates/cci/css/*.css')
    //.pipe(concatCss("style.css"))
	.pipe(minifyCSS({keepBreaks:true}))
	.pipe(rename('style.min.css'))
    .pipe(gulp.dest('app/assets/templates/cci/css/'));
});*/
gulp.task('images', function(cb) {
    gulp.src(['app/assets/templates/cci/img/**/*'])
        .pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/assets/templates/cci/img')).on('end', cb).on('error', cb);
});
// Fonts
gulp.task('fonts', function() {
    return gulp.src([
                    'app/bower_components/components-font-awesome/fonts/fontawesome-webfont.*'])
            .pipe(gulp.dest('dist/fonts/'));
});
// Build
gulp.task('build', ['html', 'images', 'fonts']);

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
gulp.task('bower', function () {
  gulp.src('./app/index.html')
    .pipe(wiredep({
      directory:"app/bower_components"
    }))
    .pipe(gulp.dest('./app'));
});
gulp.task('watch', function(){
   gulp.watch('bower.json', ['bower']);   
});