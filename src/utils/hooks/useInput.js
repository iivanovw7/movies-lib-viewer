/**
 * Module contains use input hook
 * @module utils/hooks/useInput
 */
import { useState } from 'react';

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};
