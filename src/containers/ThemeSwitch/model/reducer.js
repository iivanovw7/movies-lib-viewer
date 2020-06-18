/**
 * Module contains theme reducer
 * @module containers/ThemeSwitch/model/reducer
 * @author Igor Ivanov
 */
import produce from 'immer';

import { CHANGE_THEME } from './constants';

/**
 * Theme reducer initialState.
 * @typedef {object} module:containers/ThemeSwitch/model/reducer~initialState
 * @property {String} mode - current theme mode.
 */

/**
 * Contains initial state.
 * @type {module:containers/ThemeSwitch/model/reducer~initialState}
 */
export const initialState = {
  mode: 'dark',
};

/* eslint-disable default-case, no-param-reassign */
const themeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_THEME:
        draft.mode = action.mode;
        break;
    }
  });
/* eslint-enable default-case, no-param-reassign */

export default themeReducer;
