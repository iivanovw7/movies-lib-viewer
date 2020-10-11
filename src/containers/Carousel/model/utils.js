/**
 * Module contains carousel page utils
 * @module containers/Carousel/model/utils
 */

import setting from '../../../config/data';

/**
 * Calculates previous position.
 * @param {number} length - slides length.
 * @param {number} current - current slide.
 * @param {number} [skip = 0] - slide to be skipped.
 * @return {number} previous slide position.
 */
export function previous(length, current, skip = 0) {
  return Number((current - 1 - skip + length) % length);
}

/**
 * Calculates next position.
 * @param {number} length - slides length.
 * @param {number} current - current slide.
 * @param {number} [skip = 0] - slide to be skipped.
 * @return {number} next slide position.
 */
export function next(length, current, skip = 0) {
  return Number((current + 1 + skip) % length);
}

/**
 * Returns carousel element threshold.
 * @param {Object} target - target element.
 * @return {number} target threshold
 */
export function threshold(target) {
  const width = target.clientWidth;
  return width / 3;
}

/**
 * Carousel swipe event handler.
 * @param {Object} eventData data.
 * @param {number} length - slides length.
 * @param {number} dir - swipe direction.
 * @return {null | number} swipe length or null.
 */
export function swiped(eventData, length, dir = -1) {
  const t = threshold(eventData.event.target);
  const d = dir * eventData.deltaX;

  return d >= t ? length : null;
}

const basePosterUrl = (size) => `${setting.net.tmdbImageUrl}/t/p/w${size}/`;

export const posterUrl = (slide, size) => `${basePosterUrl(size)}${slide.poster_path}`;
