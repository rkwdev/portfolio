const gulp = require("gulp");

gulp.task("fonts", function() {
    return gulp
        .src("node_modules/@fortawesome/fontawesome-free/webfonts/*")
        .pipe(gulp.dest("./src/assets/webfonts"));
});
