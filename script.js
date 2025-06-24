//your JS code here. If required.
const soundNames = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
let currentAudio = null;

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    stopAudio();

    const name = btn.textContent.trim();
    currentAudio = document.createElement('audio');
    currentAudio.src = `sounds/${name}.mp3`;
    currentAudio.setAttribute('controls', '');
    currentAudio.setAttribute('autoplay', '');
    document.body.appendChild(currentAudio);
  });
});

document.querySelector('.stop').addEventListener('click', stopAudio);

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.remove();
    currentAudio = null;
  }
}
