const track1 = document.getElementById("track1");
const track2 = document.getElementById("track2");

document.getElementById("loadTracks").addEventListener("click", () => {
  const url1 = document.getElementById("url1").value;
  const url2 = document.getElementById("url2").value;

  loadTrack(track1, url1);
  loadTrack(track2, url2);
});

function loadTrack(track, url) {
  const videoId = getVideoId(url);

  if (!videoId) {
    console.error(`Ongeldige YouTube URL: ${url}`);
    return;
  }

  const audioUrl = `https://www.youtube.com/watch?v=${videoId}`;
  track.src = audioUrl;
}

function getVideoId(url) {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

document.getElementById("play1").addEventListener("click", () => {
  track1.play();
});

document.getElementById("pause1").addEventListener("click", () => {
  track1.pause();
});

document.getElementById("stop1").addEventListener("click", () => {
  track1.pause();
  track1.currentTime = 0;
});

document.getElementById("play2").addEventListener("click", () => {
  track2.play();
});

document.getElementById("pause2").addEventListener("click", () => {
  track2.pause();
});

document.getElementById("stop2").addEventListener("click", () => {
  track2.pause();
  track2.currentTime = 0;
});

document.getElementById("mix").addEventListener("click", () => {
  const currentTime1 = track1.currentTime;
  const currentTime2 = track2.currentTime;
  const mixTime = Math.min(currentTime1, currentTime2);
  track1.currentTime = mixTime;
  track2.currentTime = mixTime;
  track1.volume = 0.5;
  track2.volume = 0.5;
});
