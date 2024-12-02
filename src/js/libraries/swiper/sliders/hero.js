import Swiper from "swiper";
import { Autoplay, EffectFade, Keyboard, } from "swiper/modules";

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
  const swiper = new Swiper(heroSlider, {
    modules: [Autoplay, EffectFade, Keyboard,],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      // pauseOnMouseEnter: true,
    },
    fadeEffect: {
      crossFade: true,
    },
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    effect: "fade",
  });
}
