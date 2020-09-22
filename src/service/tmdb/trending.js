/**
 * Module contains methods to get trending data.
 *
 * @module service/tmdb/trending
 * @author Igor Ivanov
 */
import { view, __, prop, lensProp, either, pipe, always, path } from 'ramda';

import settings from '../../config/data';
import requestHelpers from '../../utils/request';

/**
 * URL request action path
 * @type {string}
 */
const basePath = 'trending';

/**
 * paramsMap description.
 * @typedef {object} module:service/tmdb/trending~paramsMap
 * @property {Array.<string>} options - list of possible options.
 * @property {string} defaultOption - default value prop.
 */

/**
 * Request properties map
 * @type {Object}
 * @property {module:service/tmdb/trending~paramsMap} mediaType
 * @property {module:service/tmdb/trending~paramsMap} timeWindow
 */
export const paramsMap = {
  mediaType: {
    options: ['all', 'movie', 'tv', 'person'],
    defaultOption: 'movie',
  },
  timeWindow: {
    options: ['day', 'week'],
    defaultOption: 'week',
  },
};

/**
 * Media type lens prop
 * @type {function}
 */
const mediaTypeLens = lensProp('mediaType');

/**
 * Time period lens prop
 * @type {function}
 */
const timeWindowLens = lensProp('timeWindow');

/**
 * Http request wrapper, adds type and time props and form request url.
 * @see {@link https://developers.themoviedb.org/3/trending/get-trending}
 *
 * @param {Object} params
 *  requesting trending content
 * @param {string} [params.mediaType = 'movie']
 *  fetching media type
 * @param {string} [params.timeWindow = 'week']
 *  view the trending list for the week or a day
 * @param {Object} [params.requestSet = {}]
 *  any additional request parameters
 *  @see {@link module:utils/request~createRequest}
 *
 * @return {Function} http request function
 */
function requestTrending(params = { requestSet: {} }) {
  const getValue = either(view(__, params), pipe(view(__, paramsMap), prop('defaultOption')));
  const querySet = either(path(['requestSet', 'query'], __), always({}));

  return requestHelpers.createRequest({
    ...params.requestSet,
    url: `${settings.net.tmdbUrl}/${basePath}/${getValue(mediaTypeLens)}/${getValue(timeWindowLens)}`,
    query: {
      api_key: process.env.TMDB_TOKEN,
      ...querySet(params),
    },
  });
}

export default requestTrending;
