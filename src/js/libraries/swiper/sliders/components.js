import Swiper from "swiper";

const MIN_WIDTH_768_PX = matchMedia("(min-width: 768.1px)");
/** @type {HTMLDivElement} */
const componentsSlider = document.querySelector(".components-slider");

if (componentsSlider) {
  /** @type {HTMLDivElement} */
  const componentsInner = componentsSlider.closest(".components__inner");

  /** @type {NodeJS.Timeout} */
  let timeout;
  /** @type {IntersectionObserver} */
  let componentsInnerIntersectionObserver;
  let isInit = false;

  const swiper = new Swiper(componentsSlider, {
    on: {
      init: autoplay,
      slideChange: autoplay,
    },
    breakpoints: {
      "768.1": {
        spaceBetween: 0,
        autoHeight: false,
      },
    },
    init: false,
    spaceBetween: 16,
    allowTouchMove: false,
    autoHeight: true,
  });

  if (componentsInner) {
    componentsInnerIntersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;

        if (isIntersecting) {
          if (!isInit) {
            swiper.init();
            isInit = true;
          } else {
            autoplay(swiper);
          }
        } else {
          if (timeout) clearTimeout(timeout);
        }
      });
    });

    componentsInnerIntersectionObserver.observe(componentsInner);
  }

  /** @param {Swiper} swiper */
  function autoplay(swiper) {
    const { matches } = MIN_WIDTH_768_PX;
    const { activeIndex, slides, } = swiper;

    if (slides[activeIndex + 1]) {
      timeout = setTimeout(() => {
        swiper.slideNext();
      }, 4000);
    } else {
      if (matches) {
        componentsInnerIntersectionObserver?.unobserve(componentsSlider);

        setTimeout(() => {
          componentsSlider.classList.add("components-slider--finished");
        }, 4000);
      } else {
        timeout = setTimeout(() => {
          swiper.slideTo(0);
        }, 4000);
      }
    }
  }
}
