/**
 * Module contains main application utils
 * @module containers/App/model/util
 */

/**
 * Removes loading screen.
 */
export function hideWaitScreen() {
  const waitScreen = document.querySelector('.mlv-preloader');

  if (waitScreen && !waitScreen.classList.contains('mlv-preloader-hidden')) {
    waitScreen.classList.add('mlv-preloader-hidden');
  }
}

/**
 * Display loading screen.
 */
export function showWaitScreen() {
  const waitScreen = document.querySelector('.mlv-preloader');

  if (waitScreen && waitScreen.classList.contains('mlv-preloader-hidden')) {
    waitScreen.classList.remove('mlv-preloader-hidden');
  }
}
