/**
 * Module used to create combine reducers.
 * @module store/combineReducers.
 */
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import carouselReducer from '../containers/Carousel/model/reducer';
import landingPageReducer from '../containers/Landing/model/reducer';
import languageProviderReducer from '../containers/LocaleProvider/model/reducer';
import themeReducer from '../containers/ThemeSwitch/model/reducer';
import history from '../utils/history';

/**
 * Merging reducers.
 * @return {function} createReducer - returns function used for store combining.
 */
export default function createReducer() {
  return combineReducers({
    landing: landingPageReducer,
    language: languageProviderReducer,
    carousel: carouselReducer,
    theme: themeReducer,
    router: connectRouter(history),
  });
}
