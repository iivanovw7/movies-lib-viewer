/**
 * Module contains Spinner component test suite
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import { connect, Provider } from 'react-redux';

import { storeFactory, testName } from '../../../__utils__/common';
import settings from '../../../config/data';
import { colorSet } from '../../../config/styles';
import Spinner, { OriginalSpinner } from '../index';

let undef;
const baseProps = {
  mode: 'dark',
  size: 55,
  color: 'red',
  style: {},
};

const store = storeFactory({
  theme: {
    mode: settings.theme,
  },
});

/* eslint-disable require-jsdoc, react/jsx-props-no-spreading */
// prettier-ignore
describe(testName('Spinner', 'component test suite'), function SpinnerTestSuite() {
  const Composition = (props, shouldMount = false) => {
    if (shouldMount) {
      const Component = connect(null, null)(Spinner);
      const node = (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );

      return mount(node);
    }

    return shallow(<OriginalSpinner {...props} />);
  };

  it('Should match snapshot', () => {
    const component = Composition({...baseProps});

    expect(component)
      .toMatchSnapshot();
  });

  it('Should shallow render <Spinner />', () => {
    const component = Composition({...baseProps});

    expect(component.find(SelfBuildingSquareSpinner))
      .toHaveLength(1);
  });

  it('Should shallow render <Spinner /> and check props', () => {
    const component = Composition({...baseProps});

    expect(component.prop('size'))
      .toEqual(baseProps.size);

    expect(component.prop('color'))
      .toEqual(baseProps.color);

    component.setProps({
      size: 108
    });

    expect(component.prop('size'))
      .toBe(108);

    expect(component.prop('style'))
      .toEqual(baseProps.style);


    component.setProps({
      style: undef
    });

    expect(component.prop('style'))
      .toEqual(OriginalSpinner.defaultProps.style);

  });

  it('Should shallow render <Spinner /> and verify color', () => {
    const propsMock ={
      ...baseProps,
      color: undef,
    };
    const component = Composition(propsMock, true);

    expect(component.find('StyledComponent').prop('color'))
      .toEqual(colorSet.dark.textColorPrimary);
  });

});
/* eslint-enable require-jsdoc, react/jsx-props-no-spreading */
