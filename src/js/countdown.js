const $countdownDays = document.querySelector('.c__days');
const $countdownHours = document.querySelector('.c__hrs');
const $countdownMinutes = document.querySelector('.c__min');
const $countdownSeconds = document.querySelector('.c__sec');
const finalDate = new Date('2023-09-16T12:00:00');

const updateCountdown = () => {
  const currentTime = new Date();
  const remainingSeconds = Math.floor((finalDate - currentTime) / 1000);
  const twoDaysInSeconds = 2 * 24 * 60 * 60;

  if (remainingSeconds > 0) {
    const days = Math.floor(remainingSeconds / 86400);
    const hours = Math.floor((remainingSeconds % 86400) / 3600);
    const minutes = Math.floor(((remainingSeconds % 86400) % 3600) / 60);
    const seconds = remainingSeconds % 60;

    $countdownDays.textContent = `${days}`;
    $countdownHours.textContent = `${hours}`;
    $countdownMinutes.textContent = `${minutes}`;
    $countdownSeconds.textContent = `${seconds}`;
  } else if (currentTime >= finalDate) {
    $countdownDays.textContent = `0`;
    $countdownHours.textContent = `0`;
    $countdownMinutes.textContent = `0`;
    $countdownSeconds.textContent = `0`;
  }
};

const init = () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
};

init();
