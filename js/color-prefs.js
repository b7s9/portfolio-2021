// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const lsNamespace = 'b7s9portfolio2021'
const colorSchemeName = lsNamespace + 'colorScheme'
if (localStorage.getItem(colorSchemeName) === 'dark' || (!(colorSchemeName in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

document.addEventListener('DOMContentLoaded', () => {
  const darkToggles = document.getElementsByClassName('dark-toggle')
  const lightToggles = document.getElementsByClassName('light-toggle')
  const systemToggles = document.getElementsByClassName('system-toggle')

  for (toggle of darkToggles) {
    toggle.addEventListener('click', e => {
      localStorage.setItem(colorSchemeName, 'dark')
      document.documentElement.classList.add('dark')

    })
  }
  for (toggle of lightToggles) {
    toggle.addEventListener('click', e => {
      localStorage.setItem(colorSchemeName, 'light')
      document.documentElement.classList.remove('dark')
    })
  }
  for (toggle of systemToggles) {
    toggle.addEventListener('click', e => {
      localStorage.removeItem(colorSchemeName)
    })
  }
})
