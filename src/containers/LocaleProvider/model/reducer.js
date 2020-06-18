/**
 * Module contains reducers related to localization.
 * @module containers/LocaleProvider/model/reducer
 * @author Igor Ivanov
 */
import produce from 'immer';

import { CHANGE_LOCALE, DEFAULT_LOCALE } from './constants';

/**
 * Localized messages.
 * @typedef {object} module:containers/LocaleProvider/model/reducer~initialState
 * @property {String} locale - current locale.
 */

/**
 * Contains initial state.
 * @type {module:containers/LocaleProvider/model/reducer~initialState}
 */
export const initialState = {
  locale: DEFAULT_LOCALE,
};

/* eslint-disable default-case, no-param-reassign */
/**
 * Localization reducer.
 * @param {Object} state - application state.
 * @param {Object} action - action being processed by reducer.
 * @return {Function} localization reducer
 */
const languageProviderReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale = action.locale;
        break;
    }
  });
/* eslint-enable default-case, no-param-reassign */
export default languageProviderReducer;
