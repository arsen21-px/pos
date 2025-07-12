const button = document.getElementById("btn-1-u");
const timer = document.getElementById("timer-u");
let intervalId;

button.addEventListener("click", () => {
  let seconds = 60;
  timer.textContent = seconds;

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    seconds--;
    timer.textContent = seconds;

    if (seconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
});
