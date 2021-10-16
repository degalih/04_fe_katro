const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  WEB_SOCKET_SERVER: 'wss://echo.websocket.org',
};

export default CONFIG;
