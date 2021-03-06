/**
 * Module contains application styles and theming configuration.
 * @module config/styles
 */

/**
 * Base application styles configuration.
 * Same set is equal for dark and light themes.
 * @typedef {Object} module:config/styles~base
 * @property {number} topBarHeight - application top bar height in `em`;
 * @property {number} headerHeight - application header height in `em`;
 * @property {number} footerHeight - application footer height in `em`;
 * @property {Array.<string>} zIndexes - list of element for which zIndexes are going to be generated.
 * @property {number} zIndex - start zIndex value.
 */

/**
 * Base application styles configuration.
 * @type {module:config/styles~base}
 */
export const base = {
  topBarHeight: 2.5,
  headerHeight: 5,
  footerHeight: 0.3,
  zIndexes: [
    'TopBar',
    'Header',
    'Footer',
    'Separator',
    'CarouselProgress',
    'Carousel',
    'CarouselArrows',
    'CarouselRating',
  ],
  zIndex: 500,
};

/**
 * Application logo fill color.
 * @type {string}
 */
export const logoColor = '#ea4949';

/**
 * Theme color description.
 * Same set is equal for dark and light themes.
 * @typedef {Object} module:config/styles~themeSet
 * @property {string} inputBackgroundPrimary
 * @property {string} inputColorPrimary
 * @property {string} colorPrimary
 * @property {string} colorSecondary
 * @property {string} colorAlert
 * @property {string} textColorPrimary
 * @property {string} mainBackgroundPrimary
 * @property {string} headerBackgroundPrimary
 * @property {string} linkHighlight
 * @property {string} linkColor
 */

/**
 * Application colors set.
 * Same set is equal for dark and light themes.
 * @typedef {Object} module:config/styles~colorSet
 * @property {Object} dark
 *  @see {@link module:config/styles~themeSet}
 * @property {Object} light
 *  @see {@link module:config/styles~themeSet}
 */

/**
 * Application color scheme set.
 * @type {Object}
 * @param {Object} gradients contains set of colors used in gradients.
 * @param {module:config/styles~colorSet} dark
 * @param {module:config/styles~colorSet} light
 */
export const colorSet = {
  topBarLinks: '#ea4949',
  gradients: {
    first: 'rgba(250, 241, 8, 1)',
    second: 'rgba(176, 14, 14, 1)',
    third: 'rgba(224, 0, 255, 1)',
  },
  dark: {
    inputBackgroundPrimary: '#fffaf0',
    inputColorPrimary: '#1e2227',
    colorPrimary: '#00A0FC',
    colorSecondary: 'rgba(166,246,46, 0.95)',
    colorAlert: 'rgba(216,62,56, 0.95)',
    textColorPrimary: '#f0f8ff',
    mainBackgroundPrimary: '#1e2227',
    headerBackgroundPrimary: '#0d1219',
    headerBackgroundSecondary: '#081020',
    linkHighlight: '#a8ecff',
    linkColor: 'rgba(99,198,255,0.95)',
  },
  light: {
    inputBackgroundPrimary: '#1e2227',
    inputColorPrimary: '#fffaf0',
    colorPrimary: '#053eb1',
    colorSecondary: '#d2c323',
    colorAlert: 'rgba(216,62,56,0.95)',
    textColorPrimary: '#1e2227',
    mainBackgroundPrimary: 'rgba(217,217,217,0.95)',
    headerBackgroundPrimary: '#fffaf0',
    headerBackgroundSecondary: '#472564',
    linkHighlight: '#a8ecff',
    linkColor: 'rgba(5,62,177,0.95)',
  },
};

/**
 * Application breakpoints set.
 * @typedef {Object} module:config/styles~breakpoints
 * @property {number} xs
 * @property {number} sm
 * @property {number} md
 * @property {number} lg
 * @property {number} xl
 */

/**
 * Breakpoints in `px`.
 * @type {module:config/styles~breakpoints}
 */
export const breakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1920,
};

/**
 * Application typography set.
 * @typedef {Object} module:config/styles~typography
 * @property {number} light
 * @property {number} regular
 * @property {number} bold
 * @property {string} baseFontFamily
 * @property {string} fallbackFontFamily
 */

/**
 * Typography set.
 * @type {module:config/styles~typography}
 */
export const typography = {
  light: 100,
  regular: 300,
  bold: 600,
  baseFontFamily: 'Roboto, sans-serif',
  fallbackFontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};
