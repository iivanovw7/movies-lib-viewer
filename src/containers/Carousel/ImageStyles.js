/**
 * Module contains additional styles used in carousel image
 * @module containers/Carousel/ImageStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { zIndex } from '../../style/mixins';

const ImageStyles = css`
  border-radius: 1rem;
  height: 225px;
  margin: 10px;
  min-width: 150px;
  transition: all 1s ease;
  z-index: ${zIndex.Carousel};

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export default ImageStyles;
