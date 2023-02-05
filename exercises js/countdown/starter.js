window.addEventListener("load", function () {
  const daysText = document.querySelector(".days");
  const hoursText = document.querySelector(".hours");
  const minutesText = document.querySelector(".minutes");
  const secondsText = document.querySelector(".seconds");
  //Mon May 02 2022 22:04:09 GMT+0700 (Indochina Time)
  function countdown(date) {
    const endDate = new Date(date).getTime();
    const currentDate = new Date().getTime();
    if (isNaN(endDate) || endDate - currentDate <= 0) return;
    setInterval(calculate, 1000);
    function calculate() {
      let day, hour, minute, second;
      const now = new Date();
      const startDate = now.getTime();
      let timeRemaining = Math.floor((endDate - startDate) / 1000);
      if (timeRemaining > 0) {
        day = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hour = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minute = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        second = parseInt(timeRemaining);
        daysText.textContent = `0${day}`.slice(-2);
        hoursText.textContent = `0${hour}`.slice(-2);
        minutesText.textContent = `0${minute}`.slice(-2);
        secondsText.textContent = `0${second}`.slice(-2);
      } else {
        return;
      }
    }
  }
  countdown("Mon May 03 2022 22:04:09 GMT+0700 (Indochina Time)");
});
