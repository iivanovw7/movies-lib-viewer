/**
 * Module contains switch component
 * @module components/Switch
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';

import Labels from './Labels';
import Toggle from './Toggle';

const Switch = (props) => {
  return (
    <Labels type="button" aria-pressed="true">
      <Toggle aria-hidden="true" />
    </Labels>
  );
};

export default Switch;
