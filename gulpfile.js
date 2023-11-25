var gulp = require('gulp'),
    uglify = require('gulp-uglify'), // 压缩js文件
    sass = require('gulp-sass'), // 编译sass
    cleanCSS = require('gulp-clean-css'), // 压缩css文件
    rename = require('gulp-rename'); // 文件重命名

//gulp.task('scripts', function(){
//    gulp.src('assets/js/index.js')
//        .pipe(uglify())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('assets/js'))
//});

//gulp.task('sass', function(){
//    gulp.src('assets/sass/app.scss')
//        .pipe(sass())
//        .pipe(gulp.dest('assets/sass'))
//        .pipe(cleanCSS())
//        .pipe(rename({suffix: '.min'}))
//        .pipe(gulp.dest('assets/css'));
//});

gulp.task('watch', function(){
//    gulp.watch('assets/sass/*.scss', ['sass']);
    gulp.watch('assets/css/*.css', ['css']);
	gulp.watch('assets/js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'css', 'watch']);