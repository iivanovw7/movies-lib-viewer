/**
 * Module contains additional styles used in rating component
 * @module containers/Carousel/RatingStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { zIndex } from '../../style/mixins';
import { lightText } from '../../style/theme/typography';

const RatingStyles = css`
  bottom: 0;
  color: ${lightText};
  margin: 1rem;
  position: absolute;
  right: 0;
  width: 100%;
  z-index: ${zIndex.CarouselArrows};
`;

export default RatingStyles;
