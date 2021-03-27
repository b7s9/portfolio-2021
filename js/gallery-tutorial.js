// const lsNamespace = 'b7s9portfolio2021' // received from main.js
const isReturnVisitor = lsNamespace + 'visited';

if (!localStorage.getItem(isReturnVisitor)) {
  const modal = document.getElementById('gallery-tutorial');
  const closeBtn = document.getElementById('tutorial-close-btn')

  modal.classList.remove('hidden')

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
    localStorage.setItem(isReturnVisitor, 1)
  })
}
