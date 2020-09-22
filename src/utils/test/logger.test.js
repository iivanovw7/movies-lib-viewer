/**
 * Module contains logger test suite
 */
import { testName } from '../../__utils__/common';
import { sendMessage, InitLogger as Logger } from '../logger';

// prettier-ignore
describe(testName('utils.logger', 'Logger test suite'), () => {

  let spy;

  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it(testName('sendMessage', 'should check type and message'), () => {
    sendMessage('type', 'color', 'message');

    expect(spy)
      .toHaveBeenCalledTimes(1);

    expect(spy.mock.calls[0][0].includes('[type]'))
      .toBe(true);

    expect(spy.mock.calls[0][0].includes('message'))
      .toBe(true);
  });

  it(testName('sendMessage', 'should check color'), () => {
    sendMessage('type', 'red', 'message');

    expect(spy)
      .toHaveBeenCalledTimes(1);

    expect(spy.mock.calls[0][1].includes('red'))
      .toBe(true);

    expect(spy.mock.calls[0][3].includes('red'))
      .toBe(true);
  });

  it(testName('sendMessage', 'should check inherit prop'), () => {
    sendMessage('type', 'red', 'message');

    expect(spy)
      .toHaveBeenCalledTimes(1);

    expect(spy.mock.calls[0][2].includes('inherit'))
      .toBe(true);

    expect(spy.mock.calls[0][4].includes('inherit'))
      .toBe(true);
  });

  it('Should check Logger info mode', () => {
    Logger.call({}, { logLevel: 'info' });

    expect(spy)
      .toHaveBeenCalledTimes(1);

    expect(spy.mock.calls[0][0].includes('Info'))
      .toBe(true);

  });

  it('Should check Logger info mode', () => {
    Logger.call({}, { logLevel: 'off' });

    expect(spy)
      .not
      .toHaveBeenCalled();

  });

});
