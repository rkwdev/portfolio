const gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    del = require("del"),
    usemin = require("gulp-usemin"),
    rev = require("gulp-rev"),
    cssnano = require("gulp-cssnano"),
    uglify = require("gulp-uglify"),
    browserSync = require("browser-sync").create();

gulp.task("deleteDistFolder", async () => {
    return del("./dist");
});

gulp.task("copyGeneralFiles", async () => {
    const pathsToCopy = [
        "./src/**/*",
        "!./src/**/*.html",
        "!./src/assets/images/**/*",
        "!./src/assets/sass/**",
        "!./src/assets/css/**",
        "!./src/assets/js-modules/**",
        "!./src/assets/js/**",
        "!./src/assets/webfonts/**"
        // "!./src/temp",
        // "!./src/temp/**"
    ];
    return gulp.src(pathsToCopy).pipe(gulp.dest("./dist"));
});

gulp.task("copyOtherAssets", async () => {
    const pathsToCopy = ["./src/assets/webfonts/*"];
    return gulp.src(pathsToCopy).pipe(gulp.dest("./dist/assets/webfonts"));
});

gulp.task("optimizeImages", async () => {
    return gulp
        .src("./src/assets/images/**/*")
        .pipe(
            imagemin({
                progressive: true,
                interlaced: true,
                multipass: true
            })
        )
        .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", async () => {
    return gulp
        .src("./src/**/*.html")
        .pipe(
            usemin({
                css: [() => rev(), () => cssnano()],
                js: [() => rev(), () => uglify()]
            })
        )
        .pipe(gulp.dest("./dist"));
});

gulp.task(
    "build",
    gulp.series(
        "deleteDistFolder",
        "copyGeneralFiles",
        "copyOtherAssets",
        "optimizeImages",
        "usemin"
    )
);
