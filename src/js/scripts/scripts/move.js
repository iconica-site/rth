import { Move } from "../../modules/move.js";

/** @type {HTMLDivElement} */
const headerLogoMain = document.querySelector(".header-logo");
/** @type {HTMLDivElement} */
const headerLogoContainer = document.querySelector(".header__inner");

if (headerLogoMain && headerLogoContainer) {
  const move = new Move({
    destinationSelector: ".header__inner",
    targetSelector: ".header-logo",
    index: "first",
  });
}
