/**
 * Module contains additional styles used in logo image.
 * @module components/TopBar/LogoLogoStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { respondToMedia, mediaKey } from '../../style/mixins';

const LogoStyles = css`
  height: 0.8em;
  margin-left: 0.8em;

  ${respondToMedia[mediaKey('xs')]`
    height: 0.6em;
  `}
`;

export default LogoStyles;
