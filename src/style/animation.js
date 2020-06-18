/**
 * Module contains animations with keyframes.
 * @module style/animation
 */
import { css, keyframes } from 'styled-components';

export const keyframesHiding = keyframes`
  0% {
    opacity: 1;
    width: 100%;
  }
  
  99% {
    opacity: 0;
    width: 100%;
  }
  
  100% {
    opacity: 0;
    width: 0;
  }
`;

export const hidingWaitScreen = css`
  animation: ${keyframesHiding} 1s forwards ease-out;
`;
