import 'regenerator-runtime'; /* for async await transpile */
import '../styles/css/main.css';
import '../styles/css/responsive.css';
import '../styles/css/root.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
