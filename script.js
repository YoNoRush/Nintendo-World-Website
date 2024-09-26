// DISCLAIMER: I GOT THESE CODES ONLINE ↓↓↓↓, I DID NOT MAKE THEM, WAS JUST USED FOR THE EASTER EGG :)--> //


var gifModal = document.getElementById('gifModal');
var showGifBtn = document.getElementById('showGifBtn');
var backgroundMusic = document.getElementById('backgroundMusic');

showGifBtn.addEventListener('click', openModal);

function openModal() {
  gifModal.style.display = 'block';
  backgroundMusic.volume = 0.10;
  backgroundMusic.play();
  setTimeout(function() {
    closeModal();
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
  }, 11200);
}

function closeModal() {
  gifModal.style.display = 'none';
}

// DISCLAIMER: I GOT THESE CODES ONLINE ↑↑↑↑, I DID NOT MAKE THEM, WAS JUST USED FOR THE EASTER EGG :)--> //