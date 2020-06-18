/**
 * Module contains carousel state selectors
 * @module containers/Carousel/model/selectors
 * @author Igor Ivanov
 */
import { createSelector } from 'reselect';

import { initialState } from './reducer';

/**
 * Carousel state selector.
 *
 * @param {Object} state - application state object.
 * @return {Object} state.global
 *    application state object
 */
const selectCarousel = (state) => state.carousel || initialState;

const makeSelectCarousel = createSelector(selectCarousel, (carouselState) => ({
  offset: carouselState.offset,
  desired: carouselState.desired,
  active: carouselState.active,
  end: carouselState.end,
}));

export { makeSelectCarousel }; // eslint-disable-line import/prefer-default-export
