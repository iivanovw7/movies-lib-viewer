/**
 * Module contains rating Circle
 * @module components/Rating/Circle
 * @author Igor Ivanov
 */
import { transparentize } from 'polished';
import styled from 'styled-components';

import { colorSet } from '../../config/styles';

const Circle = styled.circle`
  cx: 19;
  cy: 19;
  fill: ${transparentize(0.4, colorSet.dark.headerBackgroundSecondary)};
  r: 15.91549430918954;
  stroke: ${(props) => props.stroke};
`;

export default Circle;
