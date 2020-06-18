/**
 * Module contains carousel component
 * @module containers/Carousel/model/actions
 * @author Igor Ivanov
 */

import {
  CAROUSEL_JUMP,
  CAROUSEL_NEXT,
  CAROUSEL_PREV,
  CAROUSEL_DRAG,
  CAROUSEL_DONE,
  CAROUSEL_END,
} from './constants';

/**
 * Move to the next element of carousel.
 * @param {number} length
 *    length value to move.
 * @param {number} skip
 *    number of slides to skip.
 * @return {{length: number, type: string}}
 *    action type and length.
 */
export function carouselNext(length, skip) {
  return {
    type: CAROUSEL_NEXT,
    length,
    skip,
  };
}

/**
 * Move to the desired element of carousel.
 * @param {number} desired
 *    desired number.
 * @return {{type: string, desired: number}}
 *    action type and length.
 */
export function carouselDesired(desired) {
  return {
    type: CAROUSEL_JUMP,
    desired,
  };
}

/**
 * Move to the previous element of carousel.
 * @param {number} length
 *    length value to move.
 * @param {number} skip
 *    number of slides to skip.
 * @return {{length: number, type: string}}
 *    action type and length.
 */
export function carouselPrev(length, skip) {
  return {
    type: CAROUSEL_PREV,
    length,
    skip,
  };
}

/**
 * Carousel dragging action.
 * @param {number} length
 *    length value to move.
 * @return {{length: number, type: string}}
 *    action type and length.
 */
export function carouselDrag(length) {
  return {
    type: CAROUSEL_DRAG,
    length,
  };
}

/**
 * End of carousel position changes.
 * @return {{type: string}}
 *    action type.
 */
export function carouselDone() {
  return {
    type: CAROUSEL_DONE,
  };
}

/**
 * If last slide is displayed
 * @return {{type: string}}
 *    action type.
 */
export function carouselEnd() {
  return {
    type: CAROUSEL_END,
  };
}
