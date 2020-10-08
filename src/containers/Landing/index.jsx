/**
 * Module contains landing page main component.
 * @module containers/Landing
 * @author Igor Ivanov
 */

import * as PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Spinner from '../../components/Spinner';
import { isNumber, isNilOrEmpty, findByPropValue } from '../../utils/helpers';
import Carousel from '../Carousel';
import { selectLocale } from '../LocaleProvider/model/selectors';

import Container from './Container';
import { loadTrending } from './model/actions';
import messages from './model/messages';
import { selectSummary, makeSelectLanding } from './model/selectors';
import { withPosters } from './model/utils';
import Section from './Section';

/**
 * Landing page component.
 * @method
 * @param {Object} props
 *  contains component props
 *  @see {@link module:containers/Landing~propTypes}
 * @return {Node} React component with children.
 * @constructor
 */
export function Landing(props) {
  const { landing } = messages;
  const { onTrendingLoading, trending, loading, page, error, locale } = props;
  const noTrending = isNilOrEmpty(trending);
  const preloading = Boolean(loading && noTrending);

  useEffect(() => {
    onTrendingLoading(page, locale);
  }, [page]);

  return (
    <Container>
      <Section>
        <FormattedMessage id={landing.id} defaultMessage={landing.defaultMessage}>
          {(title) => (
            <Helmet>
              <title>{title}</title>
              <meta name="description" content="homepage" />
            </Helmet>
          )}
        </FormattedMessage>
        {
          // prettier-ignore
          preloading || error || noTrending
            ? (<Spinner />)
            : (<Carousel slides={withPosters(trending)} />)
        }
      </Section>
    </Container>
  );
}

/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 * @property {Array | null} trending
 *    trending movies.
 * @property {boolean} loading
 *    application loading state.
 * @property {Object} [error = null]
 *    contains error object, contains `null` if there is no error.
 * @property {function} onTrendingLoading
 *    Triggers trending movies data loading.
 * @property {number} [page = 1]
 *    trending request page number.
 * @property {string} [props.locale = 'en']
 *    locale string.
 * @return {Array} React propTypes
 */
Landing.propTypes = {
  onTrendingLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
  trending: PropTypes.array,
  page: PropTypes.number,
  locale: PropTypes.string,
};

Landing.defaultProps = {
  page: 1,
  trending: [],
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @see {@link module:containers/Landing/model/selectors}
 * @return {Function} selector
 */
const mapStateToProps = (state) => {
  const { trending, loading, error, page } = makeSelectLanding(state);

  return {
    trending,
    loading,
    error,
    page,
    locale: selectLocale(state),
  };
};

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {Function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch) {
  return {
    onTrendingLoading: (page, locale) => dispatch(loadTrending(page, locale)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Landing);
