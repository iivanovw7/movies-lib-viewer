/**
 * Checks if passed content is identical to the content of element passed,
 *  or verifies if element contains value passed in params.
 *
 * @param {node | element} element
 *  Target element, which content is going to be verified.
 * @param {*} value
 *  Comparing value.
 * @param {boolean} includes
 *  If `true` - full element is going to be compared,
 *   if `false` - checks if element content contains target value.
 *
 * @author Igor Ivanov
 */
export function checkContent(element, value, includes = false) {
  // prettier-ignore
  expect( includes
    ? element.text().includes(value)
    : element.text()
  )
    .toBe( includes
      ? true
      : value
    );
}

export default {
  checkContent,
};
