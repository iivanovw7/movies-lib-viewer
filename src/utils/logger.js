/**
 * Module contains logger util.
 * @module utils/logger
 */
import * as constants from '../config/constants';
import * as config from '../config/data';

import { formatDate } from './date';

/**
 * Send logger message of appropriate type
 * @param {string} type
 *    message type
 * @param {string} color (rgba)
 *    message color
 * @param {string} message text
 *    message content
 * @return {void}
 */
function sendMessage(type, color, message) {
  const date = new Date();

  // eslint-disable-next-line no-console
  console.log(
    `%c[${type}]%c ${message}\n%c[Timestamp]%c ${formatDate(date)}`,
    `color: ${color}`,
    'color: inherit',
    `color: ${color}`,
    'color: inherit',
  );
}

/**
 * Setup application Logger instance in appropriate mode
 * @param {object} options
 *    logger options
 * @constructor
 */
const Logger = function Logger(options) {
  this.mode = options.logLevel || 'off';

  if (this.mode !== 'off') {
    sendMessage('Info', 'rgb(49,196,251)', `Logger is in [${this.mode} only] mode.`);
  }
};

/**
 * Creates logger message of appropriate type, allows debug messages in debug mode
 *
 * @param {Object} args
 *    arguments
 * @param {symbol} args.type
 *    constant, message sender type
 * @param {string} args.message
 *    logger message
 *
 * @return {null|void}
 *    logger message
 */
Logger.prototype.send = function send(args) {
  const { type, message } = args;
  const { mode } = this;

  if (mode === 'off') {
    return null;
  }

  switch (type) {
    case constants.LOGGER_ERROR:
      return sendMessage('Error', 'rgb(255, 105, 100)', message);
    case constants.LOGGER_SUCCESS:
      return sendMessage('Success', 'rgb(102,255,69)', message);
    case constants.LOGGER_STORE:
      return mode === 'debug' ? sendMessage('Store', 'rgb(243,25,255)', message) : null;
    case constants.LOGGER_WARNING:
      return mode === 'debug' ? sendMessage('Warning', 'rgb(255, 220, 93)', message) : null;
    case constants.LOGGER_INFO:
      return mode === 'debug' ? sendMessage('Info', 'rgb(49,196,251)', message) : null;
    default:
      return null;
  }
};

// Ensure Singleton has one instance
const instance = new Logger(config.default);
Object.freeze(instance);

export default instance;
export { sendMessage, Logger as InitLogger };
