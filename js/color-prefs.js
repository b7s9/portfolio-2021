// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const lsNamespace = 'b7s9portfolio2021'
const colorSchemeName = lsNamespace + 'colorScheme'
if (localStorage.getItem(colorSchemeName) === 'dark' || (!(colorSchemeName in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

document.addEventListener('DOMContentLoaded', () => {
  const darkToggle = document.getElementById('dark-toggle')
  const lightToggle = document.getElementById('light-toggle')
  const systemToggle = document.getElementById('system-toggle')

  darkToggle.addEventListener('click', e => {
    localStorage.setItem(colorSchemeName, 'dark')
    document.documentElement.classList.add('dark')
  })
  lightToggle.addEventListener('click', e => {
    localStorage.setItem(colorSchemeName, 'light')
    document.documentElement.classList.remove('dark')
  })
  systemToggle.addEventListener('click', e => {
    localStorage.removeItem(colorSchemeName)
  })
})
