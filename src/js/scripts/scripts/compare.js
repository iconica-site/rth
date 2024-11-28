/** @type {NodeListOf<HTMLDivElement>} */
const compareBlocks = document.querySelectorAll(".compare-images");

compareBlocks.forEach((compareBlock) => {
  /** @type {HTMLInputElement} */
  const range = compareBlock.querySelector(".compare-images__range");

  if (range) {
    range.addEventListener("input", () => {
      const value = range.style.getPropertyValue("--range-fill-value");

      compareBlock.style.setProperty("--compare-position", value);
    });
  }
});
