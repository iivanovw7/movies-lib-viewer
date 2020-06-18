/**
 * Module contains main application setup
 * @module containers/App
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Separator from '../../components/Separator';
import TopBar from '../../components/TopBar';
import GlobalStyle from '../../style/globals';
import LandingPage from '../Landing';
import LocaleSwitch from '../LocaleSwitch';
import NotFoundPage from '../NotFoundPage/Loadable';
import Search from '../Search';
import ThemeSwitch from '../ThemeSwitch';
import { DEFAULT_THEME } from '../ThemeSwitch/model/constants';
import { makeSelectTheme } from '../ThemeSwitch/model/selectors';

import { hideWaitScreen } from './model/util';
import Wrapper from './Wrapper';

/**
 * Main application component.
 * Contains router setup and global styles connection.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:containers/App~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function App(props) {
  const { mode } = props;

  useEffect(() => {
    hideWaitScreen();
  }, []);

  return (
    <ThemeProvider theme={{ mode }}>
      <Helmet titleTemplate="%s - The Movies Data Base Viewer" defaultTitle="Movies database viewer">
        <meta name="description" content="movies previewing application" />
      </Helmet>
      <Wrapper>
        <TopBar>
          <ThemeSwitch />
          <LocaleSwitch />
        </TopBar>
        <Header>
          <Search />
        </Header>
        <Separator />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.mode = DEFAULT_THEME] - theme mode string.
 * @return {Array} React propTypes
 */
App.propTypes = {
  mode: PropTypes.string,
};

App.defaultProps = {
  mode: DEFAULT_THEME,
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @see {@link module:containers/App/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectTheme(), (mode) => ({
  mode,
}));

export default connect(mapStateToProps, null)(App);
