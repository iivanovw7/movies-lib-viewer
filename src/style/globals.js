/**
 * Module contains application global style properties
 * @module style/globals
 */
import { createGlobalStyle } from 'styled-components';

import { typography, breakpoints } from '../config/styles';

import { hidingWaitScreen } from './animation';
import { mainBg } from './theme/background';

const GlobalStyle = createGlobalStyle`

  *, *:before, *:after {
    box-sizing: border-box;
	}
	
	html {
	  overflow-x: hidden;
	}
	
	html,
  body {
    height: 100%;
    line-height: 1.5;
    width: 100%;
  }
 
  body {
    background-color: ${mainBg};
    font-family: ${typography.fallbackFontFamily};
  }

  body.withFonts {
    font-family: ${typography.baseFontFamily};
  }
  
  @media screen and (min-width: ${breakpoints.md}px) {
    html {
  		font-size: calc(11px + .5vw);
  	}
  }
  
  @media screen and (max-width: ${breakpoints.sm}px) {
    html {
  		font-size: calc(10px + .5vw);
  	}
  }
  
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .mlv-preloader-hidden {
    display: none;
    ${hidingWaitScreen}
    pointer-events: none;
  }
  
  .example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
  
`;

export default GlobalStyle;
