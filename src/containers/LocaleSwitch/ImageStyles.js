/**
 * Module contains additional styles used in locale switcher image
 * @module containers/LocaleSwitch/ImageStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { iconBorderColor } from '../../style/theme/borders';

const ImageStyles = css`
  border: 1px solid ${iconBorderColor};
  height: 100%;
  opacity: 0.9;
  width: 100%;
`;

export default ImageStyles;
