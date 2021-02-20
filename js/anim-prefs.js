const animTargets = document.getElementsByClassName('anim-target')
const animToggles = document.getElementsByClassName('anim-toggle');
let motionAllowed = true;

for (toggle of animToggles) {
  toggle.addEventListener('click', e => {
    if (motionAllowed) {
      motionAllowed = false;
      pauseAnimations()
    } else {
      motionAllowed = true;
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
