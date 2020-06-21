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
 * @return {Object} state.global
 *    application state object
 */
const selectLanding = (state) => state.landing || initialState;

const makeSelectLanding = createSelector(selectLanding, (landingState) => ({
  trending: landingState.trending,
  loading: landingState.loading,
  error: landingState.error,
  page: landingState.page,
}));

// eslint-disable-next-line import/prefer-default-export
export { makeSelectLanding };
