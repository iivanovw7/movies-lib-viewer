/**
 * Module contains buttons color set
 * @module style/theme/buttons
 */
import { lighten, transparentize } from 'polished';
import theme from 'styled-theming';

import { colorSet } from '../../config/styles';

export const btnTextColor = theme.variants('mode', 'variant', {
  primary: {
    light: colorSet.dark.textColorPrimary,
    dark: colorSet.dark.textColorPrimary,
  },
  secondary: {
    light: colorSet.dark.textColorPrimary,
    dark: colorSet.dark.textColorPrimary,
  },
  alert: {
    light: colorSet.dark.textColorPrimary,
    dark: colorSet.dark.textColorPrimary,
  },
});

export const btnBackground = theme.variants('mode', 'variant', {
  primary: {
    light: colorSet.light.colorPrimary,
    dark: colorSet.dark.colorPrimary,
  },
  secondary: {
    light: colorSet.light.colorSecondary,
    dark: colorSet.dark.colorSecondary,
  },
  alert: {
    light: colorSet.light.colorAlert,
    dark: colorSet.dark.colorAlert,
  },
});

export const arrowBackground = theme.variants('mode', 'variant', {
  primary: {
    light: transparentize(0.2, colorSet.light.colorPrimary),
    dark: transparentize(0.2, colorSet.dark.colorPrimary),
  },
  secondary: {
    light: transparentize(0.2, colorSet.light.colorSecondary),
    dark: transparentize(0.2, colorSet.dark.colorSecondary),
  },
});

export const arrowBackgroundHover = theme.variants('mode', 'variant', {
  primary: {
    light: transparentize(0.05, colorSet.light.colorPrimary),
    dark: transparentize(0.05, colorSet.dark.colorPrimary),
  },
  secondary: {
    light: transparentize(0.05, colorSet.light.colorSecondary),
    dark: transparentize(0.05, colorSet.dark.colorSecondary),
  },
});

// Lighten backgrounds used on hover events
export const btnLighten = theme.variants('mode', 'variant', {
  primary: {
    light: lighten(0.2, colorSet.light.colorPrimary),
    dark: lighten(0.2, colorSet.dark.colorPrimary),
  },
  secondary: {
    light: lighten(0.2, colorSet.light.colorSecondary),
    dark: lighten(0.2, colorSet.dark.colorSecondary),
  },
  alert: {
    light: lighten(0.1, colorSet.light.colorAlert),
    dark: lighten(0.1, colorSet.dark.colorAlert),
  },
});

// Lighten backgrounds used for active navigation links
// export const btnHighlight = theme.variants('mode', 'variant', {
//   primary: {
//     light: transparentize(0.4, colorSet.light.navLinkHighlight),
//     dark: transparentize(0.8, colorSet.dark.navLinkHighlight),
//   },
//   secondary: {
//     light: transparentize(0.4, colorSet.light.navLinkHighlight),
//     dark: transparentize(0.8, colorSet.dark.navLinkHighlight),
//   },
//   alert: {
//     light: transparentize(0.4, colorSet.light.colorAlert),
//     dark: transparentize(0.8, colorSet.dark.colorAlert),
//   },
// });

export const linkColor = theme('mode', {
  light: colorSet.light.linkColor,
  dark: colorSet.dark.linkColor,
});

export const linkColorSecondary = theme('mode', {
  light: colorSet.light.linkColor,
  dark: lighten(0.1, colorSet.dark.colorAlert),
});

export const switchBackgroundColor = theme('mode', {
  light: colorSet.light.colorPrimary,
  dark: colorSet.dark.colorPrimary,
});
