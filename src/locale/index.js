/**
 * Module contains localization setup.
 * @module locale
 * @author Igor Ivanov
 */
import enTranslationMessages from './translations/en.json';
import ruTranslationMessages from './translations/ru.json';

/**
 * Localized messages.
 * @typedef {object} module:locale~LocalizedMessages
 * @property {Object} en - for english.
 * @property {Object} ru - for russian.
 */

/**
 * Exports localized messages for application.
 * @type {module:locale~LocalizedMessages}
 */
export const translationMessages = {
  en: enTranslationMessages,
  ru: ruTranslationMessages,
};

/* eslint-disable global-require */
/**
 * Adds Intl polyfills
 */
export function addIntlPolyfills() {
  if (!global.Intl) {
    global.Intl = require('intl');
  }
  if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/ru');
    require('@formatjs/intl-pluralrules/dist/locale-data/en');
  }

  if (!Intl.RelativeTimeFormat) {
    require('@formatjs/intl-relativetimeformat/polyfill');
    require('@formatjs/intl-relativetimeformat/dist/locale-data/ru');
    require('@formatjs/intl-relativetimeformat/dist/locale-data/en');
  }
}
/* eslint-enable global-require */
