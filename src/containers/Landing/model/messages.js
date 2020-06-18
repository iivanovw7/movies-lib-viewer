/**
 * Module contains Landing page messages.
 * @module containers/Landing/model/messages
 */
import { defineMessages } from 'react-intl';

/**
 * Messages id prefix.
 * @constant {string}
 */
export const scope = 'mlv-app.containers.Landing';

/**
 * Contains messages set for react component.
 * @return {Function} defines messages set.
 */
export default defineMessages({
  landing: {
    id: `${scope}.title`,
    defaultMessage: 'Home',
  },
});
