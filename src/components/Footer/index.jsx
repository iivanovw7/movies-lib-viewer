/**
 * Module contains application footer
 * @module components/Footer
 * @author Igor Ivanov
 */
import React from 'react';

import Separator from '../Separator';

import Wrapper from './Wrapper';

/**
 * Creates application footer component.
 * @method
 * @constructor
 * @return {Node} React component with children.
 */
function Footer() {
  return (
    <Wrapper>
      <Separator height={0.3} />
    </Wrapper>
  );
}

export default Footer;
