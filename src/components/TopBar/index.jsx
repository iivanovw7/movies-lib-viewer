/**
 * Module contains application top bar.
 * @module components/TopBar
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import TMDBLogo from '../../../assets/svg/tmdb.svg';
import Button from '../Button';
import Img from '../Img';

import Block from './Block';
import Container from './Container';
import LogoStyles from './LogoStyles';

/**
 * Creates TopBar component.
 * @name Components/TopBar
 * @method
 *
 * @param {Object.<module:components/TopBar~propTypes>} props
 *  contains component props
 *  @see {@link module:components/TopBar~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function TopBar(props) {
  const { children } = props;

  return (
    <Container>
      <Button variant="primary" href="https://www.themoviedb.org/?language=en-US">
        <Img src={TMDBLogo} alt="TMDB" styling={LogoStyles} />
      </Button>
      <Block>{children}</Block>
    </Container>
  );
}

/**
 * @name LocaleProvider.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {Image} props.children - collection of children components.
 * @return {Array} React propTypes
 */
TopBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
  ]),
};

export default TopBar;
