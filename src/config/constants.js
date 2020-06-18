/**
 * Module contains main application constants.
 * @module config/constants
 */

// Type keys for Logger messages
export const LOGGER_WARNING = Symbol('Warning');
export const LOGGER_STORE = Symbol('Store');
export const LOGGER_ERROR = Symbol('Error');
export const LOGGER_INFO = Symbol('Info');
export const LOGGER_SUCCESS = Symbol('Success');

// http method types map
export const HTTP_METHOD_GET = 'GET';
export const HTTP_METHOD_POST = 'POST';
export const HTTP_METHOD_HEAD = 'HEAD';
export const HTTP_METHOD_DELETE = 'DELETE';
export const HTTP_METHOD_PUT = 'PUT';
export const HTTP_METHOD_PATCH = 'PATCH';

// Themes
export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';
