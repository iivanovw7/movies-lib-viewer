/**
 * Module contains carousel reducer
 * @module containers/Carousel/model/reducer
 * @author Igor Ivanov
 */
import produce from 'immer';

import {
  CAROUSEL_JUMP,
  CAROUSEL_NEXT,
  CAROUSEL_PREV,
  CAROUSEL_DRAG,
  CAROUSEL_DONE,
  CAROUSEL_END,
} from './constants';
import { next, previous } from './utils';

export const initialState = {
  offset: 0,
  desired: 0,
  active: 0,
  end: false,
  loading: false,
  error: null,
  trending: null,
};

/* eslint-disable default-case, no-param-reassign */
/**
 * Carousel state reducer.
 * @param {Object} state
 *    current application state
 * @param {Object} action
 *    action object, contains action type and payload data.
 * @return {Function} produce
 *    Function for application state modification.
 */
const carouselReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CAROUSEL_JUMP:
        draft.desired = action.desired;
        break;
      case CAROUSEL_NEXT:
        draft.desired = next(action.length, state.active, action.skip);
        break;
      case CAROUSEL_PREV:
        draft.desired = previous(action.length, state.active, action.skip);
        break;
      case CAROUSEL_DRAG:
        draft.offset = action.offset;
        break;
      case CAROUSEL_DONE:
        draft.offset = null;
        draft.active = state.desired;
        break;
      case CAROUSEL_END:
        draft.end = true;
        break;
    }
  });

export default carouselReducer;
/* eslint-enable default-case, no-param-reassign */
