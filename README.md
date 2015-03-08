# gulp-task-sass

Compiles [Sass](http://sass-lang.com/) to CSS using [gulp-sass](https://github.com/dlmanning/gulp-sass). Supports
source map generation using [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps).

## Install

`npm install --save mosaic-gulp-task-sass`

## Usage

To use this task in another repository, simply require it and pass it to `gulp.task` like so:

```javascript
var gulp = require("gulp");
var sass = require("mosaic-gulp-task-sass");

// Compile Sass files in the assets folder to the public folder
gulp.task("sass", function() {
  gulp.src("./assets/*.scss")
    .pipe(sass({
      sourceMaps: true
    }))
    .pipe(gulp.dest("./public"));
});
```

## License

MIT
