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

function bootstrap() {
    return gulp.src("dev/scss/bootstrap.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(rename('bootstrap.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("src/"))
}

function watch() {
    gulp.watch(["dev/scss/main.scss", "dev/scss/_variables.scss"], gulp.series('scss'));
    gulp.watch(["dev/scss/_variables.scss"], gulp.series('bootstrap'));
}

exports.scss = scss;
exports.bootstrap = bootstrap;
exports.watch = watch;

gulp.task('default', gulp.series(scss, bootstrap, watch));
gulp.task('build', gulp.series(scss, bootstrap));