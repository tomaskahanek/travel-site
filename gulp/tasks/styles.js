var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('css', function(){
    return gulp.src('./app/assets/css/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars,nested, autoprefixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/css'));
});