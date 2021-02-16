import TinyGesture from './TinyGesture.js';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('gesture-target');
  const gesture = new TinyGesture(target);

  gesture.on('swipeleft', event => {
    // The gesture was a left swipe.

    // This will always be true for a left swipe.
    gesture.swipedHorizontal;
    // This will be true if diagonalSwipes is on and the gesture was diagonal
    // enough to also be a vertical swipe.
    gesture.swipedVertical;

    console.log('swiped')
  });

})
