/**
 * Module contains landing page sagas,
 *  loads trending movies for landing page
 *
 * @module containers/Landing/model/saga
 * @author Igor Ivanov
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from '../../../config/constants';
import requestTrending from '../../../service/tmdb/trending';

import { trendingLoaded, trendingLoadingError } from './actions';
import { LOAD_TRENDING } from './constants';

/**
 * Gets trending data, sets parameters for service request method if needed.
 * @param {Object} action
 *    action object, contains action type and payload data.
 * @see {@link module:service/tmdb/trending}
 */
export function* getTrending(action) {
  try {
    const results = yield call(requestTrending, {
      requestSet: {
        method: constants.HTTP_METHOD_GET,
        query: {
          page: action.page,
        },
      },
      timeWindow: 'week',
      mediaType: 'movie',
    });
    yield put(
      trendingLoaded({
        page: results.body.page,
        trending: results.body.results,
        pages: results.body.total_pages,
      }),
    );
  } catch (err) {
    yield put(trendingLoadingError(err));
  }
}

/**
 * Root app saga watcher.
 * Takes last API call result.
 * @type {function}
 */
function* trendingData() {
  yield takeLatest(LOAD_TRENDING, getTrending);
}

export default trendingData;
