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
  z-index: ${zIndex.Carousel};
`;

export default ImageStyles;
