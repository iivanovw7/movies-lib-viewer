/**
 * Module contains carousel rating meter.
 * @module components/Rating
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import { multiply, subtract, divide, compose, __, cond, gte, T, always } from 'ramda';
import React from 'react';

import Circle from './Circle';
import Figure from './Figure';
import Rate from './Rate';
import Text from './Text';

/**
 * Value represents stroke dash initial offset.
 * @type {number}
 */
export const INITIAL_OFFSET = 25;

/**
 * List of `default` dash colors used in case `strokeColor` props is not set.
 * @type {string[]}
 */
export const colorSet = ['#ff0b0b', '#eac000', '#007b00'];

/**
 * Creates Rating component.
 * @name Components/Rating
 * @method
 *
 * @param {Object.<module:components/Rating~propTypes>} props
 *  contains component props
 *  @see {@link module:components/Rating~propTypes}
 *
 * @return {Node} React component with children.
 * @constructor
 */
const Rating = (props) => {
  const {
    value,
    min,
    max,
    maxSize,
    text,
    textColor,
    styling,
    strokeColor,
    trailStrokeColor,
    strokeWidth,
    trailStrokeWidth,
    trailSpaced,
  } = props;

  const percentage = compose(Math.abs, subtract(min), multiply(100), divide(__, max - min))(value);
  const getTrailColor = cond([
    [gte(__, 60), always(colorSet[2])],
    [gte(__, 40), always(colorSet[1])],
    [T, always(colorSet[0])],
  ]);

  return (
    <Figure styling={styling} maxSize={maxSize}>
      <svg viewBox="0 0 38 38">
        <Circle
          stroke={trailStrokeColor}
          strokeWidth={trailStrokeWidth}
          strokeDasharray={trailSpaced ? 1 : 0}
        />
        <Circle
          stroke={strokeColor || getTrailColor(percentage)}
          strokeWidth={strokeWidth}
          strokeDasharray={`${percentage} ${100 - percentage}`}
          strokeDashoffset={INITIAL_OFFSET}
        />
        <Rate textColor={textColor}>
          <Text x="50%" y="50%">
            {text || value}
          </Text>
        </Rate>
      </svg>
    </Figure>
  );
};

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {number} props.value - specifies value to be displayed.
 * @property {number} props.min - min limit.
 * @property {number} props.max - max limit.
 * @property {string} props.text - optional text to be displayed instead of value.
 * @property {string} [props.maxSize = 50px] - max component size.
 * @property {string} [props.textColor] - force rating text color.
 * @property {string} [props.strokeColor] - force rating text color.
 * @property {number} [props.strokeWidth = 4] - base strike width.
 * @property {Array.<string>} [props.styling = []] - additional styles.
 * @property {number} [props.trailStrokeWidth = 4] - force change of train width.
 * @property {string} [props.trailStrokeColor = transparent] - trail fill color.
 * @property {boolean} [trailSpaced = false] if trail should be dashed or solid.
 * @return {Array} React propTypes
 */
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  text: PropTypes.string,
  maxSize: PropTypes.string,
  textColor: PropTypes.string,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  styling: PropTypes.array,
  trailStrokeWidth: PropTypes.number,
  trailStrokeColor: PropTypes.string,
  trailSpaced: PropTypes.bool,
};

Rating.defaultProps = {
  maxSize: '40px',
  strokeWidth: 3,
  trailStrokeWidth: 3,
  trailSpaced: false,
};

export default Rating;
