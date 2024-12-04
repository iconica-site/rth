import { Move } from "../../modules/move.js";

/** @type {HTMLDivElement} */
const headerLogoMain = document.querySelector(".header-logo");
/** @type {HTMLDivElement} */
const headerLogoContainer = document.querySelector(".header__inner");

if (headerLogoMain && headerLogoContainer) {
  const move = new Move({
    destination: headerLogoContainer,
    target: headerLogoMain,
    index: "first",
  });
}

/** @type {NodeListOf<HTMLDivElement>} */
const productTypes = document.querySelectorAll(".types");

productTypes.forEach((productType) => {
  /** @type {HTMLDivElement} */
  const productsSliderControllersMain = productType.querySelector(".slider-controllers");
  /** @type {HTMLDivElement} */
  const productsSliderControllersContainer = productType.querySelector(".types__controllers");

  if (productsSliderControllersMain && productsSliderControllersContainer) {
    const move = new Move({
      destination: productsSliderControllersContainer,
      target: productsSliderControllersMain,
      breakpoint: 500,
    });
  }
});
