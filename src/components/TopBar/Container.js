/**
 * Module contains application TopBar container
 * @module components/TopBar/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { base } from '../../config/styles';
import { zIndex } from '../../style/mixins';
import { topBarBg } from '../../style/theme/background';
import { topBarBorderColor } from '../../style/theme/borders';

const Container = styled.div`
  align-items: center;
  background-color: ${topBarBg};
  border-bottom: 1px solid ${topBarBorderColor};
  display: flex;
  flex-direction: row;
  height: ${base.topBarHeight}em;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndex.TopBar};
`;

export default Container;
