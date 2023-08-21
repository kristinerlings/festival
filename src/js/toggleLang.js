//toggle lang buttons
const $btnEn = document.querySelector('.lang-eng');
const $btnIs = document.querySelector('.lang-is');
const pink = '#f967e1';
const white = '#e2e0e0';


const init = () => {
  $btnEn.addEventListener('click', () => {
    $btnEn.style.color = pink;
    $btnIs.style.color = white;
  });

  $btnIs.addEventListener('click', () => {
    $btnEn.style.color = white;
    $btnIs.style.color = pink;
  });
};

init();