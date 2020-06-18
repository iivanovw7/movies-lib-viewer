/**
 * Module contains application header wrapper
 * @module components/Header/Wrapper
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { base } from '../../config/styles';
import { zIndex } from '../../style/mixins';
import { headerBg } from '../../style/theme/background';

const Wrapper = styled.header`
  background-color: ${headerBg};
  display: column;
  flex-direction: row;
  height: ${base.headerHeight}em;
  justify-content: center;
  margin-top: ${base.topBarHeight}em;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${zIndex.Header};

  &::after {
    background: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0.3;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

export default Wrapper;
