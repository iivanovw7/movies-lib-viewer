/**
 * Module contains selectors related to theme .
 * @module containers/ThemeSwitch/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from 'reselect';

import { initialState } from './reducer';

/**
 * Selector to the theme domain.
 * @method
 * @param {Object} state - application state.
 * @return {string} theme - application theme selector.
 */
const selectTheme = (state) => state.theme || initialState;

/**
 * Select application theme mode.
 * @method
 * @return {Function} creates new theme selector.
 */
const makeSelectTheme = () => createSelector(selectTheme, (themeState) => themeState.mode);

export { selectTheme, makeSelectTheme };
