/**
 * Module contains component did update hook
 * @module utils/hooks/useDidUpdate
 */

import { useEffect, useRef } from 'react';

/**
 * Did update hook.
 *
 * @param {Function} callback
 *  callback function.
 * @param {*} [deps = undefined]
 *  parameter passed in useEffect deps.
 * @example
 * const [count, setCount] = useState(0)
 *
 * useDidUpdate(() => {
 *   counter()
 * }, [count])
 *
 */
export default (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};
