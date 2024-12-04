import { initSlider } from "./functions/init-slider.js";

/** @type {HTMLDivElement} */
const reviews = document.querySelector(".reviews");
/** @type {HTMLDivElement} */
const reviewsSlider = reviews?.querySelector(".reviews-slider");

if (reviewsSlider) {
  const swiper = initSlider(reviews, reviewsSlider, {
    breakpoints: {
      "390.1": {
        slidesPerView: 1.703081597,
        spaceBetween: 15,
      },
      "650.1": {
        slidesPerView: 2.75,
        spaceBetween: 15,
      },
      "768.1": {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      "992.1": {
        slidesPerView: 4.25,
        spaceBetween: 20,
      },
      "1280.1": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    slidesPerView: 1.15,
    spaceBetween: 15,
    rewind: true,
  });
}
