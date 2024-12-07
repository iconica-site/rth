import Swiper from "swiper";
import { Navigation, Pagination, } from "swiper/modules";

/** @type {NodeListOf<HTMLDivElement>} */
const productImagesSlides = document.querySelectorAll(".product-images");

productImagesSlides.forEach((productImages) => {
  const prev = productImages.querySelector(".product-images__arrow--prev");
  const next = productImages.querySelector(".product-images__arrow--next");
  const pagination = productImages.querySelector(".product-images__pagination");

  if (productImages) {
    const swiper = new Swiper(productImages, {
      modules: [Navigation, Pagination,],
      navigation: {
        enabled: true,
        nextEl: next,
        prevEl: prev,
      },
      pagination: {
        clickable: true,
        el: pagination,
        enabled: true,
      },
      spaceBetween: 16,
      nested: true,
    });
  }
});
