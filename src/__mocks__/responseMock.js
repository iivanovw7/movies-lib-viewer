/**
 * Module contains file response mock
 * @module __mocks__/response
 * @author Igor Ivanov
 */

/**
 * Responses map.
 * @type {Object}
 */
export const codesMap = {
  serverError: Symbol('serverError'),
  notFound: Symbol('notFound'),
  normalResponse: Symbol('normalResponse'),
};

/**
 * Headers mock.
 * @type {Object}
 */
export const headersMock = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Creates response stub with parameters.
 * @param {symbol} key - type key.
 * @param {*} data - response data.
 * @return {object} response
 */
export function getResponse(key, data = null) {
  const response = {
    status: 200,
  };

  switch (key) {
    case codesMap.normalResponse: {
      if (typeof data === 'string') {
        response.text = data;
      } else {
        response.body = data;
      }
      return response;
    }
    case codesMap.serverError: {
      response.status = 500;
      response.statusText = 'Error';
      return response;
    }
    case codesMap.notFound: {
      response.status = 404;
      return response;
    }
    default: {
      response.status = 500;
      return response;
    }
  }
}
