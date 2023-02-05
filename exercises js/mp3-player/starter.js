window.addEventListener("load", function () {
  const song = document.querySelector("#song");
  const playBtn = document.querySelector(".player-play");
  const prevBtn = document.querySelector(".player-prev");
  const nextBtn = document.querySelector(".player-next");
  const playerDuration = document.querySelector(".player-duration");
  const remaining = document.querySelector(".player-remaining");
  const progressBar = document.querySelector("#progress-bar");
  const playerImage = document.querySelector(".player-image");
  let playing = true;
  const listMusic = ["holo.mp3", "summer.mp3", "home.mp3", "spark.mp3"];
  const listMusicLength = listMusic.length;
  let indexMusic = 0;
  playBtn.addEventListener("click", handlMusicPlay);
  progressBar.addEventListener("change", handlDragProgressBar);
  nextBtn.addEventListener("click", function () {
    handlChangeMusic(1);
  });
  prevBtn.addEventListener("click", function () {
    handlChangeMusic(-1);
  });
  song.addEventListener("ended", function () {
    handlChangeMusic(1);
  });
  function handlChangeMusic(dir) {
    if (dir === 1) {
      // -> random music <-
      const randomMusic = Math.floor(Math.random() * listMusic.length);
      song.setAttribute("src", `./files/${listMusic[randomMusic]}`);
      // -> sequential music <-
      // indexMusic++;
      // if (indexMusic > listMusicLength - 1) {
      //   indexMusic = 0;
      // }
      // song.setAttribute("src", `./files/${listMusic[indexMusic]}`);
      playing = true;
      handlMusicPlay();
    } else if (dir === -1) {
      indexMusic--;
      if (indexMusic < 0) {
        indexMusic = listMusicLength - 1;
      }
      song.setAttribute("src", `./files/${listMusic[indexMusic]}`);
      playing = true;
      handlMusicPlay();
    }
  }
  function handlMusicPlay() {
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      playBtn.classList.add("fa-pause");
      playing = false;
    } else {
      song.pause();
      playerImage.classList.remove("is-playing");
      playBtn.classList.remove("fa-pause");
      playing = true;
    }
  }
  function formatTimer(number) {
    let minutes = Math.floor(number / 60);
    let seconds = Math.floor(number % 60);
    seconds = `0${seconds}`.slice(-2);
    return `${minutes}:${seconds}`;
  }
  function displayTimer() {
    const { duration, currentTime } = song;
    let countdownTimer = duration - currentTime;
    progressBar.max = duration;
    progressBar.value = currentTime;
    if (!duration) playerDuration.textContent = `0:00`;
    if (!currentTime) remaining.textContent = `0:00`;
    playerDuration.textContent = formatTimer(duration);
    remaining.textContent = formatTimer(countdownTimer);
    // remaining.textContent = formatTimer(currentTime);
  }
  setInterval(function () {
    displayTimer();
  }, 500);
  function handlDragProgressBar() {
    song.currentTime = progressBar.value;
  }
});
