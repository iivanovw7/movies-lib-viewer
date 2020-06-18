/**
 * Module contains landing page
 * @module containers/Landing/model/reducer
 * @author Igor Ivanov
 */
import produce from 'immer';

import {
  LOAD_TRENDING,
  LOAD_TRENDING_SUCCESS,
  LOAD_TRENDING_ERROR,
  LOAD_TRENDING_NEXT_PAGE,
  LOAD_TRENDING_LIMIT,
} from './constants';

export const initialState = {
  offset: 0,
  desired: 0,
  active: 0,
  loading: false,
  error: null,
  trending: [],
  page: 1,
  pages: 0,
};

/* eslint-disable default-case, no-param-reassign */
/**
 * Landing page state reducer.
 * @param {Object} state
 *    current application state
 * @param {Object} action
 *    action object, contains action type and payload data.
 * @return {Function} produce
 *    Function for application state modification.
 */
const landingPageReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_TRENDING:
        draft.loading = true;
        draft.error = null;
        break;
      case LOAD_TRENDING_SUCCESS: {
        draft.trending = [...state.trending, ...action.results.trending];
        draft.loading = false;
        draft.error = null;
        draft.pages = action.results.pages;
        break;
      }
      case LOAD_TRENDING_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
      case LOAD_TRENDING_NEXT_PAGE:
        if (state.trending.length >= LOAD_TRENDING_LIMIT) {
          draft.trending = initialState.trending;
        }
        if (state.pages > state.page) {
          draft.page = state.page + 1;
        } else {
          draft.page = 1;
        }
    }
  });

export default landingPageReducer;
/* eslint-enable default-case, no-param-reassign */
