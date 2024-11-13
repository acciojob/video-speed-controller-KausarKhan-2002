const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




const video = document.getElementById('video');
	const playerButton = document.getElementById('player_button');
	const progressBar = document.getElementById('progress_bar');
	const progressFilled = document.getElementById('progress_filled');
	const volumeControl = document.getElementById('volume');
	const playbackSpeedControl = document.getElementById('playbackSpeed');
	const rewindButton = document.getElementById('rewindButton');
	const skipButton = document.getElementById('skipButton');

// Play/Pause functionality
playerButton.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚❚'; // Change to pause symbol
  } else {
    video.pause();
    playerButton.textContent = '►'; // Change to play symbol
  }
});

// Update the progress bar as the video plays
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.value = progress;
//   progressFilled.style.width = `${progress}%`;
//   console.log(video.currentTime,video.duration);
  
});

// Make the progress bar interactive
progressBar.addEventListener('input', () => {
  const value = progressBar.value;
  video.currentTime = (value / 100) * video.duration;
});

// Adjust volume
volumeControl.addEventListener('input', () => {
  video.volume = volumeControl.value / 100;
//   console.log(volumeControl.value / 100);
  
});

// Adjust playback speed
playbackSpeedControl.addEventListener('input', () => {
  video.playbackRate = playbackSpeedControl.value;
});

// Rewind 10 seconds
rewindButton.addEventListener('click', () => {
  video.currentTime -= 10;
});

// Skip forward 25 seconds
skipButton.addEventListener('click', () => {
  video.currentTime += 25;
});
