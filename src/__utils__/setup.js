/**
 * Module contains tests setup
 * @module __utils__/setup
 * @author Igor Ivanov
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Enzyme, { configure } from 'enzyme';
import jsdom from 'jsdom';

// eslint-disable-next-line import/no-extraneous-dependencies
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

const dom = new jsdom.JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost:4428',
  pretendToBeVisual: true,
});
const win = dom.window;

global.document = win.document;
global.window = win;
global.localStorage = win.localStorage;
global.requestAnimationFrame = win.requestAnimationFrame;
global.cancelAnimationFrame = win.cancelAnimationFrame;

// eslint-disable-next-line no-shadow
global.window.IntersectionObserver = class IntersectionObserver {
  // eslint-disable-next-line no-useless-constructor,require-jsdoc,no-empty-function
  constructor() {}

  // eslint-disable-next-line class-methods-use-this,require-jsdoc
  observe(cb) {
    return cb;
  }

  // eslint-disable-next-line class-methods-use-this,require-jsdoc
  unobserve() {
    return null;
  }
};

global.window.IntersectionObserverEntry = {};
global.window.IntersectionObserverEntry.prototype = {
  intersectionRatio: {},
};

configure({ adapter: new Adapter() });
