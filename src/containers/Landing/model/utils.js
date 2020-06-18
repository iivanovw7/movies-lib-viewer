/**
 * Module contains landing page utils
 * @module containers/Landing/model/utils
 */
import { filter, pipe, prop } from 'ramda';

import { isString } from '../../../utils/helpers';

// eslint-disable-next-line import/prefer-default-export
export const withPosters = (list) => filter(pipe(prop('poster_path'), isString))(list);
