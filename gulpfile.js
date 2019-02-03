var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('css', function(){
    return gulp.src('./app/assets/css/styles.css')
        .pipe(postcss([cssImport, cssvars,nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/css'));
});

gulp.task('watch', function(){
    watch('./app/assets/**/*.css', function(){
        gulp.start('css');
    });
});