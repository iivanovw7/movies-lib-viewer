/**
 * Module contains Header component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';

import HeaderBg from '../../../../assets/img/loaderBg.jpg';
import ChildMock from '../../../__mocks__/childMock';
import { testName, mountWithTheme } from '../../../__utils__/utils';
import { colorSet } from '../../../config/styles';
import Button from '../../Button';
import Separator from '../../Separator';
import Container from '../Container';
import Header from '../index';
import LogoStyles from '../LogoStyles';
import Wrapper from '../Wrapper';

/* eslint-disable require-jsdoc, react/jsx-props-no-spreading */
// prettier-ignore
describe(testName('Header', 'component test suite'), function HeaderTestSuite() {
  const Composition = (props, children, shouldMount = false) => {
    const node = (<Header {...props}>{children}</Header>);

    return shouldMount ? mount(node) : shallow(node);
  };

  it('Should match snapshot', () => {
    const component = Composition({}, ChildMock.component);

    expect(component)
      .toMatchSnapshot();
  });

  it('Should render Wrapper', () => {
    const component = Composition({}, ChildMock.component);

    expect(component.find(Wrapper))
      .toHaveLength(1);
  });

  it('Should render Container', () => {
    const component = Composition({}, ChildMock.component);

    expect(component.find(Container))
      .toHaveLength(1);
  });

  it('Should render Separator', () => {
    const component = Composition({}, ChildMock.component);

    expect(component.find(Separator))
      .toHaveLength(1);
  });

  it('Should render child mock', () => {
    const component = Composition({}, ChildMock.component);
    const child = component.find(`#${ChildMock.id}`);

    expect(child)
      .toHaveLength(1);

    expect(child.text())
      .toEqual(ChildMock.child);
  });

  it('Should verify bg prop passing on shallow', () => {
    const component = Composition({}, ChildMock.component);

    expect(component.prop('bg'))
      .toBe(HeaderBg);

  });

  /*
    Had to downgrade versions to styled-components@4.4.1 and jest-styled-components@6.0.0
      as last versions are no compatible with styled theming, details:
      https://github.com/styled-components/jest-styled-components/issues/234
    TODO upgrade versions after issue is resolved
   */
  it('Should verify bg style rule on mount', () => {
    const component = mountWithTheme(<Header>{ChildMock.component}</Header>);

    expect(component.find(Wrapper))
      .toHaveStyleRule('display', 'column');

    expect(component)
      .toHaveStyleRule('background-color', `${colorSet.dark.headerBackgroundPrimary}`);

  });

  it(testName('Button', 'Should render <Button /> with props'), () => {
    const component = Composition({}, ChildMock.component);
    const button = component.find(Button);

    expect(button)
      .toHaveLength(1);

    expect(button.prop('target'))
      .toEqual('_self');

    expect(button.prop('href'))
      .toEqual('/');

    expect(button.prop('styling'))
      .toBe(LogoStyles);
  });

});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
