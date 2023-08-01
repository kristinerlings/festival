//https://www.golinuxcloud.com/javascript-sort-by-date/

const sortArtistsByPerformanceTime = () => {
  const dates = [];

  const $timeElements = document.querySelectorAll('.schedule__artistlink time');

  // Extract the time values from the time elements and convert them to Date objects
  $timeElements.forEach(($timeElement) => {
    const timeValue = $timeElement.getAttribute('datetime');
    if (timeValue) {
      const date = new Date(timeValue);
      dates.push(date);
      console.log('this is the date pushed : ', date);
    }
  });

  /* let date1 = dates[0];
  let date2 = dates[dates.length - 1];
 */
  // Sort the dates array
  dates.sort((date1, date2) => date1 - date2);
  console.log('sorting dates', dates);
  return dates;
};



const init = () => {
  sortArtistsByPerformanceTime();
 

};

init();
//window.addEventListener('DOMContentLoaded', init);




