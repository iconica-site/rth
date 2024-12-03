import { Goto } from "../../modules/goto.js";

/** @type {HTMLAnchorElement} */
const headerNavLinks = document.querySelectorAll(".header-nav__link");

if (headerNavLinks.length) {
  const goto = new Goto(".header-nav__link");
}
