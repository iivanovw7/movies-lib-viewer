/**
 * Module contains date related functions.
 * @module utils/date
 */
/* eslint-disable import/prefer-default-export */
/**
 * Converts timestamp in formatted date
 * @param {Date} timestamp, using "new Date()" by default
 * @return {string} returns formatted date
 */
export function formatDate(timestamp = new Date()) {
  const date = {
    dd: timestamp.getDate(),
    mm: timestamp.getMonth() + 1,
    hh: timestamp.getHours(),
    min: timestamp.getMinutes(),
    ss: timestamp.getSeconds(),
    yyyy: timestamp.getFullYear(),
  };

  if (date.dd < 10) {
    date.dd = `0${date.dd}`;
  }

  if (date.mm < 10) {
    date.mm = `0${date.mm}`;
  }

  return `[${date.dd}/${date.mm}/${date.yyyy}][${date.hh}-${date.min}-${date.ss}]`;
}
/* eslint-enable import/prefer-default-export */
