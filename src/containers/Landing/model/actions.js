/**
 * Module contains landing page actions
 * @module containers/Landing/model/actions
 * @author Igor Ivanov
 */

import {
  LOAD_TRENDING,
  LOAD_TRENDING_SUCCESS,
  LOAD_TRENDING_ERROR,
  LOAD_TRENDING_NEXT_PAGE,
} from './constants';

/**
 * Load trending movies
 * @param  {number} page - page number to load
 * @return {Object}
 *    Returns an action object with action type
 */
export function loadTrending(page) {
  return {
    type: LOAD_TRENDING,
    page,
  };
}

/**
 * Dispatched when trending movies are loaded by saga
 *
 * @param  {Array.<Object>} results - results list
 * @return {object}
 *    Returns an action object with type and results
 */
export function trendingLoaded(results) {
  return {
    type: LOAD_TRENDING_SUCCESS,
    results,
  };
}

/**
 * Dispatched when loading fails
 *
 * @param  {object} error The error
 * @return {object}
 *     Returns an action object with type and error
 */
export function trendingLoadingError(error) {
  return {
    type: LOAD_TRENDING_ERROR,
    error,
  };
}

/**
 * Dispatches next trending page load.
 * @return {object}
 *     Returns an action object with type
 */
export function trendingNextPage() {
  return {
    type: LOAD_TRENDING_NEXT_PAGE,
  };
}
