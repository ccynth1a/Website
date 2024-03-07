document.addEventListener('DOMContentLoaded', function() {
  const songSelect = document.getElementById('songSelect');
  const audioPlayer = document.getElementById('audioPlayer');

  songSelect.addEventListener('change', function() {
    const selectedSong = songSelect.value;

    // Create audio element
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = selectedSong;

    // Replace existing audio player with the new one
    audioPlayer.innerHTML = '';
    audioPlayer.appendChild(audio);
  });
});

