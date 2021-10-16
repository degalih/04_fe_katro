/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);
    NotificationHelper.sendNotification({
      name: `Ayo datang ke ${restaurant.name}!`,
      options: {
        body: restaurant.description,
        image: `${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}`,
      },
    });
  },
};

const sendDataToWebsocket = (review) => {
  const data = JSON.stringify(review);

  socket.send(data);
};

export { WebSocketInitiator, sendDataToWebsocket };
