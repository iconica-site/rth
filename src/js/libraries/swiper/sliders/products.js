import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, Scrollbar, } from "swiper/modules";

/** @type {HTMLDivElement} */
const products = document.querySelector(".products");

/** @type {Swiper} */
let slider;

if (products) {
  initProductsSlider();

  products.addEventListener("tabchange", () => {
    slider?.destroy(true, true);

    slider = undefined;

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
      /** @type {HTMLDivElement} */
      const prevArrow = activeGenderPanel.querySelector(".slider-controllers__arrow--prev");
      /** @type {HTMLDivElement} */
      const nextArrow = activeGenderPanel.querySelector(".slider-controllers__arrow--next");
      /** @type {HTMLDivElement} */
      const pagination = activeGenderPanel.querySelector(".slider-controllers__pagination");
      /** @type {HTMLDivElement} */
      const scrollbar = activeGenderPanel.querySelector(".slider-controllers__scrollbar");

      slider = new Swiper(productsSlider, {
        modules: [Keyboard, Navigation, Pagination, Scrollbar],
        keyboard: {
          enabled: true,
          pageUpDown: false,
        },
        navigation: {
          enabled: true,
          nextEl: nextArrow,
          prevEl: prevArrow,
        },
        pagination: {
          el: pagination,
          enabled: true,
          type: "fraction",
          formatFractionCurrent: formatPaginationFraction,
          formatFractionTotal: formatPaginationFraction,
          renderFraction: (currentClass, totalClass) => {
            return `<span class="${currentClass}"></span><span class="${totalClass}"></span>`;
          },
        },
        scrollbar: {
          draggable: true,
          el: scrollbar,
          hide: false,
          snapOnRelease: true,
        },
        slidesPerView: 3,
        spaceBetween: 21,
        rewind: true,
      });
    }
  }
}

/** @param {number} number */
function formatPaginationFraction(number) {
  return number < 10 ? `0${number}` : number;
}
