/**
 * @param {HTMLDivElement} wrapper
 * @return {{prevArrow: HTMLDivElement, nextArrow: HTMLDivElement, pagination: HTMLDivElement, scrollbar: HTMLDivElement}}
 */
function getSliderControllers(wrapper) {
  /** @type {HTMLDivElement} */
  const prevArrow = wrapper.querySelector(".slider-controllers__arrow--prev");
  /** @type {HTMLDivElement} */
  const nextArrow = wrapper.querySelector(".slider-controllers__arrow--next");
  /** @type {HTMLDivElement} */
  const pagination = wrapper.querySelector(".slider-controllers__pagination");
  /** @type {HTMLDivElement} */
  const scrollbar = wrapper.querySelector(".slider-controllers__scrollbar");

  return { prevArrow, nextArrow, pagination, scrollbar };
}

export { getSliderControllers };
