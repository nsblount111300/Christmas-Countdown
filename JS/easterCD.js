const daysLeft = document.getElementById("days-left");
const hoursLeft = document.getElementById("hours-left");
const minutesLeft = document.getElementById("minutes-left");
const secondsLeft = document.getElementById("seconds-left");
const title = document.getElementById("title");

const easter = new Date("04/09/2024");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //milliseconds
let timerId;

function easterCountdown() {
  const today = new Date();
  const timeSpan = easter - today;

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  daysLeft.innerHTML = days + " Days";
  hoursLeft.innerHTML = hours + " Hours";
  minutesLeft.innerHTML = minutes + " Minutes";
  secondsLeft.innerHTML = seconds + " Seconds";

  if (timeSpan <= 0) {
    title.innerHTML = "Happy Easter!";
    daysLeft.innerHTML = "Make sure to find all the eggs!";
    hoursLeft.innerHTML = "";
    minutesLeft.innerHTML = "";
    secondsLeft.innerHTML = "";
    clearInterval(timerId);
  }
}

timerId = setInterval(easterCountdown, second);
