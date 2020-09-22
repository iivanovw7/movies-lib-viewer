import { testName } from '../../__utils__/common';
import CheckProp from '../../__utils__/heplers/object';
import { DARK_THEME } from '../constants';
import settings from '../data';

// prettier-ignore
describe(testName('config.data', 'config.data test suite'), function ConfigDataTestSuite() {
  it(`Should contain main settings parameters`, () => {
    const check = new CheckProp({
      param: settings,
    });

    check
      .checkType('object')
      .checkProp('logLevel', 'string', 'off')
      .checkProp('theme', 'string', DARK_THEME)
      .checkProp('locale', 'string', 'en')
  });

  it(`Should contain network settings parameters`, () => {
    const check = new CheckProp({
      param: settings.net,
    });

    check
      .checkType('object')
      .checkProp('tmdbUrl', 'string')
      .checkProp('tmdbImageUrl', 'string')
      .checkProp('requestTimeout', 'number')
  });
});
