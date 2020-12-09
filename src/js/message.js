const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
const title = document.getElementById('title');

if (message) {
  if (message.length > 35) {
    console.error('Entered message contains too many characters')
  } else {
    title.innerHTML = message;
  }
}
