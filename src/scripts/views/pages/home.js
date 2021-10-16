import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="section-title">
    <div class="container">
      <h2>Our Outlets</h2> </div>
  </div>
  <div class="container">
    <div id="cards" class="cards"> </div>
  </div>
  `;
  },

  async afterRender() {
    const cards = await RestaurantSource.List();
    const cardsContainer = document.querySelector('#cards');
    cards.forEach((restaurant) => {
      cardsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
