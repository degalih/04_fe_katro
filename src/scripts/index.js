import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

/* Stylesheets */
import '../styles/css/skip-link.css';
import '../styles/css/root.css';
import '../styles/css/header.css';
import '../styles/css/app-bar.css';
import '../styles/css/jumbotron.css';
import '../styles/css/heading-section.css';
import '../styles/css/restoran-list.css';
import '../styles/css/restoran-detail.css';
import '../styles/css/restoran-menu.css';
import '../styles/css/restoran-review.css';
import '../styles/css/like-button.css';
import '../styles/css/post-review.css';
import '../styles/css/footer.css';
import '../styles/css/responsive.css';
import '../styles/css/loading-indicator.css';

import App from './views/app';
import swRegister from './utils/sw-register';

import { WebSocketInitiator } from './utils/websocket-initiator';
import CONFIG from './globals/config';

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
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
