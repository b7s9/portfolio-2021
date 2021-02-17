import TinyGesture from './TinyGesture.js';

document.addEventListener('DOMContentLoaded', () => {
  const textContent = document.getElementById('text-content');
  const galleryContent = document.getElementById('gallery-content');
  if (textContent) {

    const gesture = new TinyGesture(textContent);

    gesture.on('swipeleft', event => {
      textContent.hidden = true;
      galleryContent.hidden = false;

      console.log('swiped Left')
    });
  }
  if (galleryContent) {
    const gesture = new TinyGesture(galleryContent);

    gesture.on('swiperight', event => {
      textContent.hidden = false;
      galleryContent.hidden = true;

      console.log('swiped Right')
    });
  }

})
