var gulp = require("gulp");
var sass = require("./index");

// Compile Sass files in the assets folder to the public folder
gulp.task("sass", function() {
  gulp.src("./assets/*.scss")
    .pipe(sass({
      sourceMaps: true
    }))
    .pipe(gulp.dest("./public"));
});
