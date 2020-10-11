/**
 * Module contains main global state selectors
 * @module containers/App/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from 'reselect';

import { initialState } from './reducer';

/**
 * Landing state selector.
 *
 * @param {Object} state - application state object.
 * @return {Object} state.landing
 *    Landing page state object
 */
const selectLanding = (state) => state.landing || initialState;

/**
 * Summary content selector.
 *
 * @param {Object} state - application state object.
 * @return {Object} state.landing.summary
 *    Landing page summary state object
 */
const selectSummary = (state) => state.landing.summary || initialState.summary;

const makeSelectLanding = createSelector(selectLanding, (landingState) => ({
  trending: landingState.trending,
  loading: landingState.loading,
  error: landingState.error,
  page: landingState.page,
}));

// eslint-disable-next-line import/prefer-default-export
export { makeSelectLanding, selectSummary };
