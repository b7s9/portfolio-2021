// const lsNamespace = 'b7s9portfolio2021' // received from main.js

document.addEventListener('DOMContentLoaded', () => {
  const isReturnVisitor = b7s9.lsNamespace + 'visited'
  if (localStorage.getItem(isReturnVisitor) == 0) {
    localStorage.setItem(b7s9.prefersGalleryFirst, 0)
    b7s9.showContentPrefs()
    localStorage.setItem(isReturnVisitor, 1)
  }

  localStorage.getItem(b7s9.prefersGalleryFirst) == 1 && b7s9.showGallery();
})
