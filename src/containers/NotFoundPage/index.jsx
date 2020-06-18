/**
 * Module contains Page not fount component.
 * @module containers/NotFoundPage
 */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../../components/H1';

import messages from './model/messages';

/**
 * Creates PageNotFound component.
 * @method
 * @return {Node} React component with children.
 * @constructor
 */
function NotFound() {
  const { header } = messages;
  return (
    <article>
      <H1>
        <FormattedMessage id={header.id} defaultMessage={header.defaultMessage} />
      </H1>
    </article>
  );
}

export default memo(NotFound);
