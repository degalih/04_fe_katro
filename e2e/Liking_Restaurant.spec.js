const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const favoriteEmptyRestaurantInfo =
  'Anda belum memilih restoran favorit anda. Klik tombol hati pada restoran yang ingin anda favoritkan.';

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#cards');
  I.see(favoriteEmptyRestaurantInfo, '#cards');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(favoriteEmptyRestaurantInfo, '#cards');

  I.amOnPage('/');
  I.seeElement('.card');

  const firstRestaurant = locate('.card__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  //memastikan restoran yang difavoritkan benar
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(favoriteEmptyRestaurantInfo, '#cards');

  I.amOnPage('/');
  I.seeElement('.card');

  const firstRestaurant = locate('.card__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  //memastikan restoran yang difavoritkan benar
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#cards');

  I.dontSeeElement('.card');
  I.dontSeeElement('.card__content a');
});
