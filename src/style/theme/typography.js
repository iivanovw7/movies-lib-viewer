/**
 * Module contains text color set
 * @module style/theme/typography
 */
import theme from 'styled-theming';

import { colorSet } from '../../config/styles';

export const lightText = theme('mode', {
  dark: `${colorSet.dark.textColorPrimary}`,
  light: `${colorSet.dark.textColorPrimary}`,
});

export const darkText = theme('mode', {
  dark: `${colorSet.light.textColorPrimary}`,
  light: `${colorSet.light.textColorPrimary}`,
});

export const textColor = theme('mode', {
  dark: `${colorSet.dark.textColorPrimary}`,
  light: `${colorSet.light.textColorPrimary}`,
});

export const textColorInverse = theme('mode', {
  light: `${colorSet.dark.textColorPrimary}`,
  dark: `${colorSet.light.textColorPrimary}`,
});
