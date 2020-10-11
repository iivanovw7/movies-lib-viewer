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
 * @name ThemeSwitch/ThemeImage
 * @method
 *
 * @param {Object.<module:containers/ThemeSwitch/ThemeImage~propTypes>} props
 *  contains component props
 *  @see {@link module:containers/ThemeSwitch/ThemeImage~propTypes}
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
