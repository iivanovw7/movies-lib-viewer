/**
 * Module contains ThemeSwitch utils test suite
 */
import { testName } from '../../../../__utils__/common';
import { DARK_THEME, LIGHT_THEME } from '../../../../config/constants';
import { DEFAULT_THEME } from '../../model/constants';
import nextThemeKey from '../../model/utils';

let undef;
/* eslint-disable require-jsdoc, react/jsx-props-no-spreading */
// prettier-ignore
describe(testName('ThemeSwitch utils', 'test suite'), function ThemeSwitchUtilsTestSuite() {

  function checkDef(val) {
    return expect( nextThemeKey(val) )
      .toBe( DEFAULT_THEME )
  }

  it('Should return next theme mode', () => {

    expect(nextThemeKey({ mode: LIGHT_THEME }))
      .toBe(DARK_THEME);

    checkDef({ mode: undef });
    checkDef({ mode: null });
    checkDef({ mode: 111 });
    checkDef({ mode: '12r' });
    checkDef({ mode: Symbol('124') });
    checkDef(undef);
    checkDef(null);
  });
});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
