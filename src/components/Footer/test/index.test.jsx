/**
 * Module contains Footer component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';

import { testName } from '../../../__utils__/utils';
import Separator from '../../Separator';
import Footer from '../index';
import Wrapper from '../Wrapper';

// prettier-ignore
describe(testName('Footer', 'component test suite'), function FooterTestSuite() {
  // eslint-disable-next-line require-jsdoc
  const Composition = (props, shouldMount = false) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const node = <Footer {...props} />;

    return shouldMount ? mount(node) : shallow(node);
  };

  it('Should match snapshot', () => {
    const component = Composition({});

    expect(component)
      .toMatchSnapshot();
  });

  it('Should render wrapper', () => {
    const component = Composition({});

    expect(component.find(Wrapper))
      .toHaveLength(1);
  });

  it('Should render Separator', () => {
    const component = Composition({});

    expect(component.find(Separator))
      .toHaveLength(1);
  });
});
