/**
 * Module renders an image with parameters
 * @module components/Img
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const StyledImg = styled.img`
  ${(props) => props.styling};
`;

/**
 * Creates image component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:components/Img~Img.propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const Img = ({ src, alt, id, styling, onClick, handleLoad, className }) => (
  <StyledImg
    src={src}
    alt={alt}
    data-id={id}
    onLoad={handleLoad}
    onClick={onClick}
    styling={styling}
    className={className}
  />
);

/**
 * @name Img.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string | Object} props.src - image src.
 * @property {string} props.alt - alt string.
 * @property {string} props.id - id string.
 * @property {string} [props.className = ''] - className string.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @return {Array} React propTypes
 */
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  styling: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleLoad: PropTypes.func,
  onClick: PropTypes.func,
};

Img.defaultProps = {
  styling: [],
  className: '',
};

export default Img;
