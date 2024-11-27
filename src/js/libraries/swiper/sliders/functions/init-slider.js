import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, Scrollbar, } from "swiper/modules";

import { getSliderControllers } from "./slider-controllers.js";
import { formatPaginationFraction } from "./format-pagination-fraction.js";

/**
 * @param {HTMLDivElement} wrapper
 * @param {HTMLDivElement} slider
 * @param {import("swiper/types/index.js").SwiperOptions} options
 */
function initSlider(wrapper, slider, options) {
  const { prevArrow, nextArrow, pagination, scrollbar } = getSliderControllers(wrapper);

  const swiper = new Swiper(slider, {
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
    ...options,
  });

  return swiper;
}

export { initSlider };
