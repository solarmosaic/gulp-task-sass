var assign = require("lodash.assign");
var combine = require("stream-combiner");
var sass = require("gulp-sass");
var sourceMaps = require("gulp-sourcemaps");

// Default options
var defaults = {
  precision: 10
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

  var enableSourceMaps = options.sourceMaps;
  // Don't pass this param through to gulp-sass
  delete options.sourceMaps;

  // Compile the Sass
  var output = sass(options);

  return combine(
    enableSourceMaps ? [
      sourceMaps.init(enableSourceMaps.init || {}),
      output,
      sourceMaps.write.apply(sourceMaps.write, enableSourceMaps.write || {})
    ] : [
      output
    ]);
};
