/**
 * Module contains test utils
 * @module __utils__/utils
 * @author Igor Ivanov
 */
import chalk from 'chalk';
import { mount, shallow } from 'enzyme';
import { createMemoryHistory } from 'history';
import React from 'react';
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'styled-components';

import settings from '../config/data';
import rootReducer from '../store/configureStore';

/**
 * Theme mock value.
 * @type {{mode: string}}
 */
const theme = {
  mode: settings.theme,
};

/**
 * Configure saga middleware.
 */
const sagaMiddleware = createSagaMiddleware({});

/* eslint-disable */

/**
 * @param {object} initialState - initial state to store
 * @function storeFactory
 * @returns {Store} Redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

//Browser history mock
export const history = createMemoryHistory('/');

//Store mock
export const mockStore = configureMockStore([sagaMiddleware]);

export const testName = (title, description) => `[${chalk.yellow(title)}]: ${description}`;

/**
 * Styled theme mount HOC
 * @param child
 * @return {*}
 */
export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  });
}

/**
 * Styled theme shallow HOC
 * @param child
 * @return {*}
 */
export function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>,
  });
}

/**
 * Checks if passed content is identical to the content of element passed,
 *  or verifies if element contains value passed in params.
 *
 * @param {node | element} element
 *  Target element, which content is going to be verified.
 * @param {*} value
 *  Comparing value.
 * @param {boolean} includes
 *  If `true` - full element is going to be compared,
 *   if `false` - checks if element content contains target value.
 *
 * @author Igor Ivanov
 */
export function checkContent(element, value, includes = false) {
  expect( includes
    ? element.text().includes(value)
    : element.text()
  )
    .toBe( includes
      ? true
      : value
    );
}

/* eslint-enable */
