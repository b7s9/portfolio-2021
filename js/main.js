// ------------------------------------------------
// PROJECT GALLERY/TEXT CONTENT HANDLERS
// ------------------------------------------------
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
    if (this.textContentActive) {
      this.textIndicator.classList.add('indicator-active')
      this.galleryIndicator.classList.remove('indicator-active')
    } else {
      this.textIndicator.classList.remove('indicator-active')
      this.galleryIndicator.classList.add('indicator-active')
    }
  }
}

let textIndicator = b7s9.textIndicator
let galleryIndicator = b7s9.galleryIndicator


if (textIndicator) {
  // init recolor
  b7s9.updateActiveColor()
  document.onkeydown = checkKey;


  textIndicator.addEventListener('click', e => {
    b7s9.showTextContent()
  })
}

if (galleryIndicator) {
  galleryIndicator.addEventListener('click', e => {
    b7s9.showGallery()
  })
}

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '37') {
    b7s9.showTextContent()
  }
  else if (e.keyCode == '39') {
    b7s9.showGallery()
  }

}

// ------------------------------------------------
// FILTERS
// ------------------------------------------------

let filterState = {
  ux: false, ui: false, dev: false, audio: false
}

// ---------------------
// VIEW
// ---------------------

const projectPreviews = document.getElementsByClassName('project-preview')
updateProjectsShown(projectPreviews.length)

function updateProjectDisplay() {
  let projectsShown = 0;
  for (project of projectPreviews) {

    if (isFilterStateEmpty()) { // if no filters are active, show all projects
      showProject(project)
      projectsShown++;
      continue;
    }

    const filterString = project.getAttribute('data-filters')
    const projectFilters = filterString.split(',')
    // console.log(project)
    let anyMatch = 0;

    for (filter of projectFilters) {
      // console.log(filter)

      if (filterState[filter]) {
        anyMatch = 1;
      }
    }
    if (anyMatch) {
      showProject(project)
      projectsShown++;
    } else {
      hideProject(project)
    }
  }

  updateProjectsShown(projectsShown)
}

function updateProjectsShown(index) {
  if (index == 1) {
    document.getElementById('projects-showing').innerText = index + ' project shown'
  } else {
    document.getElementById('projects-showing').innerText = index + ' projects shown'
  }
}

function hideProject(project) {
  project.classList.add('hidden')
}
function showProject(project) {
  project.classList.remove('hidden')
}

function activateButton(button) {
  button.classList.add('filter-btn-active')
}
function deactivateButton(button) {
  button.classList.remove('filter-btn-active')
}

// ---------------------
// MODEL
// ---------------------

function updateFilterState(button) {
  filterDelta = button.getAttribute('data-filter-name')

  filterState[filterDelta] = !filterState[filterDelta];

  if (filterState[filterDelta]) {
    activateButton(button)
  } else {
    deactivateButton(button)
  }

  updateProjectDisplay()
}

function isFilterStateEmpty() {
  let isEmptyState = 1;
  for (let [key, value] of Object.entries(filterState)) {
    if (value) isEmptyState = 0;
  }
  return isEmptyState;
}

// ---------------------
// HANDLER
// ---------------------

const filterButtons = document.querySelectorAll('.filters button');

for (button of filterButtons) {
  button.addEventListener('click', e => {
    updateFilterState(e.target)
  })
}
