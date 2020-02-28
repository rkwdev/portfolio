const gulp = require('gulp'),
    browserSync = require('browser-sync').create()

gulp.task('watch', async () => {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "src"
        }
    })

    // html files watching
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);

    // sass files watching
    gulp.watch('./src/assets/sass/**/*.scss', gulp.series('sass', 'cssInject'))

    // javascript files watching
    gulp.watch('./src/assets/js/**/*.js', gulp.series('scripts', 'jsRefresh'))
})

gulp.task('cssInject', async () => {
    return gulp.src('./src/temp/css/style.css')
        .pipe(browserSync.stream())
})

gulp.task('jsRefresh', async () => {
    browserSync.reload()
})