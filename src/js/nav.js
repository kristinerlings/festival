const changeImageSrc = () => {
  const $imgLogo = document.querySelector('.img__logo');

  // Check if the screen width is less than or equal to 400px
  if (window.matchMedia('(max-width: 400px)').matches) {
    $imgLogo.src = `/public/logo-mobile.svg`;
  } else {
    $imgLogo.src = `/public/logo.svg`;
  }
};

const init = () => {
  changeImageSrc();

  window.addEventListener('resize', changeImageSrc);
};

init();
