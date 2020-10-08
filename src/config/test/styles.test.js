import { testName } from '../../__utils__/common';
import CheckProp from '../../__utils__/heplers/object';
import { base } from '../styles';

// prettier-ignore
describe(testName('config.styles', 'config.styles test suite'), function ConfigStylesTestSuite() {
  it(`Should contain base parameters`, () => {
    const check = new CheckProp({
      param: base,
    });

    check
      .checkType('object')
      .checkProp('topBarHeight', 'number')
      .checkProp('headerHeight', 'number')
      .checkProp('footerHeight', 'number')
      .checkProp('zIndex', 'number');

    expect( base )
      .toHaveProperty(
        'zIndexes', [
          'TopBar',
          'Header',
          'Footer',
          'Separator',
          'CarouselProgress',
          'Carousel',
          'CarouselArrows',
          'CarouselRating'
        ]);
  });

});
