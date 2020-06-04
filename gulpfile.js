const GULP = require("gulp");
const GUTIL = require("gulp-util");
const GTS = require("gulp-typescript");
const GTSPROJ = GTS.createProject("tsconfig.json");
const CONCAT = require("gulp-concat");
const CLEAN = require("gulp-clean-css");
const AUTOPREFIXER = require("gulp-autoprefixer");

GULP.task("build-css", function (cb) {
  GULP.src("./src/CSS/root.css")
    .pipe(CONCAT("root.min.css"))
    .pipe(CLEAN())
    .pipe(
      AUTOPREFIXER({
        cascade: false,
      })
    )
    .pipe(GULP.dest("./dist/CSS/"))
    .on("error", GUTIL.log);
  cb();
});

GULP.task("build-ts", function () {
  var tsResult = GULP.src("./src/ts/**/*.ts").pipe(GTSPROJ());
  return tsResult.js.pipe(GULP.dest("./"));
});

GULP.task("build-html", function () {
  return GULP.src("./src/**/*.html").pipe(GULP.dest("./dist"));
});

 GULP.task("build-assets", function () {
  return GULP.src("./src/Assets/**/*.*").pipe(GULP.dest("./dist/Assets"));
});

GULP.task(
  "build-site",
  GULP.series(
    "build-css",
    function (cb) {
      GULP.watch("./src/CSS/root.css", GULP.series("build-css"));
      cb();
    },
    "build-html",
    function (cb) {
      GULP.watch("./src/**/*.html", GULP.series("build-html"));
      cb();
    },
    "build-ts",
    function (cb) {
      GULP.watch("./src/ts/**/*.ts", GULP.series("build-ts") );
      cb();
    },
    "build-assets",
    function (cb) {
      cb();
    }
  )
);
