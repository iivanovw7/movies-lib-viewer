/**
 * Module contains ThemeSwitch reducer test suite
 */
import { testName } from '../../../../__utils__/common';
import { DARK_THEME } from '../../../../config/constants';
import { changeTheme } from '../../model/actions';
import { CHANGE_THEME } from '../../model/constants';
import reducer, { initialState } from '../../model/reducer';

let undef;

/* eslint-disable require-jsdoc, react/jsx-props-no-spreading */
// prettier-ignore
describe(testName('ThemeSwitch reducer', 'test suite'), function ThemeSwitchReducerTestSuite() {

  it('Should return the initial state on first run', () => {
    const nextState = initialState;
    const result = reducer(undef, {});

    // Assert
    expect( result )
      .toBe(nextState);
  });

  it('Should verify changeTheme action return', () => {
    const action = changeTheme(DARK_THEME);

    expect( action.type )
      .toBe( CHANGE_THEME );

    expect( action.mode )
      .toBe( DARK_THEME );
  });

  it('Should run reducer with changeTheme action', () => {
    const result = reducer(undef, changeTheme(DARK_THEME));

    expect( result )
      .toStrictEqual( { mode: DARK_THEME } );
  });

});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
