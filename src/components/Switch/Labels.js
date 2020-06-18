/**
 * Module contains styled switch component
 * @module components/Button/StyledButton
 * @author Igor Ivanov
 */
import styled from 'styled-components';

const Labels = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid transparent;
  box-shadow: 0 0 0px #2196f3;
  display: block;
  font-size: inherit;
  line-height: 1;
  margin: 1em 0 0;
  padding: 0.5em;
  position: relative;
  text-align: left;
  transition: box-shadow 0.2s ease-in-out;
  width: 100%;

  &:hover {
    box-shadow: 0 0 2px #2196f3;
  }

  &:focus {
    outline: none;

    span:before {
      outline: 2px solid #2196f3;
      outline-offset: 2px;
    }
  }

  &:active {
    color: inherit;
  }

  span {
    pointer-events: none;
  }
`;

export default Labels;
