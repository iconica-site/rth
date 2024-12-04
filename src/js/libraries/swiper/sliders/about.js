import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

/** @type {HTMLDivElement} */
const aboutSlider = document.querySelector(".about-slider");

if (aboutSlider) {
  const swiper = new Swiper(aboutSlider, {
    modules: [Autoplay,],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      "992.1": {
        spaceBetween: 30,
        direction: "vertical",
        speed: 0,
      },
      "1312.1": {
        spaceBetween: 40,
        direction: "vertical",
        speed: 0,
      },
    },
    spaceBetween: 30,
    direction: "horizontal",
    speed: 300,
    rewind: true,
    allowTouchMove: false,
  });

  const aboutSliderIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    });
  });

  aboutSliderIntersectionObserver.observe(aboutSlider);
}
