import { Same } from "../../modules/same.js";

/** @type {NodeListOf<HTMLDivElement>} */
const typeCardContents = document.querySelectorAll(".type-card__content");

if (typeCardContents.length) {
  const same = new Same({
    same: "height",
    selector: ".type-card__content",
  });
}

/** @type {NodeListOf<HTMLHeadingElement>} */
const componentTitles = document.querySelectorAll(".component-card__title");

if (componentTitles.length) {
  const same = new Same({
    same: "height",
    selector: ".component-card__title",
    breakpoint: 768,
    breakpointType: "max",
  });
}
