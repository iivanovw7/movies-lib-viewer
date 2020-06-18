/**
 * Module contains additional styles used in logo image.
 * @module components/TopBar/LogoLogoStyles
 * @author Igor Ivanov
 */
import { lighten } from 'polished';
import { css } from 'styled-components';

import { logoColor } from '../../config/styles';

const LogoStyles = css`
  color: ${logoColor};
  margin-left: 0.8em;

  &:hover {
    color: ${lighten(0.02, logoColor)};
  }

  svg {
    height: 3rem;
    max-height: 48px;
    max-width: 48px;
    width: 3rem;
  }
`;

export default LogoStyles;
