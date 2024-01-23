const $ = document;
let players = $.querySelectorAll(".fa-play");
const audios = $.querySelectorAll("audio");

players.forEach(function (player) {
  // console.log(player)
  player.addEventListener("click", function (event) {
    let musicName = event.target.dataset.name;
    // console.log(musicName)
    audios.forEach(function (audio) {
      if (audio.dataset.name === musicName) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
