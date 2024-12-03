import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

const typeSlider = document.querySelector(".type-slider");

if (typeSlider) {
  const swiper = new Swiper(typeSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "370.1": {
        slidesPerView: 2.5,
        spaceBetween: 4,
      },
      "625.1": {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      "992.1": {
        slidesPerView: 4.25,
        spaceBetween: 20,
      },
      "1280.1": {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    slidesPerView: 1.75,
    spaceBetween: 4,
    rewind: true,
  });
}
