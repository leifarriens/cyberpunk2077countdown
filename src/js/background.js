const urlParams = new URLSearchParams(window.location.search);
const bg = urlParams.get('bg');
const bgRef = document.querySelector('.bg');

if (/.webm|.mp4/.test(bg)) { // set video src
  const video = bgRef.querySelector('video');
  video.src = bg;
  video.style.display = 'block';
}

if (/.jpg|.png|.gif/.test(bg)) {
  bgRef.style.backgroundImage = `url(${bg})`;
}

if (bg === 'none') {
  bgRef.style.backgroundImage = `url()`;
}