const MIN_WIDTH_992_PX = matchMedia("(min-width: 992.1px)");
/** @type {HTMLElement} */
const products = document.querySelector(".products");
/** @type {NodeListOf<HTMLDivElement>} */
const productsTypesButtonsInner = products.querySelectorAll(".types-buttons__inner");

if (productsTypesButtonsInner.length) {
  productsTypesButtonsInner.forEach((typesButtonsInner) => {
    const productsTypesButtonsInnerResizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        /** @type {{target: HTMLDivElement}} */
        const { target } = entry;

        calcBackgroundPosition(target);
      });
    });

    productsTypesButtonsInnerResizeObserver.observe(typesButtonsInner);
  });

  products.addEventListener("tabchange", () => {
    productsTypesButtonsInner.forEach(calcBackgroundPosition);
  });

  /** @param {HTMLDivElement} typesButtonsInner */
  function calcBackgroundPosition(typesButtonsInner) {
    const { matches } = MIN_WIDTH_992_PX;

    if (matches) {
      /** @type {HTMLDivElement} */
      const panel = typesButtonsInner.closest("[data-panel]");

      if (!panel.hidden) {
        /** @type {HTMLButtonElement} */
        const activeTypesTab = typesButtonsInner.querySelector(".types-buttons__tab.active");

        if (activeTypesTab) {
          const { left: typesButtonsInnerLeft } = typesButtonsInner.getBoundingClientRect();
          const { left: activeTypesTabLeft, width: activeTypesTabWidth } = activeTypesTab.getBoundingClientRect();

          typesButtonsInner.style.setProperty("--active-types-tab-left", `${activeTypesTabLeft - typesButtonsInnerLeft}px`);
          typesButtonsInner.style.setProperty("--active-types-tab-width", `${activeTypesTabWidth}px`);
        }
      }
    }
  }
}
