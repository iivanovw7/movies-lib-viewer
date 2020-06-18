/**
 * Module contains environment utils.
 * @module utils/env
 * @author Igor Ivanov
 */
/* eslint-disable import/prefer-default-export */
/**
 * Defines `IntersectionObserver` support.
 * @return {boolean}
 *  returns `true` if IntersectionObserver is fully supported and `false` otherwise.
 */
export const isObserverSupported = () =>
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype;
/* eslint-enable import/prefer-default-export */
