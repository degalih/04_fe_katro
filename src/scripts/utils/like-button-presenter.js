/* eslint-disable no-underscore-dangle */
import {
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, detail }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favoriteRestaurants = favoriteRestaurants;
    this._restaurant = detail;

    await this._renderButton();
  },
  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
