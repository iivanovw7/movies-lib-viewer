/**
 * Module contains styled input
 * @module components/Input/StyledInput
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  border-radius: 3px;
  margin-top: 0.2em;
  ${(props) => props.styling};
  padding: 0.5em;
  width: 100%;
`;

export default StyledInput;
