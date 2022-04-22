const gulp = require('gulp');
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));

function scss() {
    return gulp.src("dev/scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("src/"))
}

function watch() {
    gulp.watch("dev/scss/*.scss", gulp.series('scss'));
}

exports.scss = scss;
exports.watch = watch;

gulp.task('default', gulp.series(scss, watch));
gulp.task('build', gulp.series(watch));