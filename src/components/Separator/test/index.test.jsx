/**
 * Module contains Separator component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';

import { testName } from '../../../__utils__/common';
import { zIndex } from '../../../style/mixins';
import Separator from '../index';

// prettier-ignore
describe(testName('Separator', 'component test suite'), function SeparatorTestSuite() {

  it('Should shallow render <Separator />', () => {
    const component = shallow(<Separator />);

    expect(component)
      .toHaveLength(1);
  });

  it('Should mount <Separator /> and verify how css rules were applied', () => {
    const component = mount(<Separator />);
    const separator = component.find(Separator);

    expect(component.find(Separator))
      .toHaveLength(1);

    expect(separator)
      .toHaveLength(1);

    expect(separator)
      .toHaveStyleRule('width', '100%');

    expect(separator)
      .toHaveStyleRule('z-index', String(zIndex.Separator));

  });
});
