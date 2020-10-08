/**
 * Module contains carousel rating meter.
 * @module containers/Carousel/Poster
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import { multiply, subtract, divide, compose, __, cond, gte, T, always } from 'ramda';
import React from 'react';

import Circle from './Circle';
import Figure from './Figure';
import Rate from './Rate';
import Text from './Text';

const INITIAL_OFFSET = 25;

const colorSet = ['#ff0b0b', '#eac000', '#007b00'];

const Rating = (props) => {
  const {
    value,
    min,
    max,
    maxSize,
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
            {value}
          </Text>
        </Rate>
      </svg>
    </Figure>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
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
  maxSize: '50px',
  strokeWidth: 4,
  trailStrokeWidth: 4,
  trailStrokeColor: 'transparent',
  trailSpaced: false,
};

export default Rating;
