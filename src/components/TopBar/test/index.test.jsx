/**
 * Module contains TopBar component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';

import ChildMock from '../../../__mocks__/childMock';
import { testName } from '../../../__utils__/common';
import settings from '../../../config/data';
import Button from '../../Button';
import Block from '../Block';
import Container from '../Container';
import TopBar from '../index';
import SocialButtonStyles from '../SocialButtonStyles';

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
      .toHaveLength(2);
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

    expect(button)
      .toHaveLength(3);

    expect(button.at(0).prop('href'))
      .toEqual(settings.social.facebook);

    expect(button.at(0).prop('styling'))
      .toBe(SocialButtonStyles);
  });
});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
