/**
 * Module contains utils used in Theme Switch component
 * @module containers/ThemeSwitch/model/utils
 * @author Igor Ivanov
 */
import { lt, indexOf, inc, always, nth, ifElse, head, pipe, dec, __, length, keys, either } from 'ramda';

import { THEME_RESOURCES, DEFAULT_THEME } from './constants';

/**
 *  Gets string representations of keys out of theme object
 *  @return {Array.<string>} theme names list
 */
const themes = keys(THEME_RESOURCES);
/**
 * Gets index of current locale.
 * @type {f1}
 */
const themeIndex = indexOf(__, themes);
/**
 * Gets length of theme list.
 */
const themesLength = length(themes);
/**
 * Verifies if there is next theme available.
 * @type {f1}
 */
const hasNextTheme = lt(__, dec(themesLength));
/**
 * Returns firs theme, in case if no further themes available.
 */
const firstTheme = head(themes);

/**
 * Function selects next theme name.
 * Returns theme with next index if there is available one or first theme otherwise.
 * @type {Function|*}
 */
const newThemeKey = pipe(themeIndex, ifElse(hasNextTheme, pipe(inc, nth(__, themes)), always(firstTheme)));

/**
 * Returns either a new theme key or default key.
 * @type {Function|*}
 */
const nextThemeKey = either(newThemeKey, DEFAULT_THEME);

export default nextThemeKey;
