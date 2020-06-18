/**
 * Module contains styled label
 * @module components/Input/StyledLabel
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 0.7rem;
  ${(props) => props.styling};
  width: 100%;
`;

export default StyledLabel;
