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

/**
 * Carousel active slide selector.
 * @method
 * @param {Object} state - carousel state.
 * @return {string} active - carousel active element id.
 */
const selectActive = (state) => state.carousel.active || initialState.active;

const makeSelectCarousel = createSelector(selectCarousel, (carouselState) => ({
  offset: carouselState.offset,
  desired: carouselState.desired,
  active: carouselState.active,
  end: carouselState.end,
}));

export { makeSelectCarousel, selectActive }; // eslint-disable-line import/prefer-default-export
