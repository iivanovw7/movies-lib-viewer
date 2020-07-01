/**
 * Module contains theme actions
 * @module containers/ThemeSwitch/model/actions
 * @author Igor Ivanov
 */
import { CHANGE_THEME } from './constants';

/**
 * changeTheme action description.
 * @typedef {object} module:containers/ThemeSwitch/model/actions~changeThemeDescription
 * @property {string} type - string action type.
 * @property {string} mode - current mode.
 */
/* eslint-disable import/prefer-default-export */
/**
 * Change theme mode action.
 * @param {string} mode - new theme mode
 *  action locale @see {@link module:containers/ThemeSwitch/model/constants}
 * @return {module:containers/ThemeSwitch/model/actions~changeThemeDescription}
 *  returns action type and payload.
 */
export function changeTheme(mode) {
  return {
    type: CHANGE_THEME,
    mode,
  };
}
/* eslint-enable import/prefer-default-export */
