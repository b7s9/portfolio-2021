// On page load or when changing themes, best to add inline in `head` to avoid Flash Of Unstyled Content (FOUC)
const colorSchemeName = 'b7s9portfolio2021' + 'colorScheme'

function isDarkMode() {
  return (
    localStorage.getItem(colorSchemeName) === 'dark' ||
    (!(colorSchemeName in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}

function getSystemTheme() {
  let result
  if (localStorage.getItem(colorSchemeName) === 'dark') {
    result = 'dark'
  } else if (!(colorSchemeName in localStorage)) {
    result = 'system'
    // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   result += '-dark'
    // } else {
    //   result += '-light'
    // }
  } else {
    result = 'light'
  }
  return result
}
initTheme = getSystemTheme()

function applySystemTheme() {
  if (isDarkMode()) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
applySystemTheme()

document.addEventListener('DOMContentLoaded', () => {
  const darkToggles = document.getElementsByClassName('dark-toggle')
  const lightToggles = document.getElementsByClassName('light-toggle')
  const systemToggles = document.getElementsByClassName('system-toggle')

  for (toggle of darkToggles) {
    toggle.addEventListener('click', (e) => {
      localStorage.setItem(colorSchemeName, 'dark')
      document.documentElement.classList.add('dark')
      updateIndicatorActive('dark')
    })
    updateIndicatorActive(initTheme)
  }
  for (toggle of lightToggles) {
    toggle.addEventListener('click', (e) => {
      localStorage.setItem(colorSchemeName, 'light')
      document.documentElement.classList.remove('dark')
      updateIndicatorActive('light')
    })
    updateIndicatorActive(initTheme)
  }
  for (toggle of systemToggles) {
    toggle.addEventListener('click', (e) => {
      localStorage.removeItem(colorSchemeName)
      applySystemTheme()
      updateIndicatorActive('system')
    })
    updateIndicatorActive(initTheme)
  }

  function updateIndicatorActive(name) {
    for (toggle of darkToggles) {
      name === 'dark' ? toggle.classList.add('indicator-active') : toggle.classList.remove('indicator-active')
    }
    for (toggle of lightToggles) {
      name === 'light' ? toggle.classList.add('indicator-active') : toggle.classList.remove('indicator-active')
    }
    for (toggle of systemToggles) {
      name === 'system' ? toggle.classList.add('indicator-active') : toggle.classList.remove('indicator-active')
    }
  }
})
