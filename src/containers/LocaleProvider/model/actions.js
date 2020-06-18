/**
 * Module contains actions related to localization.
 * @module containers/LocaleProvider/model/actions
 * @author Igor Ivanov
 */
import { CHANGE_LOCALE } from './constants';

/**
 * changeLocale action description.
 * @typedef {object} module:containers/LocaleProvider/model/actions~changeLocaleDescription
 * @property {string} type - string action type.
 * @property {string} locale - current locale.
 */
/* eslint-disable import/prefer-default-export */
/**
 * Change locale action.
 * @param {string} languageLocale
 *  action locale @see {@link module:containers/LocaleProvider/model/constants}
 * @return {module:containers/LocaleProvider/model/actions~changeLocaleDescription}
 *  returns action type and payload.
 */
export function changeLocale(languageLocale) {
  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}
/* eslint-enable import/prefer-default-export */
