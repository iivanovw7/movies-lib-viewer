/**
 * Module contains ThemeSwitch component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { connect, Provider } from 'react-redux';

import { noop } from '../../../__utils__/stub';
import { storeFactory, testName, history } from '../../../__utils__/utils';
import Button from '../../../components/Button';
import Img from '../../../components/Img';
import { DARK_THEME, LIGHT_THEME } from '../../../config/constants';
import settings from '../../../config/data';
import { OriginalThemeSwitch, mapStateToProps, mapDispatchToProps } from '../index';
import { changeTheme } from '../model/actions';
import { CHANGE_THEME } from '../model/constants';

const baseProps = {
  mode: 'dark',
  size: 55,
  color: 'red',
  style: {},
  onThemeChange: noop,
  history,
};
const stateMock = {
  theme: {
    mode: settings.theme,
  },
};
const store = storeFactory(stateMock);

/* eslint-disable require-jsdoc, react/jsx-props-no-spreading */
// prettier-ignore
describe(testName('ThemeSwitch', 'component test suite'), function ThemeSwitchTestSuite() {
  const Composition = (props, shouldMount = false) => {
    if (shouldMount) {
      const Component = connect(null, { changeTheme })(OriginalThemeSwitch);
      const node = (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );

      return mount(node);
    }

    return shallow(<OriginalThemeSwitch {...props} />);
  };

  it('Should match snapshot', () => {
    const component = Composition({...baseProps});

    expect(component)
      .toMatchSnapshot();
  });

  it('Should shallow render <Button />', () => {
    const component = Composition({...baseProps});

    expect(component.find(Button))
      .toHaveLength(1);
  });

  it('Should shallow render <Img />', () => {
    const component = Composition({...baseProps});

    expect(component.find(Img))
      .toHaveLength(1);

    expect( component.find(Img).prop('src') )
      .toBe('SvgrURL');
  });

  it('Should render <ThemeSwitch />', () => {
    const onThemeChangeStub = jest.fn();
    const props = {
      ...baseProps,
      onThemeChange: onThemeChangeStub,
    };
    const component = Composition(props, true);

    component.find('button')
      .at(0)
      .simulate('click');

    expect(onThemeChangeStub)
      .toHaveBeenCalledTimes(1);

    expect(onThemeChangeStub.mock.calls[0][0])
      .toBe(LIGHT_THEME);

  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onThemeChange(LIGHT_THEME);

    expect(dispatch.mock.calls[0][0])
      .toStrictEqual({
        mode: LIGHT_THEME,
        type: CHANGE_THEME
      });

  });

  it('mapStateToProps', () => {
    expect(mapStateToProps(stateMock))
      .toStrictEqual({
        mode: DARK_THEME
      })
  });

});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
