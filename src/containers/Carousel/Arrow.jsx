/**
 * Module contains arrow element.
 * @module containers/Carousel/Arrow
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import * as R from 'ramda';
import React from 'react';
import { css } from 'styled-components';

import { ReactComponent as ArrowImg } from '../../../assets/svg/arrow.svg';
import Button from '../../components/Button';
import { colorSet } from '../../config/styles';
import { zIndex } from '../../style/mixins';
import { arrowBackground, arrowBackgroundHover } from '../../style/theme/buttons';

/**
 * Map of possible arrow directions.
 * @type {{next: symbol, prev: symbol}}
 */
export const directionsMap = {
  prev: Symbol('prev'),
  next: Symbol('next'),
};

/**
 * Creates slider Arrow component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:components/Carousel/Arrow~Arrow.propTypes}
 * @constructor
 * @return {Node} React component with children.
 */
const Arrow = (props) => {
  const { rotate, handleClick, direction, hidden } = props;

  const Positioning = R.cond([
    [R.equals(directionsMap.next), R.always('right: 0;')],
    [R.T, R.always('left: 0;')],
  ]);

  const styling = css`
    background-color: ${arrowBackground};
    border-radius: 50%;
    color: ${colorSet.dark.textColorPrimary};
    margin: 0 0.5rem;
    ${Positioning(direction)};
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: ${zIndex.CarouselArrows};

    &:hover,
    &:active,
    &:focus {
      background-color: ${arrowBackgroundHover};
    }
  `;

  return (
    <Button variant="primary" styling={styling} onClick={handleClick} hidden={hidden}>
      <ArrowImg fill="currentColor" transform={`rotate(${rotate})`} />
    </Button>
  );
};

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {number} [ props.rotate = 0 ]
 *  arrow rotation angle.
 * @property {function} props.handleClick
 *  click handler.
 * @property {symbol} props.direction
 *  arrow direction descriptor.
 *  @see {@link module:components/Carousel/Arrow~Arrow.directionsMap}
 * @property {boolean} [ props.hidden = false ]
 *  if element should be hidden.
 * @return {Array} React propTypes
 */
Arrow.propTypes = {
  handleClick: PropTypes.func.isRequired,
  rotate: PropTypes.number,
  direction: PropTypes.symbol,
  hidden: PropTypes.bool,
};

Arrow.defaultProps = {
  rotate: 0,
  direction: directionsMap.prev,
  hidden: false,
};

export default Arrow;
