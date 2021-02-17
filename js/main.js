b7s9 = {
  textContent: document.getElementById('text-content'),
  galleryContent: document.getElementById('gallery-content'),
  textIndicator: document.getElementById('text-indicator'),
  galleryIndicator: document.getElementById('gallery-indicator'),
  textContentActive: true,
  showTextContent: function () {
    this.textContent.hidden = false;
    this.galleryContent.hidden = true;
    this.textContentActive = true;
    this.updateActiveColor()
  },
  showGallery: function () {
    this.textContent.hidden = true;
    this.galleryContent.hidden = false;
    this.textContentActive = false;
    this.updateActiveColor()
  },
  updateActiveColor: function () {
    if (b7s9.textContentActive) {
      textIndicator.classList.add('text-primary-light')
      galleryIndicator.classList.remove('text-primary-light')
    } else {
      textIndicator.classList.remove('text-primary-light')
      galleryIndicator.classList.add('text-primary-light')
    }
  }
}

let textIndicator = b7s9.textIndicator
let galleryIndicator = b7s9.galleryIndicator


if (textIndicator) {
  // init recolor
  b7s9.updateActiveColor()

  textIndicator.addEventListener('click', e => {
    b7s9.showTextContent()
  })
}

if (galleryIndicator) {
  galleryIndicator.addEventListener('click', e => {
    b7s9.showGallery()
  })
}

document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '37') {
    b7s9.showTextContent()
  }
  else if (e.keyCode == '39') {
    b7s9.showGallery()
  }
  // else if (e.keyCode == '38') {
  //     // up arrow
  // }
  // else if (e.keyCode == '40') {
  //     // down arrow
  // }

}