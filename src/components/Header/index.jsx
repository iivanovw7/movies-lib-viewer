/**
 * Module contains application header
 * @module components/Header
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import HeaderBg from '../../../assets/img/loaderBg.jpg';
import { ReactComponent as APPLogo } from '../../../assets/svg/film.svg';
import Button from '../Button';
import Separator from '../Separator';

import Container from './Container';
import LogoStyles from './LogoStyles';
import Wrapper from './Wrapper';

/**
 * Creates application header component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:components/Header~Header.propTypes}
 * @constructor
 * @return {Node} React component with children.
 */
function Header(props) {
  const { children } = props;

  return (
    <Wrapper bg={HeaderBg}>
      <Container>
        <Button variant="primary" href="/" target="_self" styling={LogoStyles}>
          <APPLogo fill="currentColor" />
        </Button>
        {children}
      </Container>
      <Separator />
    </Wrapper>
  );
}

/**
 * @name Header.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string | Image} props.children
 *    header children elements.
 * @return {Array} React propTypes
 */
Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default Header;