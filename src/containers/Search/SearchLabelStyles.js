/**
 * Module contains additional styles used in search bar
 * @module containers/Search/SearchLabelStyles
 * @author Igor Ivanov
 */
import { css } from 'styled-components';

import { colorSet } from '../../config/styles';

const SearchLabelStyles = css`
  color: ${colorSet.dark.textColorPrimary};
  margin: auto 2rem;
  max-width: 27rem;
`;

export default SearchLabelStyles;
