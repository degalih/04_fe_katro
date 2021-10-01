/* eslint-disable no-tabs */
import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
<div class="card">
	<div class="card__img"> <img class="lazyload" data-src="${
    CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId
  }" alt="${restaurant.name}" /> </div>
	<div class="card__content">
		<h3>
         <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
      </h3>
		<p>${restaurant.description.substr(0, 200)}...</p>
	</div>
	<div class="card__info">
		<div><i class="fas fa-map-marker-alt"></i>${restaurant.city}</div>
		<div><i class="fas fa-star"></i>${restaurant.rating}</div>
	</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<!-- Detail Restoran -->
<div class="detail">
	<div class="detail__wrapper">
		<div class="detail__img"> <img src="${
      CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
    }" alt="${restaurant.name}" /> </div>
		<div class="detail__info">
			<ul>
				<li><i class="fas fa-utensils"></i><span>${restaurant.name}</span></li>
				<li><i class="fas fa-compass"></i> <span>${restaurant.address} - ${
  restaurant.city
}
            </li>
            <li><i class="fas fa-star"></i><span>${
              restaurant.rating
            }</span></li>
			</ul>
			<div class="detail__category">
				<li>${restaurant.categories
          .map((category) => ` <span class="category">${category.name}</span> `)
          .join('')} </li>
			</div>
			<div class="detail__description">
				<p>${restaurant.description}</p>
			</div>
		</div>
	</div>
</div>
<!-- Akhir Detail Restoran -->

<!-- Menu Restoran -->
<div class="menu container">
	<div class="menu__food">
		<div class="section-title">
			<div class="container">
				<h2>Food</h2> </div>
		</div>
		<ul> ${restaurant.menus.foods
      .map(
        (food, i) => `
			<li><span>${i + 1}</span>${food.name}</li> `
      )
      .join('')} </ul>
	</div>
	<div class="menu__drink">
		<div class="section-title">
			<div class="container">
				<h2>Drink</h2> </div>
		</div>
		<ul> ${restaurant.menus.drinks
      .map(
        (drink, i) => `
			<li><span>${i + 1}</span>${drink.name}</li> `
      )
      .join('')} </ul>
	</div>
</div>
<!-- Akhir Menu Restoran -->

<!-- Review Restoran -->
<div class="review">
	<div class="section-title">
		<div class="container">
			<h2>Review</h2> </div>
	</div>
	<div class="testimonials">
		<div class="row"> ${restaurant.customerReviews
      .map(
        (review) => `
			<div class="col">
				<div class="testimonial"> <img src="https://s1.im.ge/2021/06/15/QBLrG.png" alt="profile" border="0">
					<div class="name">${review.name}</div>
					<p> ${review.review} </p>
				</div>
			</div> `
      )
      .join('')} </div>
	</div>
</div>
<!-- Akhir Review Restoran -->
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like"> <i class="far fa-heart"></i> </button>
`;

const createLikedRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like"> <i class="fas fa-heart"></i> </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
};
