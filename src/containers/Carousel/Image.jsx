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
 * @name Carousel/Image
 * @method
 *
 * @param {Object.<module:containers/Carousel/Image~propTypes>} props
 *  contains component props
 *  @see {@link module:containers/Carousel/Image~propTypes}
 * @constructor
 * @return {Node} React component with children.
 */
const Image = ({ src, alt, id, onClick }) => (
  <Img src={src} alt={alt} id={id} onClick={onClick} styling={ImageStyles} />
);

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.src = image placeholder link]
 *  element image scr string.
 * @property {string} [props.alt = carousel-image]
 *  alt image text string
 * @property {string | number} [props.id]
 *  image data-id.
 * @property {function} [props.onClick]
 *  optional click handler.
 * @return {Array} React propTypes
 */
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

Image.defaultProps = {
  src: '../../assets/svg/image-placeholder.svg',
  alt: 'carousel-image',
};

export default Image;
