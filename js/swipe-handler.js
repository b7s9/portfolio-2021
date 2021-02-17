import TinyGesture from './TinyGesture.js';
let textContent = b7s9.textContent
let galleryContent = b7s9.galleryContent

document.addEventListener('DOMContentLoaded', () => {

  if (textContent) {

    const gesture = new TinyGesture(textContent);

    gesture.on('swipeleft', event => {
      b7s9.showGallery()
    });
  }

  if (galleryContent) {
    const gesture = new TinyGesture(galleryContent);

    gesture.on('swiperight', event => {
      b7s9.showTextContent()
    });
  }

})
