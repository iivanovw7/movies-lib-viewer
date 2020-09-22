/**
 * Module contains base request methods.
 * @module utils/request
 * @author Igor Ivanov
 */
import { either, prop, always } from 'ramda';
import request from 'superagent/lib/client';

import * as constants from '../config/constants';
import setting from '../config/data';

import Logger from './logger';

/**
 * Checks if a network request came back with correct header,
 *  if not throws error.
 *
 * @param  {string} url
 *    requested URL
 * @param  {object} response
 *    A response from a network request
 *
 * @return {object|undefined}
 *    Returns response, or throws
 */
function checkStatus(url, response) {
  const { status, statusText } = response;

  if (status >= 200 && status < 300) {
    Logger.send({
      type: constants.LOGGER_INFO,
      message: `Request: ${url}. \n Received code: ${status}.`,
    });

    return response;
  }

  Logger.send({
    type: constants.LOGGER_ERROR,
    message: `Error during network request: ${statusText}`,
  });

  throw new Error(statusText);
}

/**
 * Initiates network request.
 *
 * @param {Object} requestData
 *    request data set.
 * @return {function | undefined} returns superagent request.
 */
function sendRequest(requestData) {
  const { method, url, headerSet, timeout, query, body } = requestData;

  return request(method, url)
    .timeout(timeout || setting.requestTimeout)
    .set(headerSet)
    .query(query)
    .send(body)
    .then((res) => checkStatus(url, res))
    .then((res) => ({
      headers: res.headers,
      body: res.body,
      status: res.status,
    }))
    .catch((err) => {
      Logger.send({
        type: constants.LOGGER_ERROR,
        message: `Error during network request: ${err}`,
      });
    });
}

/**
 * Prepares base request data.
 *
 * @param {Object} parameters
 *    request parameters.
 * @return {function | undefined} returns request method.
 */
function createRequest(parameters) {
  const headerSet = either(prop('headerSet'), always({ 'Content-Type': 'application/json' }))(parameters);
  const requestData = {
    method: constants.HTTP_METHOD_GET,
    ...parameters,
    headerSet,
  };

  if (!requestData.url) {
    Logger.send({
      type: constants.LOGGER_ERROR,
      message: `Request URL is not set!`,
    });

    throw new Error('Request URL is not set!');
  }

  return sendRequest(requestData);
}

const requestHelpers = {
  checkStatus,
  sendRequest,
  createRequest,
};

export default requestHelpers;
