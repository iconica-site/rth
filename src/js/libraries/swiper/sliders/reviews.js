import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, Scrollbar, } from "swiper/modules";

import { formatPaginationFraction } from "../../../scripts/scripts/format-pagination-fraction.js";

/** @type {HTMLDivElement} */
const reviews = document.querySelector(".reviews");
/** @type {HTMLDivElement} */
const reviewsSlider = reviews?.querySelector(".reviews-slider");

if (reviewsSlider) {
  /** @type {HTMLDivElement} */
  const prevArrow = reviews.querySelector(".slider-controllers__arrow--prev");
  /** @type {HTMLDivElement} */
  const nextArrow = reviews.querySelector(".slider-controllers__arrow--next");
  /** @type {HTMLDivElement} */
  const pagination = reviews.querySelector(".slider-controllers__pagination");
  /** @type {HTMLDivElement} */
  const scrollbar = reviews.querySelector(".slider-controllers__scrollbar");

  const slider = new Swiper(reviewsSlider, {
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
    slidesPerView: 5,
    spaceBetween: 20,
    rewind: true,
  });
}
