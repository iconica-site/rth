import { initSlider } from "./functions/init-slider.js";

/** @type {HTMLDivElement} */
const trust = document.querySelector(".trust");
/** @type {HTMLDivElement} */
const trustSlider = trust?.querySelector(".trust-slider");

if (trustSlider) {
  const swiper = initSlider(trust, trustSlider, {
    breakpoints: {
      "768.1": {
        spaceBetween: 20,
      },
    },
    slidesPerView: "auto",
    spaceBetween: 8,
    rewind: true,
  });
}
