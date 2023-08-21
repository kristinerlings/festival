const $btnSaturday = document.querySelector('.btn__saturday');
const $btnSunday = document.querySelector('.btn__sunday');
const $stageSaturdayZ = document.querySelector('#saturday-z');
const $stageSundayZ = document.querySelector('#sunday-z');
const $stageSaturdayMain = document.querySelector('#saturday-main');
const $stageSundayMain = document.querySelector('#sunday-main');

// saturday by default :
$stageSundayZ.style.display = 'none';
$stageSundayMain.style.display = 'none';

const updateSchedule = () => {
  if ($btnSaturday.classList.contains('active__day')) {
    $stageSaturdayZ.style.display = 'block';
    $stageSaturdayMain.style.display = 'block';
    $stageSundayZ.style.display = 'none';
    $stageSundayMain.style.display = 'none';
  } else if ($btnSunday.classList.contains('active__day')) {
    $stageSaturdayZ.style.display = 'none';
    $stageSaturdayMain.style.display = 'none';
    $stageSundayZ.style.display = 'block';
    $stageSundayMain.style.display = 'block';
  }
};

const init = () => {
  $btnSaturday.addEventListener('click', () => {
    if (!$btnSaturday.classList.contains('active__day')) {
      $btnSaturday.classList.add('active__day');
      $btnSunday.classList.remove('active__day');
      updateSchedule();
    }
  });

  $btnSunday.addEventListener('click', () => {
    if (!$btnSunday.classList.contains('active__day')) {
      $btnSunday.classList.add('active__day');
      $btnSaturday.classList.remove('active__day');
      updateSchedule();
    }
  });

  const $mediaQueryPrint = window.matchMedia('print');
  $mediaQueryPrint.addEventListener('change', (e) => {
    if (e.matches) {
      $stageSaturdayZ.style.display = 'block';
      $stageSaturdayMain.style.display = 'block';
      $stageSundayZ.style.display = 'block';
      $stageSundayMain.style.display = 'block';
    } else {
      updateSchedule();
    }
  });
};

init();
