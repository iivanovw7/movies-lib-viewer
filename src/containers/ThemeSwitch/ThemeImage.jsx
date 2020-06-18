/**
 * Module contains application theme image component.
 * @module containers/ThemeSwitch/ThemeImage
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import Img from '../../components/Img';

import ImageStyles from './ImageStyles';

/**
 * Creates ThemeImage component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:containers/LocaleImage~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const ThemeImage = ({ image, alt }) => <Img src={image} alt={alt} styling={ImageStyles} />;

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} image - src link.
 * @property {ThemeImage} alt - alt text string.
 * @return {Array} React propTypes
 */
ThemeImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.func.isRequired,
};

export default ThemeImage;
