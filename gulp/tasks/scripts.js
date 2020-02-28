const gulp = require('gulp'),
    webpack = require('webpack')

gulp.task('scripts', async () => {
    webpack(require('../../webpack.config'), async (err, stats) => {
        if (err) {
            console.log(err.toString())
        }
        console.log(stats.toString())
    })
})