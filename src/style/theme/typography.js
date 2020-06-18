/**
 * Module contains text color set
 * @module style/theme/typography
 */
import theme from 'styled-theming';

import { colorSet } from '../../config/styles';

export const textColor = theme('mode', {
  dark: `${colorSet.dark.textColorPrimary}`,
  light: `${colorSet.light.textColorPrimary}`,
});

export const textColorInverse = theme('mode', {
  light: `${colorSet.dark.textColorPrimary}`,
  dark: `${colorSet.light.textColorPrimary}`,
});
