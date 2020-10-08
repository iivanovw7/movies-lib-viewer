/**
 * Module contains selectors related to localization.
 * @module containers/LocaleProvider/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from 'reselect';

import { initialState } from './reducer';

/**
 * Selector to the language domain.
 * @method
 * @param {Object} state - application state.
 * @return {string} language - application language selector.
 */
const selectLanguage = (state) => state.language || initialState;

/**
 * Selector to the locale.
 * @method
 * @param {Object} state - application state.
 * @return {string} locale - application locale selector.
 */
const selectLocale = (state) => state.language.locale || initialState.locale;

/**
 * Select the language locale.
 * @method
 * @return {Function} creates new locale selector.
 */
const makeSelectLocale = () => createSelector(selectLanguage, (languageState) => languageState.locale);

export { selectLanguage, selectLocale, makeSelectLocale };
