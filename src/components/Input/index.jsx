/**
 * Module contains input component
 * @module components/Input
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import * as R from 'ramda';
import React, { createRef } from 'react';

import StyledInput from './StyledInput';
import StyledLabel from './StyledLabel';
import StyledSpan from './StyledSpan';

const Input = (props) => {
  const inputRef = createRef();
  const {
    label,
    validate,
    id,
    type,
    placeholder,
    onChange,
    value,
    onInput,
    labelStyling,
    inputStyling,
  } = props;

  return (
    <StyledLabel
      styling={labelStyling}
      onMouseEnter={() => {
        inputRef.current.focus();
      }}
    >
      {label}
      {'  '}
      <StyledSpan>{validate}</StyledSpan>
      <StyledInput
        styling={inputStyling}
        type={type}
        ref={inputRef}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onInput={onInput}
      />
    </StyledLabel>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  validate: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onInput: PropTypes.func,
  labelStyling: PropTypes.array,
  inputStyling: PropTypes.array
};

export default Input;
