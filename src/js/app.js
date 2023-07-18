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
