/**
 * Module contains child element mock
 * @module __mocks__/childMock
 * @author Igor Ivanov
 */
import React from 'react';

const id = 'child-mock-id';
const child = 'child-mock-id';
const ChildMock = {
  child,
  id,
  component: <div id={id}>{child}</div>,
};

export default ChildMock;
