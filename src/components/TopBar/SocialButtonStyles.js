/**
 * Module contains additional styles used in logo image.
 * @module components/TopBar/SocialButtonStyles
 * @author Igor Ivanov
 */
import { lighten } from 'polished';
import { css } from 'styled-components';

import { colorSet } from '../../config/styles';
import { styleMixins } from '../../style/mixins';

const SocialButtonStyles = css`
  color: ${colorSet.topBarLinks};
  margin: 0.3em 0.3em 0.3em 0.8em;
  ${styleMixins.focusOutline(colorSet.topBarLinks)};

  &:hover {
    color: ${lighten(0.06, colorSet.topBarLinks)};
  }
`;

export default SocialButtonStyles;
