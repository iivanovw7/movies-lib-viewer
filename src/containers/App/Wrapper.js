/**
 * Module contains main application wrapper element
 * @module containers/App/Wrapper
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { mainBg } from '../../style/theme/background';

const Wrapper = styled.div`
  background-color: ${mainBg};
  margin: 0 auto;
  max-width: 100vw;
  min-height: 100vh;
  -ms-overflow-style: none;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  scroll-behavior: smooth;
  scrollbar-width: none;
`;

export default Wrapper;
