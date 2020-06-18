/**
 * Module contains carousel image.
 * @module containers/Carousel/Image
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import Img from '../../components/Img';

import ImageStyles from './ImageStyles';

/**
 * Creates slider image component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:components/Image~Image.propTypes}
 * @constructor
 * @return {Node} React component with children.
 */
const Image = ({ src, alt }) => <Img src={src} alt={alt} styling={ImageStyles} />;

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.src = image placeholder link]
 *  element image scr string.
 * @property {string} [props.alt = carousel-image]
 *  alt image text string
 * @return {Array} React propTypes
 */
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: '../../assets/svg/image-placeholder.svg',
  alt: 'carousel-image',
};

export default Image;
