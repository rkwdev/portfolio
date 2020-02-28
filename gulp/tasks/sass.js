const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer')

gulp.task('sass', async () => {
    return gulp.src('./src/assets/sass/style.scss')
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(postcss([autoprefixer]))
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(gulp.dest('./src/temp/css'))
})