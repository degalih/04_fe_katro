import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import review from '../../utils/review';
import { sendDataToWebsocket } from '../../utils/websocket-initiator';

const Detail = {
  async render() {
    return `
    <div class="section-title">
    <div class="container">
      <h2>Detail Page</h2> </div>
  </div>

  <div id="detail"> </div>

  <div id="likeButtonContainer"> </div>

  <!-- Post Review -->
  <div class="container">
    <div class="input">
      <div class="form">
      
        <div class="section-title">
          <div class="container">
            <h2>Posting Review</h2> </div>
        </div>

        <form id="inputReview">
          <div class="input">
            <label for="nama-review">Nama</label>
            <input placeholder="Nama/Inisial" type="text" id="nama-review" required /> </div>
          <div class="input">
            <label for="input-review">Review</label>
            <textarea rows="5" id="input-review" placeholder="Review" required></textarea>
          </div>
          <button id="submit-review" type="submit">Tambahkan Review</button>
        </form>
      </div>
    </div>
    <!-- Akhir Post Review -->
  </div>
    
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestaurantSource.Detail(url.id);
    const detailContainer = document.querySelector('#detail');
    detailContainer.innerHTML = createRestaurantDetailTemplate(detail);

    /* like Button */
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      detail: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
        city: detail.city,
      },
    });

    /* Posting Review */
    const btnSubmitReview = document.querySelector('#submit-review');
    const namaReview = document.querySelector('#nama-review');
    const inputReview = document.querySelector('#input-review');

    btnSubmitReview.addEventListener('click', async (e) => {
      e.preventDefault();

      await review(url, namaReview.value, inputReview.value);

      sendDataToWebsocket({
        name: namaReview.value,
        review: inputReview.value,
      });

      namaReview.value = '';
      inputReview.value = '';
    });
  },
};

export default Detail;
