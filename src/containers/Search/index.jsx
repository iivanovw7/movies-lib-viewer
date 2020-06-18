/**
 * Module contains Search component.
 * @module containers/Search
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Input from '../../components/Input';
import useInput from '../../utils/hooks/useInput';

import SearchLabelStyles from './SearchLabelStyles';

function Search(props) {
  const { value: query, bind: bindSearchField, reset: resetSearchInput } = useInput('');

  useEffect(() => {
    resetSearchInput();
  }, []);

  return (
    <Input
      id="mlv-search-bar"
      type="text"
      label="search"
      labelStyling={SearchLabelStyles}
      {...bindSearchField}
    />
  );
}

export default Search;
