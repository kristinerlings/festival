const changeImageSrc = () => {
  const $imgLogo = document.querySelector('.img__logo');
  const $logoLink = document.querySelector('.nav__logo');
  const href = $logoLink.getAttribute('href');

  // Check if the screen width is less than or equal to 400px
  if (window.matchMedia('(max-width: 500px)').matches) {
    $imgLogo.src = `${href}public/logo-mobile.svg`;
  } else {
    $imgLogo.src = `${href}public/logo.svg`;
  }
};

const init = () => {
  changeImageSrc();

  window.addEventListener('resize', changeImageSrc);
};

init();
