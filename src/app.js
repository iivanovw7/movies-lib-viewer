/**
 * Module contains application entry point.
 * @module app
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import '../assets/css/sanitize.css';

import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import trendingData from './containers/Landing/model/saga';
import LocaleProvider from './containers/LocaleProvider';
import { addIntlPolyfills, translationMessages } from './locale';
import configureStore from './store/configureStore';
import history from './utils/history';
import { registerServiceWorker } from './utils/register-service-worker';

const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('mlv-app');

const webFontObserver = new FontFaceObserver('Roboto', {});

webFontObserver.load().then(() => {
  document.body.classList.add('withFonts');
});

addIntlPolyfills();

store.runSaga(trendingData);

const render = (messages) => {
  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <Provider store={store}>
      <LocaleProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LocaleProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

render(translationMessages);

if (module.hot) {
  // Webpack hot reloading
  module.hot.accept();
}

// eslint-disable-next-line no-undef
if (CONFIG === 'production') {
  registerServiceWorker();
} else {
  // eslint-disable-next-line global-require
  require('../assets/css/critical.css');
}
