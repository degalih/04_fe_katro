/* eslint-disable no-console */
/* eslint-disable no-shadow */
import RestaurantSource from '../data/restaurant-source';

const review = async (url, name, review) => {
  const inputData = {
    id: url.id,
    name,
    review,
  };

  const reviewContainer = document.querySelector('.row');
  const newReview = `
  <div class="col">
        <div class="testimonial">
            <img src="https://s1.im.ge/2021/06/15/QBLrG.png" alt="profile" border="0">
            <div class="name">${review.name}</div>
               <p>
                  ${review.review}
               </p>
        </div>
    </div>
  `;

  /* Posting Review */
  const reviewResponse = await RestaurantSource.Review(inputData);
  console.log('posting review berhasil dilakukan', reviewResponse);

  /* Append newReview */
  reviewContainer.innerHTML += newReview;
  /* Akhir Posting Review */
};

export default review;
