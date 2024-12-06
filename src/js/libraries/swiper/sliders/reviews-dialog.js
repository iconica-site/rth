import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

/** @type {HTMLDivElement} */
const reviewsDialogSlider = document.querySelector(".reviews-dialog-slider");

if (reviewsDialogSlider) {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const reviewsDialogTriggers = document.querySelectorAll(".review-card .play-button[data-index]");

  const swiper = new Swiper(reviewsDialogSlider, {
    modules: [Keyboard, Navigation,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: ".reviews-dialog__arrow--next",
      prevEl: ".reviews-dialog__arrow--prev",
    },
    spaceBetween: 16,
    rewind: true,
  });

  reviewsDialogTriggers.forEach((reviewsDialogTrigger) => {
    const { dataset } = reviewsDialogTrigger;
    const { index } = dataset;

    reviewsDialogTrigger.addEventListener("click", () => {
      const { slides } = swiper;
      const triggeredSlide = slides[index];

      if (triggeredSlide) {
        swiper.slideTo(index);
      }
    });
  });
}
