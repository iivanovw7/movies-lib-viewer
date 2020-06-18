/**
 * Module contains application locale image component.
 * @module containers/LocaleSwitch/LocaleImage
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import Img from '../../components/Img';

import ImageStyles from './ImageStyles';

/**
 * Creates LocaleImage component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:containers/LocaleImage~LocaleImage.propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const LocaleImage = ({ image, alt }) => <Img src={image} alt={alt} styling={ImageStyles} />;

/**
 * @name LocaleImage.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} image - src link.
 * @property {LocaleImage} alt - alt text string.
 * @return {Array} React propTypes
 */
LocaleImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.func.isRequired,
};

export default LocaleImage;
