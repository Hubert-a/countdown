const daysEl = document.getElementById("day");
const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("second");
const newYears = "11 Nov 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const difference = newYearsDate.getTime() - currentDate.getTime();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const days = Math.floor(difference / (1000 * 3600 * 24));
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
