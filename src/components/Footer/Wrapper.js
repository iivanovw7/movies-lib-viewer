/**
 * Module contains application footer wrapper
 * @module components/Footer/Wrapper
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { base } from '../../config/styles';
import { zIndex } from '../../style/mixins';

const Wrapper = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: row;
  height: ${base.footerHeight}em;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: ${zIndex.Footer};
`;

export default Wrapper;
