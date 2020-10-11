/**
 * Module contains additional styles used in rating component
 * @module containers/Carousel/RatingStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { respondToMedia, mediaKey, zIndex } from '../../style/mixins';
import { lightText } from '../../style/theme/typography';

const RatingStyles = css`
  bottom: 0;
  color: ${lightText};
  margin: 1.2rem 1.4rem;
  ${respondToMedia[mediaKey('md')]`
    margin: 1rem 1.3rem;
  `};
  ${respondToMedia[mediaKey('xs')]`
    margin: 0.8rem 1.1rem;
  `};
  position: absolute;
  right: 0;
  width: 100%;
  z-index: ${zIndex.CarouselArrows};
`;

export default RatingStyles;
