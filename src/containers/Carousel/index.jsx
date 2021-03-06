/**
 * Module contains carousel component.
 * @module containers/Carousel
 * @author Igor Ivanov
 */
import * as PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { compose } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { breakpoints } from '../../config/styles';
import useDidUpdate from '../../utils/hooks/useDidUpdate';
import useIntersect from '../../utils/hooks/useIntersect';
import useMedia from '../../utils/hooks/useMedia';
import { trendingNextPage } from '../Landing/model/actions';

import Arrow, { directionsMap } from './Arrow';
import Container from './Container';
import { carouselDesired, carouselDrag, carouselNext, carouselPrev, carouselDone } from './model/actions';
import { makeSelectCarousel } from './model/selectors';
import { swiped } from './model/utils';
import Poster from './Poster';

/**
 * Transition time prop in `ms`.
 * @type {number}
 */
const transitionTime = 900;

/**
 * Auto scroll interval in `ms.
 * @type {number}
 */
const interval = 3000;

/**
 * Elastic transform prop.
 * @type {string}
 */
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;

/**
 * Smooth transform prop.
 * @type {string}
 */
const smooth = `transform ${transitionTime}ms ease`;

/**
 * Single element width.
 * @type {number}
 */
const singleWidth = 170;

/**
 * Downloading poster image size.
 * @type {number}
 */
const posterSize = 300;

/**
 * Determines if carousel shout be auto-scrolled periodically.
 * @type {boolean}
 */
const autoScroll = false;

/* eslint-disable react/jsx-props-no-spreading, no-unused-vars */
/**
 * Carousel component.
 * @method
 *
 * @param {Object.<module:containers/Carousel~propTypes>} props
 *  contains component props
 *  @see {@link module:containers/Carousel~propTypes}
 *
 * @return {Node} React component with children.
 * @constructor
 */
function Carousel(props) {
  const {
    setActiveSlide,
    onCarouselSwipe,
    onCarouselNext,
    onCarouselPrev,
    onCarouselDone,
    onClick,
    setTrendingNextPage,
    active,
    desired,
    offset,
    slides,
  } = props;
  const { length } = slides;
  const [updated, setUpdated] = useState(false);
  const [autoScrollable, setAutoScrollable] = useState(true);
  const last = slides.length - 1;
  const [ref, entry] = useIntersect({
    threshold: [0, 1],
  });

  /**
   * Determines number of slides to skip while sliding.
   * @type {number}
   */
  const skip = useMedia(
    // Media queries
    [
      `(max-width: ${breakpoints.xs}px)`,
      `(max-width: ${breakpoints.md}px)`,
      `(min-width: ${breakpoints.lg}px)`,
    ],
    [1, 2, 3],
    1,
  );

  /**
   * Setting up react-swipeable handlers.
   * @type {Object.<SwipeableHandlers>}
   */
  const handlers = useSwipeable({
    onSwiping(e) {
      onCarouselSwipe(-e.deltaX);
    },
    onSwipedLeft(e) {
      const swipeLength = swiped(e, length, 1);
      if (swipeLength) {
        onCarouselPrev(swipeLength);
      } else {
        onCarouselSwipe(0);
      }
    },
    onSwipedRight(e) {
      const swipeLength = swiped(e, length, -1);
      if (swipeLength) {
        onCarouselNext(swipeLength);
      } else {
        onCarouselSwipe(0);
      }
    },
    trackMouse: true,
    trackTouch: true,
  });

  const style = {
    transform: 'translateX(0)',
    width: `${100 * (length + 2)}%`,
    left: `-${singleWidth * length}px`,
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100%',
  };

  if (desired !== active) {
    const shift = -(desired * singleWidth);
    style.transition = smooth;
    style.transform = `translateX(${shift}px)`;
  } else if (!offset) {
    if (offset !== 0) {
      style.transform = `translateX(${offset}px)`;
    } else {
      style.transition = elastic;
    }
  }

  /**
   * Downloads new set of elements.
   */
  useDidUpdate(() => {
    if (active !== 0 && entry.intersectionRatio > 0.1 && !updated) {
      setUpdated(true);
      setTrendingNextPage();
    }
  }, [active]);

  /**
   * Automatically changes active slide
   */
  useEffect(() => {
    let timeoutId;

    if (autoScroll) {
      timeoutId = setTimeout(() => onCarouselNext(length), interval);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [offset, active]);

  /**
   * Saves new active element after transition time has passed.
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => onCarouselDone(), transitionTime);

    if (updated) setUpdated(false);
    if (autoScroll && !autoScrollable) setAutoScrollable(true);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [desired]);

  /**
   *  Resets desired slide on component unmount.
   */
  useEffect(() => () => setActiveSlide(0), []);

  /**
   * Carousel click handler
   * @param {SyntheticEvent | Event} eventData - object represents event data.
   */
  function handleCarouselClick(eventData) {
    const index = Number(eventData.currentTarget.getAttribute('data-index'));

    eventData.preventDefault();
    eventData.stopPropagation();

    if (onClick) {
      onClick(index);
    } else {
      setActiveSlide(index);
    }
  }

  /**
   * Next slide switch event handler.
   */
  function handleNext() {
    if (active <= length) {
      setAutoScrollable(false);
      onCarouselNext(length, length - active >= skip ? skip : 0);
    }
  }

  /**
   * Prev slide switch event handler.
   */
  function handlePrev() {
    if (active !== 0) {
      setAutoScrollable(false);
      onCarouselPrev(length, active >= skip ? skip : 0);
    }
  }

  return (
    <Container>
      <Arrow hidden={active === 0} rotate={180} direction={directionsMap.prev} handleClick={handlePrev} />
      <Arrow hidden={active === length} rotate={0} direction={directionsMap.next} handleClick={handleNext} />
      <div {...handlers} style={style}>
        {slides.slice(0, last).map((slide, index) => (
          <Poster
            key={uuidv4()}
            slide={slide}
            id={onClick ? slide.id : index}
            posterSize={posterSize}
            onClick={handleCarouselClick}
          />
        ))}
        <div ref={ref} data-ratio={entry.intersectionRatio}>
          <Poster
            slide={slides[last]}
            id={onClick ? slides[last].id : slides.length}
            posterSize={posterSize}
            onClick={handleCarouselClick}
          />
        </div>
      </div>
    </Container>
  );
}
/* eslint-enable react/jsx-props-no-spreading, no-unused-vars */
/**
 * @name propTypes
 * @type {Object}
 * @param {Object} props - React PropTypes
 *
 * @property {function} props.onCarouselSwipe
 *    swipe handler.
 * @property {function} props.onCarouselNext
 *    next slide changer.
 * @property {function} props.onCarouselPrev
 *    prev slide changer.
 * @property {function} props.onCarouselDone
 *    animation finished.
 * @property {function} props.setActiveSlide
 *    changes active slide (jump).
 * @property {function} props.setTrendingNextPage
 *    triggers loading of new set of elements.
 * @property {Array.<*>} props.slides
 *    slides list.
 * @property {function} [onClick]
 *    optional element click handler.
 * @property {number} [active]
 *    active slide number.
 * @property {number} [desired]
 *    desired slide number.
 * @property {number} [offset]
 *    slide offset value.
 *
 * @return {Array} React propTypes
 */
Carousel.propTypes = {
  onCarouselSwipe: PropTypes.func.isRequired,
  onCarouselNext: PropTypes.func.isRequired,
  onCarouselPrev: PropTypes.func.isRequired,
  onCarouselDone: PropTypes.func.isRequired,
  setActiveSlide: PropTypes.func.isRequired,
  setTrendingNextPage: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.number,
  desired: PropTypes.number,
  offset: PropTypes.number,
};

/**
 * Function selects parts of the state required in component.
 * @method
 * @param {Object} state
 *    Object contains application state.
 * @see {@link module:containers/Carousel/model/selectors}
 * @return {Object} state object
 */
const mapStateToProps = (state) => {
  const { offset, desired, active } = makeSelectCarousel(state);

  return {
    active,
    desired,
    offset,
  };
};

/**
 * Function mapping dispatch to props.
 * Dispatching action which may cause change of application state.
 * @func mapDispatchToProps
 * @param {function} dispatch method.
 * @return {Object} redux container
 */
export function mapDispatchToProps(dispatch) {
  return {
    setActiveSlide: (slide) => dispatch(carouselDesired(slide)),
    onCarouselSwipe: (length) => dispatch(carouselDrag(length)),
    onCarouselNext: (length, skip) => dispatch(carouselNext(length, skip)),
    onCarouselPrev: (length, skip) => dispatch(carouselPrev(length, skip)),
    onCarouselDone: () => dispatch(carouselDone()),
    setTrendingNextPage: () => dispatch(trendingNextPage()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Carousel);
