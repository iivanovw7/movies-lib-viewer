/**
 * Module contains constants related to localization.
 * @module containers/LocaleProvider/model/constants
 * @author Igor Ivanov
 */

import Eng from '../../../../assets/svg/eng.svg';
import Rus from '../../../../assets/svg/rus.svg';
import setting from '../../../config/data';

/**
 * Locale list element description.
 * @typedef {object} module:containers/LocaleProvider/model/constants~localeListElement
 * @property {String} locale - current locale.
 * @property {String} image - locale image component.
 * @property {String} alt - locale label or alt text.
 */

/**
 * Object contains locales with description and link images.
 * @constant {Object}
 * @see {@link module:containers/LocaleProvider/model/constants~localeListElement}
 */
export const LOCALE_RESOURCES = {
  en: {
    alt: 'ENG',
    image: Eng,
  },
  ru: {
    alt: 'RUS',
    image: Rus,
  },
};

/**
 * Default locale.
 * @constant {string}
 */
export const DEFAULT_LOCALE = setting.locale;

/**
 * Change locale action type.
 * @constant {string}
 */
export const CHANGE_LOCALE = 'containers/App/LanguageToggle/CHANGE_LOCALE';
