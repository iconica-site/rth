import { Same } from "../../modules/same.js";

/** @type {NodeListOf<HTMLDivElement>} */
const typeCardContents = document.querySelectorAll(".type-card__content");

if (typeCardContents.length) {
  const same = new Same({
    same: "height",
    selector: ".type-card__content",
  });
}
