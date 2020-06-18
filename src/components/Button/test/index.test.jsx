/**
 * Module contains Button component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { css } from 'styled-components';

import ChildMock from '../../../__mocks__/childMock';
import { noop } from '../../../__utils__/stub';
import { testName } from '../../../__utils__/utils';
import Button from '../index';

// prettier-ignore
describe(testName('Button', 'component test suite'), function ButtonTestSuite() {
  // eslint-disable-next-line require-jsdoc
  const Composition = (props, children, shouldMount = false) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const node = <Button {...props}>{children}</Button>;

    return shouldMount ? mount(node) : shallow(node);
  };

  let undef;
  const baseProps = {
    variant: 'primary',
    onClick: noop,
    href: 'href',
    target: 'target',
    styling: [],
  };

  it('Should match snapshot', () => {
    const fakeProps = {
      ...baseProps,
    };
    const component = Composition(fakeProps, ChildMock.component, false);

    expect(component)
      .toMatchSnapshot();
  });

  it(testName('button', 'Should mount and check if onClick has been passed in props'), () => {
    const fakeProps = {
      ...baseProps,
    };
    const component = Composition(fakeProps, ChildMock.component, true);

    expect(component.find('button'))
      .toHaveLength(1);
  });
  // prettier-ignore
  it(testName('button: a', 'Should mount as link and check if no onClick has been passed in props'), () => {
    const fakeProps = {
      ...baseProps,
      onClick: undef,
    };
    const component = Composition(fakeProps, ChildMock.component, true);

    expect(component.find('a'))
      .toHaveLength(1);
  });
  // prettier-ignore
  it(testName('button', 'Should verify if all attributes have been passed to child component'), () => {
    const ButtonStyles = css`
      height: 1.2em;
    `;
    const fakeProps = {
      ...baseProps,
      onClick: undef,
      href: 'test_href',
      target: '_blank',
      styling: ButtonStyles,
    };
    const component = Composition(fakeProps, ChildMock.component, true);
    const child = component.find(`#${ChildMock.id}`);
    const button = component.find(Button);

    expect(child)
      .toHaveLength(1);

    expect(child.text())
      .toEqual(ChildMock.child);

    expect(button.prop('target'))
      .toEqual(fakeProps.target);

    expect(button.prop('href'))
      .toEqual(fakeProps.href);

    expect(button.prop('styling'))
      .toBe(ButtonStyles);
  });

  it(testName('button', 'Should simulate onClick event'), () => {
    const onClick = jest.fn();
    const fakeProps = {
      ...baseProps,
      onClick,
    };
    const component = Composition(fakeProps, ChildMock.child, true);

    component.find(Button)
      .at(0)
      .simulate('click');

    expect(onClick)
      .toHaveBeenCalled();
  });
});
