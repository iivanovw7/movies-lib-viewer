/**
 * Module contains Spinner component
 * @module components/Spinner
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React from 'react';
import { SelfBuildingSquareSpinner } from 'react-epic-spinners';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { colorSet } from '../../config/styles';
import { makeSelectTheme } from '../../containers/ThemeSwitch/model/selectors';

/**
 * Default spinner size in `px`.
 * @type {number}
 */
export const defaultSpinnerSize = 50;

/**
 * Creates image component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:components/Spinner~Spinner.propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const Spinner = ({ color, size, style, mode }) => (
  <SelfBuildingSquareSpinner color={color || colorSet[mode].textColorPrimary} size={size} style={style} />
);

/**
 * @name Spinner.propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {number} props.size - specifies how large the spinner should be rendered.
 * @property {string} [props.color = transparent] - Specifies the color of the spinner.
 * @return {Array} React propTypes
 */
Spinner.propTypes = {
  mode: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  style: PropTypes.object,
};

Spinner.defaultProps = {
  size: defaultSpinnerSize,
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-${defaultSpinnerSize * 0.5}px, -${defaultSpinnerSize * 0.5}px)`,
  },
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

export default connect(mapStateToProps, null)(Spinner);

export { Spinner as OriginalSpinner };
