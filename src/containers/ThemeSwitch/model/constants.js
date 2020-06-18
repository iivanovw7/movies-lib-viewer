/**
 * Module contains theme constants
 * @module containers/ThemeSwitch/model/constants
 * @author Igor Ivanov
 */

import Dark from '../../../../assets/svg/moon.svg';
import Light from '../../../../assets/svg/sun.svg';
import { DARK_THEME, LIGHT_THEME } from '../../../config/constants';
import setting from '../../../config/data';

/**
 * Themes list element description.
 * @typedef {object} module:containers/ThemeSwitch/model/constants~themeListElement
 * @property {String} image - theme image component.
 * @property {String} alt - theme label or alt text.
 */

/**
 * Object contains locales with corresponding images.
 * @constant {Object}
 * @see {@link module:containers/ThemeSwitch/model/constants~themeListElement}
 */
export const THEME_RESOURCES = {
  [DARK_THEME]: {
    alt: 'Dark theme',
    image: Dark,
  },
  [LIGHT_THEME]: {
    alt: 'Light theme',
    image: Light,
  },
};

/**
 * Default theme.
 * @constant {string}
 */
export const DEFAULT_THEME = setting.theme;

/**
 * Change theme action type.
 * @constant {string}
 */
export const CHANGE_THEME = 'containers/ThemeSwitch/model/constants/CHANGE_THEME';
