import "./styles.css";

const recordContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");
const jsSec = document.getElementById("jsSec");

let streamObject;
let audioRecoder;

let stTime = 0;
let sec;
let timerStart;

function handleAudioData(event) {
  console.log(event);
  const { data: audioFile } = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(audioFile);
  link.download = "Audio.webm";
  document.body.appendChild(link);
  link.click();
}

function stopRecording() {
  audioRecoder.stop();
  timerReset();
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.addEventListener("click", getAudio);
  recordBtn.innerHTML = "Start Recording";
}

function startRecording() {
  const options = { mimeType: "audio/webm;codecs=opus" };
  audioRecoder = new MediaRecorder(streamObject, options);
  audioRecoder.start();
  audioRecoder.addEventListener("dataavailable", handleAudioData);
  recordBtn.addEventListener("click", stopRecording);
}

function getAudio() {
  timer();
  navigator.mediaDevices
    .getUserMedia({
      audio: true,
    })
    .then(function (stream) {
      videoPreview.srcObject = stream;
      videoPreview.muted = true;
      videoPreview.play();
      recordBtn.innerHTML = "Stop Recording";
      streamObject = stream;
      startRecording();
      recordBtn.removeEventListener("click", getAudio);
    });
}

function timerReset() {
  clearInterval(timerStart);
  stTime = 0;
  sec = 0;
}

function timer() {
  if (!stTime) {
    stTime = new Date().getTime();
  }
  timerStart = setInterval(() => {
    let nowTime = new Date(Date.now() - stTime);
    sec = nowTime.getSeconds();

    jsSec.innerHTML = `Recording for ${sec}`;
  }, 1000);
}

function init() {
  recordBtn.addEventListener("click", getAudio);
}

if (recordContainer) {
  init();
}
