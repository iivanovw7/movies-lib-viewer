/**
 * Module contains application theme switch component.
 * @module containers/ThemeSwitch
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createSelector } from 'reselect';

import Button from '../../components/Button';
import ButtonStyles from '../LocaleSwitch/ButtonStyles';

import { changeTheme } from './model/actions';
import { DEFAULT_THEME, THEME_RESOURCES } from './model/constants';
import { makeSelectTheme } from './model/selectors';
import nextThemeKey from './model/utils';
import ThemeImage from './ThemeImage';

/**
 * Creates ThemeSwitch component.
 * @func ThemeSwitch
 * @param {Object} props
 *  contains component props
 *  @see {@link module:containers/ThemeSwitch~PropTypes}
 * @return {Node} React component with children.
 * @constructor
 */
function ThemeSwitch(props) {
  const { mode, onThemeChange } = props;
  const themeKey = nextThemeKey(mode);
  const themeData = THEME_RESOURCES[themeKey];
  /**
   * Handles locale button click.
   * @return {*} return onLocaleChange handles with new theme name.
   */
  function handleClick() {
    return onThemeChange(themeKey);
  }

  return (
    <Button variant="primary" styling={ButtonStyles} onClick={handleClick}>
      {ThemeImage(themeData)}
    </Button>
  );
}

/**
 * @name PropTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.mode = DEFAULT_THEME] - locale string.
 * @property {Function} props.onThemeChange - change theme handler.
 * @return {Array} React propTypes
 */
ThemeSwitch.propTypes = {
  mode: PropTypes.string,
  onThemeChange: PropTypes.func.isRequired,
};

ThemeSwitch.defaultProps = {
  mode: DEFAULT_THEME,
};

/**
 * Function selects parts of the state required in component.
 * @func mapStateToProps
 * @see {@link module:containers/ThemeSwitch/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = createSelector(makeSelectTheme(), (mode) => ({
  mode,
}));

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch) {
  return {
    onThemeChange: (mode) => dispatch(changeTheme(mode)),
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ThemeSwitch);
