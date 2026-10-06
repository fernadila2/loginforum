const room = document.getElementById('room');
const cord = document.getElementById('cord');
const fireflies = document.getElementById('fireflies');
const loginForm = document.getElementById('loginForm');

const FIREFLY_COUNT = 30;

// Create fireflies at random positions
function createFireflies() {
  fireflies.innerHTML = '';
  for (let i = 0; i < FIREFLY_COUNT; i++) {
    const f = document.createElement('span');
    f.className = 'firefly';
    f.style.left = Math.random() * 100 + '%';
    f.style.top = Math.random() * 100 + '%';
    f.style.setProperty('--dx', (Math.random() * 80 - 40) + 'px');
    f.style.setProperty('--dy', (Math.random() * 80 - 40) + 'px');
    f.style.setProperty('--dur', (4 + Math.random() * 6) + 's');
    f.style.animationDelay = (Math.random() * 5) + 's';
    fireflies.appendChild(f);
  }
}

// Toggle the lamp on / off
function toggleLamp() {
  const isOn = room.classList.toggle('on');
  if (isOn) {
    createFireflies();
  } else {
    fireflies.innerHTML = '';
  }
}

cord.addEventListener('click', toggleLamp);

// Demo submit (no backend yet)
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Signed in!');
});
