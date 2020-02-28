const gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create()

gulp.task('previewDist', async () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }
    })
})

gulp.task('deleteDistFolder', async () => {
    return del('./dist')
})

gulp.task('copyGeneralFiles', async () => {
    const pathsToCopy = [
        './src/**/*',
        '!./src/**/*.html',
        '!./src/assets/images/**/*',
        '!./src/assets/sass/**',
        '!./src/assets/js/**',
        '!./src/temp',
        '!./src/temp/**'
    ]
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest('./dist'))
})

gulp.task('optimizeImages', async () => {
    return gulp.src('./src/assets/images/**/*')
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('usemin', async () => {
    return gulp.src('./src/**/*.html')
        .pipe(usemin({
            css: [() => rev(), () => cssnano()],
            js: [() => rev(), () => uglify()]
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('build', gulp.series('deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin', 'previewDist'))