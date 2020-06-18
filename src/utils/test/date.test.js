/**
 * Module contains date utils test suite
 */
import * as mocks from '../../__mocks__/dateMocks';
import { testName } from '../../__utils__/utils';
import { formatDate } from '../date';

describe(testName('utils.date', 'Dates test suite'), () => {
  const { mockedDates } = mocks;

  it(testName('formatDate', 'Should run with mock and verify results'), () => {
    const { raw, formatted } = mockedDates;
    expect(formatDate(raw)).toEqual(formatted);
    expect(typeof formatDate(undefined)).toBe('string');
  });
});
