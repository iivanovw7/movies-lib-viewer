/**
 * Module contains Img component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { css } from 'styled-components';

import { noop } from '../../../__utils__/stub';
import { testName, mountWithTheme } from '../../../__utils__/utils';
import Img, { StyledImg } from '../index';

const baseProps = {
  src: 'link',
  alt: 'alt text',
  styling: [],
  className: 'test className',
  handleLoad: noop,
};

// prettier-ignore
describe(testName('Img', 'component test suite'), function ImgTestSuite() {
  // eslint-disable-next-line require-jsdoc
  const Composition = (props, shouldMount = false) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const node = <Img {...props} />;

    return shouldMount ? mount(node) : shallow(node);
  };

  it('Should match snapshot', () => {
    const fakeProps = {
      ...baseProps,
    };
    const component = Composition(fakeProps);

    expect(component)
      .toMatchSnapshot();
  });

  it('Should render StyledImage', () => {
    const fakeProps = {
      ...baseProps,
    };
    const component = Composition(fakeProps);

    expect(component.find(StyledImg))
      .toHaveLength(1);
  });

  it('Should render component with props', () => {
    const StylesMock = css`
      height: 1.2em;
    `;
    const fakeProps = {
      ...baseProps,
      styling: StylesMock
    };
    const component = Composition(fakeProps);
    const image = component.find(StyledImg);

    expect(image.prop('src'))
      .toEqual(fakeProps.src);

    expect(image.prop('alt'))
      .toEqual(fakeProps.alt);

    expect(image.prop('className'))
      .toEqual(fakeProps.className);

    expect(image.prop('styling'))
      .toBe(StylesMock);
  });

  it('Should verify custom style rule on mount', () => {
    const Styles = css`
      height: 1.2em;
    `;
    const propsMock = {
      ...baseProps,
      styling: Styles
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const component = mountWithTheme(<Img {...propsMock} />);

    expect(component.find(StyledImg))
      .toHaveStyleRule('height', '1.2em');
  });
});
