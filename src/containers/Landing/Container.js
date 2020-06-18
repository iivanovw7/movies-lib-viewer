/**
 * Module contains main application container element
 * @module containers/App/Container
 * @author Igor Ivanov
 */
import styled from 'styled-components';

import { base } from '../../config/styles';

const Container = styled.article`
  background: transparent;
  display: flex;
  flex-direction: column;
  margin: calc(${base.topBarHeight}em + ${base.headerHeight}em + 0.4em) 0 ${base.footerHeight}em 0;
  min-height: 100%;
  padding: 0;
`;

export default Container;
