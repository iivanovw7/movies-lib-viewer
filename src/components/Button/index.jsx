/**
 * Module contains button component
 * @module components/Button
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import * as R from 'ramda';
import React from 'react';

import { isUndefined } from '../../utils/helpers';

import StyledButton from './StyledButton';
import StyledLink from './StyledLink';

/**
 * Creates styled button component.
 * @name Components/Button
 * @method
 *
 * @param {Object.<module:components/Button~propTypes>} props
 *  contains component props
 *  @see {@link module:components/Button~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
const Button = (props) => {
  const { variant, children, styling, onClick, index } = props;

  /* eslint-disable react/jsx-props-no-spreading */
  const ButtonElement = R.ifElse(
    R.pipe(R.prop('onClick'), isUndefined),
    R.always(<StyledLink {...props} />),
    R.always(<StyledButton {...props} />),
  );
  /* eslint-enable react/jsx-props-no-spreading */

  return (
    <ButtonElement data-index={index} variant={variant} styling={styling} onClick={onClick}>
      {children}
    </ButtonElement>
  );
};

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {string} [props.variant = 'primary'] - color variant string.
 * @property {string | Image} props.children - button children element or text.
 * @property {Array.<string>} [props.styling = []] - image additional styles.
 * @property {Function} props.onClick - click handler.
 * @property {string} props.href - target link.
 * @property {string} [props.target = '_blank'] - target prop.
 * @property {boolean} [props.hidden = false] - if element should be hidden.
 * @property {number} [props.index = 0] - index which is passed in `data-index` attribute.
 * @return {Array} React propTypes
 */
Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.node])),
  ]),
  styling: PropTypes.array,
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  hidden: PropTypes.bool,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Button.defaultProps = {
  target: '_blank',
  hidden: false,
  index: 0,
};

export default Button;
