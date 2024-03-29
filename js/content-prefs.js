// const lsNamespace = 'b7s9portfolio2021' // received from main.js

document.addEventListener('DOMContentLoaded', () => {
  // purge old tokens
  localStorage.removeItem(b7s9.lsNamespace + 'visited')
  localStorage.removeItem(b7s9.lsNamespace + 'visited-v1')
  // use new token
  const isReturnVisitor = b7s9.lsNamespace + 'visited-v2'
  if (!localStorage.getItem(isReturnVisitor)) {
    localStorage.setItem(b7s9.prefersGalleryFirst, 0)
    b7s9.showContentPrefs()
    localStorage.setItem(isReturnVisitor, 1)
  }

  localStorage.getItem(b7s9.prefersGalleryFirst) == 1 && b7s9.showGallery();
})
