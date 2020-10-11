/**
 * Module contains Rating component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { css } from 'styled-components';

import { testName } from '../../../__utils__/common';
import { checkContent } from '../../../__utils__/heplers/dom';
import Circle from '../Circle';
import Figure from '../Figure';
import Rating, { colorSet } from '../index';
import Rate from '../Rate';
import Text from '../Text';

const basePropsMock = {
  value: 4,
  min: 0,
  max: 10,
};

// prettier-ignore
describe(testName('Rating', 'component test suite'), function FooterTestSuite() {
  // eslint-disable-next-line require-jsdoc
  const Composition = (props, shouldMount = false) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const node = <Rating {...props} />;

    return shouldMount ? mount(node) : shallow(node);
  };

  // eslint-disable-next-line require-jsdoc
  function check(target, name, value) {
    expect(target.prop(name))
      .toEqual(value);
  }

  it('Should match snapshot', () => {
    const component = Composition(basePropsMock);

    expect(component)
      .toMatchSnapshot();
  });

  it('Should render component with all children', () => {
    const component = Composition(basePropsMock);
    const figure = component.find(Figure);
    const text = component.find(Text);

    expect(text)
      .toHaveLength(1);

    check(text, 'x', '50%');
    check(text, 'y', '50%');

    expect(figure)
      .toHaveLength(1);

    check(figure, 'maxSize', '40px');

    expect(component.find(Circle))
      .toHaveLength(2);

    expect(component.find(Rate))
      .toHaveLength(1);

    checkContent(text, String(basePropsMock.value));
  });

  it('Should render component with custom styles', () => {
    const StylesMock = css`
      height: 1.2em;
    `;
    const component = Composition({
      ...basePropsMock,
      styling: StylesMock,
    });

    expect(component.find(Figure).prop('styling'))
      .toBe(StylesMock);
  });

  it('Should verify default strokeColor colors', () => {
    const component = Composition(
      basePropsMock,
      true
    );

    check(
      component.find(Circle).at(1),
      'stroke',
      colorSet[1]
    );

    component.setProps({
      value: 1
    })

    check(
      component.find(Circle).at(1),
      'stroke',
      colorSet[0]
    );

    component.setProps({
      value: 9
    })

    check(
      component.find(Circle).at(1),
      'stroke',
      colorSet[2]
    );
  })

  it('Should render dashed Rating element', () => {
    const component = Composition(basePropsMock);

    check(
      component.find(Circle).at(0),
      'strokeDasharray',
      0
    );

    component.setProps({
      trailSpaced: true
    })

    check(
      component.find(Circle).at(0),
      'strokeDasharray',
      1
    );

  });
});
