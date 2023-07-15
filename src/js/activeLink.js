const activeLink = window.location.pathname;

const $nav = document.querySelectorAll('nav a');

const pageDetector = () => {
  $nav.forEach((link) => {
    if (link.getAttribute('href') === activeLink) {
      link.classList.add('active');
    }
  });
};

const init = () => {
  pageDetector();
};

init();
