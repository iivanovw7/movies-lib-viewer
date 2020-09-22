/**
 * Module contains request utils test suite
 */
import { codesMap, getResponse } from '../../__mocks__/responseMock';
import { testName } from '../../__utils__/common';
import * as constants from '../../config/constants';
import Logger from '../logger';
import requestHelpers from '../request';

jest.mock('../logger', () => ({
  send: jest.fn(),
}));
jest.mock('superagent');

const URL = '/url';
const responseMock = {
  id: 1,
};

// prettier-ignore
describe(testName('utils.request', 'Request utils test suite'), () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it(testName('checkStatus', 'should throw'), () => {
    const response = () => requestHelpers.checkStatus(
      URL,
      getResponse(codesMap.serverError)
    );

    expect(response)
      .toThrow(Error);
  });

  it(testName('checkStatus', 'should send logger message'), () => {
    try {
      requestHelpers.checkStatus(URL, getResponse(codesMap.serverError));
    } catch {
      expect(Logger.send)
        .toHaveBeenCalledTimes(1);

      expect(Logger.send)
        .toHaveBeenLastCalledWith({
          type: constants.LOGGER_ERROR,
          message: 'Error during network request: Error',
        });
    }
  });

  it(testName('checkStatus', 'should return response'), () => {
    const response = requestHelpers.checkStatus(
      URL,
      getResponse(codesMap.normalResponse, responseMock)
    );

    expect(response)
      .toEqual({
        status: 200,
        body: responseMock
      });
  });

  it(testName('createRequest', 'should throw'), () => {
    const response = () => requestHelpers.createRequest({
      method: constants.HTTP_METHOD_GET,
    });

    expect(response)
      .toThrow(Error);
  });

  it(testName('createRequest', 'should send logger error message'), () => {
    try {
      requestHelpers.createRequest({
        method: constants.HTTP_METHOD_GET,
      });
    } catch {
      expect(Logger.send)
        .toHaveBeenCalledTimes(1);

      expect(Logger.send)
        .toHaveBeenLastCalledWith({
          type: constants.LOGGER_ERROR,
          message: 'Request URL is not set!',
        });
    }
  });

});
