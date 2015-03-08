var assign = require("lodash.assign");
var combine = require("stream-combiner");
var sass = require("gulp-sass");
var sourceMaps = require("gulp-sourcemaps");

// Default options
var defaults = {
  // @see https://github.com/twbs/bootstrap-sass#sass-number-precision
  precision: 8
};

/**
 * Compile Sass files to CSS using gulp-sass.
 *
 * @see https://github.com/dlmanning/gulp-sass
 * @see https://github.com/floridoo/gulp-sourcemaps
 *
 * @param {String} [options] Configuration options. Will be passed through to gulp-sass.
 * @param {Boolean|Object} [options.sourceMaps] Set to true or provide an options object to enable source maps.
 * @param {Object} [options.sourceMaps.init] Options to pass to sourceMaps.init()
 * @param {Array|Object|String} [options.sourceMaps.write] Options to pass to sourceMaps.write()
 */
module.exports = function(options) {
  options = assign(defaults, options);

  var sm = options.sourceMaps;
  if (typeof sm !== "object") {
    sm = {};
  }

  // Don't pass this param through to gulp-sass
  delete options.sourceMaps;

  // Sass output stream
  var output = sass(options);

  return combine(
    sm ? [
      sourceMaps.init(sm.init),
      output,
      sourceMaps.write.apply(null, Array.isArray(sm.write) ? sm.write : [sm.write])
    ] : [
      output
    ]);
};
