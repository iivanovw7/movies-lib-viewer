/**
 * Module contains styled button for switch component
 * @module components/Switch/StyledButton
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border: none;
  ${(props) => props.styling};
  opacity: ${(props) => (props.hide ? '0' : '1')};
  outline: none;
  transition: opacity 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    user-select: none;
  }
`;

export default StyledButton;
