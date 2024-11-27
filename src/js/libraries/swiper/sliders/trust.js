import { initSlider } from "./functions/init-slider.js";

/** @type {HTMLDivElement} */
const trust = document.querySelector(".trust");
/** @type {HTMLDivElement} */
const trustSlider = trust?.querySelector(".trust-slider");

if (trustSlider) {
  const swiper = initSlider(trust, trustSlider, {
    slidesPerView: "auto",
    spaceBetween: 20,
    rewind: true,
  });
}
