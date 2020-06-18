/**
 * Module contains background color set
 * @module style/theme/background
 */
import { lighten, darken } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../../config/styles';

export const mainBg = theme('mode', {
  dark: `${colorSet.dark.mainBackgroundPrimary}`,
  light: `${colorSet.light.mainBackgroundPrimary}`,
});

export const mainBgInversed = theme('mode', {
  light: `${colorSet.dark.mainBackgroundPrimary}`,
  dark: `${colorSet.light.mainBackgroundPrimary}`,
});

export const topBarBg = theme('mode', {
  dark: `${colorSet.dark.headerBackgroundSecondary}`,
  light: `${colorSet.dark.headerBackgroundSecondary}`,
});

export const headerBg = theme('mode', {
  dark: `${colorSet.dark.headerBackgroundPrimary}`,
  light: lighten(0.1, colorSet.dark.headerBackgroundPrimary),
});

export const progressBarColor = theme('mode', {
  dark: lighten(0.1, colorSet.dark.colorSecondary),
  light: darken(0.1, colorSet.light.colorSecondary),
});
