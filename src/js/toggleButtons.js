/* const $btnSaturday = document.querySelector('.btn__saturday');
const $btnSunday = document.querySelector('.btn__sunday');
const $scheduleMain = document.querySelector('.stage__main');
const $scheduleZ = document.querySelector('.stage__z');

let selectedDay = 'saturday'; //default dayy

const updateSchedule = () => {
  const allArtists = document.querySelectorAll('.schedule__artist');
  allArtists.forEach((artist) => {
    const artistSchedule = artist.getAttribute('data-schedule');
    artist.classList.toggle('hidden', artistSchedule !== selectedDay);
  });
};

const init = () => {
  $btnSaturday.addEventListener('click', () => {
    selectedDay = 'saturday';
    updateSchedule();
  });

  $btnSunday.addEventListener('click', () => {
    selectedDay = 'sunday';
    updateSchedule();
  });
};

init();
 */
const $btnSaturday = document.querySelector('.btn__saturday');
const $btnSunday = document.querySelector('.btn__sunday');
/* const $scheduleMain = document.querySelector('.stage__main');
const $scheduleZ = document.querySelector('.stage__z'); */
const $scheduleDay = document.querySelector('.wrapper__stages');
const $saturday = document.getElementById('saturday');
const $sunday = document.getElementById('sunday');

let selectedDay = 'saturday'; //default day

const updateSchedule = () => {
  const allArtists = document.querySelectorAll('.schedule__artist');
  allArtists.forEach((artist) => {
    /* const artistSchedule = artist.getAttribute('data-schedule'); */
    /* const isArtistVisible = artistSchedule === selectedDay;
    artist.classList.toggle('hidden', isArtistVisible); */

    /* artist.classList.toggle('hidden', artistSchedule !== selectedDay); */
    /* artist.classList.toggle('hidden', artistSchedule == selectedDay); */

    const artistSchedule = artist.getAttribute('class');
    if (artistSchedule.includes(selectedDay)) {
      artist.classList.remove('hidden');
      classList.add(selectedDay);
    }
  });
};

const init = () => {
  $btnSaturday.addEventListener('click', () => {
    selectedDay = 'saturday';
    $btnSaturday.classList.add('active__day');
    /* $scheduleDay.classList.add('saturday'); */
    $btnSunday.classList.remove('active__day');
    $btnSaturday.classList.add('active__day');
     $saturday.classList.remove('hidden');
     $sunday.classList.add('hidden');
   

    updateSchedule();
  });

  $btnSunday.addEventListener('click', () => {
    selectedDay = 'sunday';
    $btnSunday.classList.add('active__day');
    /*  $scheduleDay.classList.add('sunday'); */
    $btnSaturday.classList.remove('active__day');
    /*  $scheduleDay.classList.remove('saturday'); */
    $saturday.classList.add('hidden');
    $sunday.classList.remove('hidden');
    updateSchedule();
  });

  // Initial setup
  updateSchedule();
};

init();
