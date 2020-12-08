// Countdown
const releaseDate = new Date(Date.UTC(2020, 11, 10, 0));
// document.getElementById('releaseDate').innerHTML = releaseDate;

let isVisible = false;

const daysRef = document.getElementById('days');
const hoursRef = document.getElementById('hours');
const minutesRef = document.getElementById('minutes');
const secondsRef = document.getElementById('seconds');

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysRef.innerHTML = days > 0 ? days : 0;
  hoursRef.innerHTML = hours > 0 ? hours : 0;
  minutesRef.innerHTML = minutes > 0 ? minutes : 0;
  secondsRef.innerHTML = seconds > 0 ? seconds : 0;
  
  if (!isVisible) {
    document.querySelectorAll('.showOnLoad').forEach(entry => {
      entry.style.display = 'block';
    });
    isVisible = true;
  }

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('demo').innerHTML = 'LAUNCHED';
  }
}, 1000);

window.onload = countdown;

// Background Image
const urlParams = new URLSearchParams(window.location.search);
const bg = urlParams.get('bg');
const bgRef = document.querySelector('.bg');

if (/.webm|.mp4/.test(bg)) { // set video src
  bgRef.querySelector('video').src = bg;
}

if (/.jpg|.png|.gif/.test(bg)) {
  bgRef.style.backgroundImage = `url(${bg})`;
}