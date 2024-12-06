import Swiper from "swiper";
import { Keyboard, Navigation, Pagination, } from "swiper/modules";

const dialogSlider = document.querySelector(".dialog-slider");

if (dialogSlider) {
  const swiper = new Swiper(dialogSlider, {
    modules: [Keyboard, Navigation, Pagination,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: ".dialog-slider__arrow--next",
      prevEl: ".dialog-slider__arrow--prev",
    },
    pagination: {
      clickable: true,
      el: ".dialog-slider__pagination",
      enabled: true,
    },
    spaceBetween: 16,
    rewind: true,
  });
}
