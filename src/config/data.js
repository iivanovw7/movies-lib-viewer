/**
 * Module contains main application configuration.
 * @module config/styles
 */

import { DARK_THEME } from './constants';

const settings = {
  /**
   * Log level, can be set to below options:
   *  - error [default, only errors]
   *   - debug [all levels]
   *   - off   [no logging]
   * @type {string}
   */
  logLevel: 'error',
  /**
   * Theme config.
   * @type {string}
   */
  theme: DARK_THEME,
  /**
   * Locale config.
   * @type {string}
   */
  locale: 'en',
  /**
   * Network config.
   * @type {Object}
   */
  net: {
    /**
     * Base the movie db API url.
     * @type {string}
     */
    tmdbUrl: 'https://api.themoviedb.org/3',
    /**
     * Base the movie db API image url.
     * @type {string}
     */
    tmdbImageUrl: 'https://image.tmdb.org',
    /**
     * Default request timeout.
     * @type {number}
     */
    requestTimeout: 10000,
  },
};

/**
 *  Sets application debugger in 'errors only' mode if started in production (development) mode.
 *
 *  @param {object} object
 *      initial settings.
 *  @param {string} mode
 *      application mode, defined during build by webpack.
 *  @returns {void} - adds modifications before exporting variable.
 *
 */
(function merge(object, mode) {
  const config = {};

  if (mode === 'test') {
    config.logLevel = 'off';
  }
  if (mode === 'development') {
    config.logLevel = 'debug';
  }

  Object.assign(object, config);
  // eslint-disable-next-line no-undef
})(settings, CONFIG);

export default settings;
