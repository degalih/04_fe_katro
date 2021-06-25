/* eslint-disable operator-linebreak */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="section-title">
    <div class="container">
      <h2>Favorites</h2> </div>
  </div>
  
  <div class="container">
    <div id="cards" class="cards"> </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    const restaurantsContainer = document.querySelector('#cards');

    /* Kondisi jika favorite kosong */
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      <h3>Anda belum memilih restoran favorit anda. Klik tombol hati pada restoran yang ingin anda favoritkan.</h3>
      `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
