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
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
