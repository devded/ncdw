const queryString = window.location.search;
const queryParams = new URLSearchParams(queryString);

let date = queryParams.get("date");
if (!isNaN(date)) {
  date = "2023-04-30";
}
date = date + " 00:00:00";
const myDate = new Date(date);

// countdown
let timer = setInterval(function () {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = myDate - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1);
