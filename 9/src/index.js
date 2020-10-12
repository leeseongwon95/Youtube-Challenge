import "./styles.css";

const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector(".videoPlayer video");
const playBtn = document.getElementById("jsPlayBtn");
const volumeBtn = document.getElementById("jsVolumeBtn");
const volumeRange = document.getElementById("jsVolume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const progressBar = document.getElementById("progress-bar");
const control = document.querySelector(".videoPlayer__controls");

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    volumeRange.value = videoPlayer.volume;
  } else {
    videoPlayer.muted = true;
    volumeRange.value = 0;
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

const formatDate = (seconds) => {
  const secondsNumber = parseInt(seconds, 10);
  let hours = Math.floor(secondsNumber / 3600);
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`;
  }
  return `${hours}:${minutes}:${totalSeconds}`;
};

function getCurrentTime() {
  currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration);
  totalTime.innerHTML = totalTimeString;
  setInterval(getCurrentTime, 1000);
}

function handleDrag(event) {
  const {
    target: { value },
  } = event;
  videoPlayer.volume = value;
  if (value >= 0.6) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
  } else if (value >= 0.2) {
    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
  } else {
    volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
  }
}

function handleProgressClick(e) {
  var percent = e.offsetX / this.offsetWidth;
  videoPlayer.currentTime = percent * videoPlayer.duration;
  e.target.value = Math.floor(percent / 100);
  e.target.innerHTML = progressBar.value + "% played";
}

function updateProgressBar() {
  var percentage = Math.floor(
    (100 / videoPlayer.duration) * videoPlayer.currentTime
  );
  progressBar.value = percentage;
  progressBar.innerHTML = percentage + "% played";
}

function handleSpace(e) {
  const keyCode = e.keyCode;
  if (keyCode === 32) {
    handlePlayClick();
  }
}

function timeHandle(timer) {
  control.classList.remove("hover");
  clearInterval(timer);
}

function handleHover() {
  control.classList.add("hover");
  const timer = setTimeout(() => {
    timeHandle(timer);
  }, 1000);
}

function init() {
  videoPlayer.volume = 0.5;
  videoPlayer.loop = true;
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  videoPlayer.addEventListener("loadedmetadata", setTotalTime);
  volumeRange.addEventListener("input", handleDrag);
  progressBar.addEventListener("click", handleProgressClick);
  videoPlayer.addEventListener("timeupdate", updateProgressBar, false);
  document.addEventListener("keydown", handleSpace);
  videoContainer.addEventListener("mousemove", handleHover);
}

if (videoContainer) {
  init();
}
