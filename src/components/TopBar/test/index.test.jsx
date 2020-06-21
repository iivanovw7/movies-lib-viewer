/**
 * Module contains TopBar component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';

import ChildMock from '../../../__mocks__/childMock';
import { testName } from '../../../__utils__/utils';
import Button from '../../Button';
import Img from '../../Img';
import Block from '../Block';
import Container from '../Container';
import TopBar from '../index';
import LogoStyles from '../LogoStyles';

/* eslint-disable require-jsdoc, react/jsx-props-no-spreading */
// prettier-ignore
describe(testName('TopBar', 'component test suite'), function TopBarTestSuite() {
  const Composition = (props, children, shouldMount = false) => {
    const node = (<TopBar {...props}>{children}</TopBar>);

    return shouldMount ? mount(node) : shallow(node);
  };

  it('Should match snapshot', () => {
    const component = Composition({}, ChildMock.component);

    expect(component)
      .toMatchSnapshot();
  });

  it('Should render Container', () => {
    const component = Composition({}, ChildMock.component);

    expect(component.find(Container))
      .toHaveLength(1);
  });

  it('Should render Block', () => {
    const component = Composition({}, ChildMock.component);

    expect(component.find(Block))
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

  it(testName('Button', 'Should render <Button /> with props'), () => {
    const component = Composition({}, ChildMock.component, true);
    const button = component.find(Button);
    const image = component.find(Img);

    expect(button)
      .toHaveLength(1);

    expect(button.prop('variant'))
      .toEqual('primary');

    expect(button.prop('href'))
      .toEqual('https://www.themoviedb.org/?language=en-US');

    expect(image)
      .toHaveLength(1);

    expect(image.prop('alt'))
      .toEqual('TMDB');

    expect(image.prop('styling'))
      .toBe(LogoStyles);
  });
});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
