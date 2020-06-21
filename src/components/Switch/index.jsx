/**
 * Module contains switch component
 * @module components/Switch
 * @author Igor Ivanov
 */
import React from 'react';

import Labels from './Labels';
import Toggle from './Toggle';

const Switch = () => (
  <Labels type="button" aria-pressed="true">
    <Toggle aria-hidden="true" />
  </Labels>
);

export default Switch;
