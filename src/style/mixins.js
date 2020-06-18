/**
 * Module contains style mixins.
 * @module style/mixins
 */
import { fromPairs } from 'ramda';
import { css } from 'styled-components';

import { breakpoints, base } from '../config/styles';

/**
 * Media mixin function.
 * @example
 *  // background black from breakpoint `sm`.
 *  export const Component = styled.div`
 *    background-color: red;
 *
 *    ${respondToMedia.sm`
 *      background-color: black;
 *    `}
 *  `;
 * @return {*} respondToMedia functions creates media query
 */
export const respondToMedia = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

/**
 * Verifies if parameter exists in breakpoints as key prop, if not - returns default `sm` key.
 * @param {string} [value = 'sm'] breakpoint key to be checked.
 * @return {string} breakpoint key
 */
export const mediaKey = (value = 'sm') => (Object.keys(breakpoints).includes(value) ? value : 'sm');

/**
 * Creates set of zIndex values out of incoming list of element names.
 * @see {@link module:config/styles~base}
 * @param {Array.<string>} labels list of elements
 * @return {Object} set of zIndexes to be used inside styled component.
 */
function assignIndexes(labels) {
  return fromPairs(labels.map((label, index) => [label, base.zIndex + index]));
}

/**
 * Result of `assignIndexes` set of indexes.
 * @example
 *  // z-index: 101;
 *  base.zIndex = 100;
 *  base.zIndexes = ['header', 'modal']
 *
 *  const Modal = styled.div`
 *    z-index: ${zIndex.modal};
 *  `;
 */
export const zIndex = assignIndexes(base.zIndexes);
