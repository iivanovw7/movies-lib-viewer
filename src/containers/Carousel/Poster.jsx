/**
 * Module contains carousel poster.
 * @module containers/Carousel/Poster
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import Button from '../../components/Button';
import Rating from '../../components/Rating';

import Image from './Image';
import { posterUrl } from './model/utils';
import PosterStyles from './PosterStyles';
import RatingStyles from './RatingStyles';

/**
 * Creates slider poster component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:components/Poster~Poster.propTypes}
 * @constructor
 * @return {Node} React component with children.
 */
const Poster = ({ slide, id, posterSize, onClick }) => {
  // eslint-disable-next-line camelcase
  const { vote_average, title } = slide;

  return (
    <Button id={id} variant="primary" onClick={onClick} styling={PosterStyles}>
      <Image alt={title} src={posterUrl(slide, posterSize)} />
      <Rating styling={RatingStyles} value={vote_average.toPrecision(2)} min={0} max={10} />
    </Button>
  );
};

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 *
 * @property {Object} props.slide
 *    poster slide object.
 * @property {number} props.posterSize
 *    poster size.
 * @property {function} props.onClick
 *    click handler.
 * @property {number} props.id
 *    poster id.
 *
 * @return {Array} React propTypes
 */
Poster.propTypes = {
  slide: PropTypes.object.isRequired,
  posterSize: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default Poster;
