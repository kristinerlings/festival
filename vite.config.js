import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';

const viteRestartValue = (() => {
  try {
    return ViteRestart({ reload: ['./templates/**/*'] });
  } catch {
    return ViteRestart.default({ reload: ['./templates/**/*'] });
  }
})();

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/festival/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
        countdown: './src/js/countdown.js',
        toggleButtons: './src/js/toggleButtons.js',
        nav: './src/js/nav.js',
        sortTime: './src/js/sortTime.js',
      },
    },
  },
  server: {
    // respond to all network requests
    host: '0.0.0.0',
    strictPort: true,
    port: 3000,
    origin: 'https://web3-retake.ddev.site:3000' /* 'http://localhost:3000', */,
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    viteRestartValue,
  ],
});
