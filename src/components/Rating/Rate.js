/**
 * Module contains rating rate element
 * @module components/Rating/Rate
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const Rate = styled.g`
  fill: ${(props) => props.textColor};
  transform: translateY(0.25em);
`;

export default Rate;
