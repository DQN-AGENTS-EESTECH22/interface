const gulp = require('gulp');
const rename = require('gulp-rename')
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));

// Compile sass into CSS & auto-inject into browsers
function scss() {
    return gulp.src("dev/scss/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename('main.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("app/dist/"))
        .pipe(browserSync.stream());
}

// Static Server + watching scss/html files
function watch() {
    browserSync.init({
        server: "./app/"
    });

    gulp.watch("dev/scss/*.scss", gulp.series('scss'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
}

exports.scss = scss;
exports.watch = watch;

gulp.task('default', gulp.series(scss, watch));