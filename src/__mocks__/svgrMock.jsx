/**
 * Module contains @svgr loader mock
 * @module __mocks__/svgrMock
 * @author Igor Ivanov
 */
import React from 'react';

export default 'SvgrURL';
// eslint-disable-next-line react/jsx-props-no-spreading
const SvgrMock = React.forwardRef((props, ref) => <icon-mock ref={ref} {...props} />);

export const ReactComponent = SvgrMock;
