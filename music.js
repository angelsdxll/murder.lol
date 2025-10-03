// music.js - cleaned and simplified
const playlist = [
  { title: 'A New Kind Of Love - Demo [ACE]', src: 'assets/ace.mp3' },
  { title: 'right here - Lil peep/Horse Head [HIX]', src: 'assets/hix.mp3' },
  { title: 'maxon - Tank Davis [ENACT]', src: 'assets/enact.mp3' },
  { title: '100 - Dean Blunt [RIFLE]', src: 'assets/rifle.mp3' },
  { title: '???????? [RED]', src: 'assets/red.mp3' },
  { title: '???????? [SANITY]', src: 'assets/sanity.mp3' },
  { title: 'Hosted by stepd.ad', src: 'assets/dropKICK!!!.mp3' }
];

let currentSongIndex = 6; // default hosted track index
let defaultSongCurrentTime = 0;
const audio = new Audio();
audio.loop = false;

function changeSong(index, currentTime = 0) {
  if (currentSongIndex === 6) {
    defaultSongCurrentTime = audio.currentTime || 0;
  }
  currentSongIndex = index;
  audio.src = playlist[currentSongIndex].src;
  audio.currentTime = currentTime;
  audio.play().catch(()=>{}); // ignore play promise rejection
  const songTitleElement = document.getElementById('songTitle');
  if (songTitleElement) songTitleElement.innerText = playlist[currentSongIndex].title || 'Unknown Title';
}

function playDefaultSong() {
  changeSong(6, defaultSongCurrentTime);
}

function removeOverlay() {
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.style.animation = 'fadeOut 0.9s forwards';
    setTimeout(()=>{
      overlay.style.display = 'none';
    }, 900);
    playDefaultSong();
  }
}

function playRandomSong() {
  const idx = Math.floor(Math.random()*playlist.length);
  changeSong(idx);
}

document.addEventListener('DOMContentLoaded', ()=>{
  // Preload audio
  playlist.forEach(s=>{ const a = new Audio(); a.src = s.src; });
  const songTitleElement = document.getElementById('songTitle');
  if (songTitleElement) songTitleElement.innerText = playlist[currentSongIndex]?.title || 'None';
});
