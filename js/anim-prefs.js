const animTargets = document.getElementsByClassName('anim-target')
const animToggles = document.getElementsByClassName('anim-toggle')
let motionAllowed = true

for (toggle of animToggles) {
  toggle.addEventListener('click', (e) => {
    if (motionAllowed) {
      motionAllowed = false
      pauseAnimations()
      window.fathom.trackGoal('UJYGZ1Q5', 0);
    } else {
      motionAllowed = true
      startAnimations()
    }
  })
}

function pauseAnimations() {
  for (animTarget of animTargets) {
    animTarget.classList.add('anim-none')
  }
}

function startAnimations() {
  for (animTarget of animTargets) {
    animTarget.classList.remove('anim-none')
  }
}
