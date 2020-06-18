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

const makeSelectTrending = createSelector(selectLanding, (landingState) => landingState.trending);

const makeSelectLoading = createSelector(selectLanding, (landingState) => landingState.loading);

const makeSelectError = createSelector(selectLanding, (landingState) => landingState.error);

const makeSelectPage = createSelector(selectLanding, (landingState) => landingState.page);

export { makeSelectLoading, makeSelectError, makeSelectTrending, makeSelectPage };
