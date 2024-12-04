import { initSlider } from "./functions/init-slider.js";

/** @type {HTMLDivElement} */
const products = document.querySelector(".products");

/** @type {Swiper} */
let swiper;

if (products) {
  initProductsSlider();

  products.addEventListener("tabchange", () => {
    swiper?.destroy(true, true);

    swiper = undefined;

    initProductsSlider();
  });
}

function initProductsSlider() {
  /** @type {HTMLDivElement} */
  const activeGenderPanel = products.querySelector(".gender__panel:not([hidden])");

  if (activeGenderPanel) {
    /** @type {HTMLDivElement} */
    const activeTypesPanel = activeGenderPanel.querySelector(".types__panel:not([hidden])");
    /** @type {HTMLDivElement} */
    const productsSlider = activeTypesPanel?.querySelector(".products-slider");

    if (productsSlider) {
      swiper = initSlider(activeGenderPanel, productsSlider, {
        breakpoints: {
          "500.1": {
            slidesPerView: 2,
          },
          "768.1": {
            slidesPerView: 3,
          },
        },
        slidesPerView: 1,
        spaceBetween: 21,
        rewind: true,
      });
    }
  }
}
