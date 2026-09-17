const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // 12-hour format
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  // Date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  date.textContent = now.toLocaleDateString("en-IN", options);
}

updateClock();

setInterval(updateClock, 1000);