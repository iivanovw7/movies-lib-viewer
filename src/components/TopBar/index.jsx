/**
 * Module contains application top bar.
 * @module components/TopBar
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as FacebookLogo } from '../../../assets/svg/social_facebook.svg';
import { ReactComponent as InstagramLogo } from '../../../assets/svg/social_instagram.svg';
import { ReactComponent as TwitterLogo } from '../../../assets/svg/social_twitter.svg';
import settings from '../../config/data';
import Button from '../Button';

import Block from './Block';
import Container from './Container';
import SocialButtonStyles from './SocialButtonStyles';

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
  const { social } = settings;

  return (
    <Container>
      <Block>
        <Button href={social.facebook} target="_self" styling={SocialButtonStyles}>
          <FacebookLogo fill="currentColor" />
        </Button>
        <Button href={social.instagram} target="_self" styling={SocialButtonStyles}>
          <InstagramLogo fill="currentColor" />
        </Button>
        <Button href={social.twitter} target="_self" styling={SocialButtonStyles}>
          <TwitterLogo fill="currentColor" />
        </Button>
      </Block>
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
