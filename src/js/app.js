import '../css/style.css';
import '../css/schedule.css';
import '../css/practical.css';

// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log('HMR');
  });
}
console.log('app js works');

// When the user scrolls the page, execute myFunction
/* window.onscroll = function () {
  myFunction();
};
 */
// Get the navbar
/* let $navbar = document.getElementById('navbar'); */

// Get the offset position of the navbar
/* let sticky = $navbar.offsetTop;
 */
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
/* function myFunction() {
  if (window.pageYOffset >= sticky) {
    $navbar.classList.add('sticky');
  } else {
    $navbar.classList.remove('sticky');
  }
}
 */
