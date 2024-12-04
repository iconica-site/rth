import { initSlider } from "./functions/init-slider.js";

/** @type {HTMLDivElement} */
const usefulSlider = document.querySelector(".useful-slider");

if (usefulSlider) {
  const swiper = initSlider(usefulSlider, usefulSlider, {
    breakpoints: {
      "420.1": {
        slidesPerView: "auto",
        spaceBetween: 16,
        autoHeight: false,
      },
      "768.1": {
        slidesPerView: "auto",
        spaceBetween: 70,
        autoHeight: false,
      },
    },
    slidesPerView: 1,
    spaceBetween: 16,
    autoHeight: true,
    rewind: true,
  });
}
