/**
 * Module contains additional styles used in poster
 * @module containers/Carousel/PosterStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { respondToMedia, mediaKey, styleMixins } from '../../style/mixins';
import { focusOutlineColor } from '../../style/theme/borders';

const PosterStyles = css`
  display: flex;
  flex-direction: column;
  ${styleMixins.focusOutline(focusOutlineColor)};
  outline-offset: -0.154rem;
  position: relative;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default PosterStyles;
