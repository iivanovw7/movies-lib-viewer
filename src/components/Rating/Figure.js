/**
 * Module contains rating figure element
 * @module components/Rating/Figure
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const Figure = styled.figure`
  max-width: ${(props) => props.maxSize};
  ${(props) => props.styling};
  vertical-align: middle;
`;

export default Figure;
