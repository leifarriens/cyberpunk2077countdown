const urlParams = new URLSearchParams(window.location.search);
const CYBERPUNK_RELEASE_DATE = new Date(Date.UTC(2020, 11, 10, 0));

const daysRef = document.getElementById('days');
const hoursRef = document.getElementById('hours');
const minutesRef = document.getElementById('minutes');
const secondsRef = document.getElementById('seconds');

let isVisible = false;

const initCountdown = (endDate) => {
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = endDate - now;

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
      const countDownDom = document.querySelector('.countdown');
      countDownDom.innerHTML = 'OUT NOW!';
      countDownDom.classList.add('glitch')
    }
  }, 1000);
}

window.onload = () => {
  const timeParam = urlParams.get('time');

  if (!timeParam) {
    initCountdown(CYBERPUNK_RELEASE_DATE);

  } else {
    const customDate = new Date(timeParam);

    if (isNaN(customDate)) {
      console.error(`${timeParam} is not a valid Date!`);
      initCountdown(CYBERPUNK_RELEASE_DATE);

    } else {
      // use custom date
      initCountdown(customDate);
    }
  }
}
