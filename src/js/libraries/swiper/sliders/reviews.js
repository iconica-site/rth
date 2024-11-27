import { initSlider } from "./functions/init-slider.js";

/** @type {HTMLDivElement} */
const reviews = document.querySelector(".reviews");
/** @type {HTMLDivElement} */
const reviewsSlider = reviews?.querySelector(".reviews-slider");

if (reviewsSlider) {
  const swiper = initSlider(reviews, reviewsSlider, {
    slidesPerView: 5,
    spaceBetween: 20,
    rewind: true,
  });
}
