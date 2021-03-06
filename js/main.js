// checking for feature

function hasGetUserMedia() {
  return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
  console.log('has feature.')
  // Good to go!
} else {
  alert('getUserMedia() is not supported in your browser');
}

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;

  // if (gamma > 0 && gamma < 45) {
  if (1==1){
    document.getElementById('image').classList.toggle('invisible', false);
  } else {
    document.getElementById('image').classList.toggle('invisible', true);
  }
}
