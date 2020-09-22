/**
 * Module contains useThrottle hook
 * @module utils/hooks/useThrottle
 */
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook, could be use for throttling values inside components.
 * @param {*} value - value to be throttled.
 * @param {number} limit - set point in `ms`.
 * @return {*} throttled value.
 *
 * @example
 *  const [text, setText] = useState("Hello");
 *  const throttledText = useThrottle(text, 1000);
 *
 *  <input
 *    defaultValue={"Hello"}
 *    onChange={e => {
 *        setText(e.target.value);
 *    }}
 *  />
 *
 *  <p>Throttled value: {throttledText}</p>
 *
 */
export default (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(function runHandler() {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};
