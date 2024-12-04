/** @type {NodeListOf<HTMLDivElement>} */
const typesButtonsBlocks = document.querySelectorAll(".types-buttons");

typesButtonsBlocks.forEach((typesButtonsBlock) => {
  /** @type {HTMLButtonElement} */
  const typesSelectButton = typesButtonsBlock.querySelector(".types-select");
  /** @type {HTMLSpanElement} */
  const typeSelectTextSpan = typesSelectButton?.querySelector(".types-select__text");
  /** @type {HTMLDivElement} */
  const typesButtonsInner = typesButtonsBlock.querySelector(".types-buttons__inner");
  /** @type {NodeListOf<HTMLButtonElement>} */
  const typesTabButtons = typesButtonsInner?.querySelectorAll(".types-buttons__tab");

  typesSelectButton?.addEventListener("click", () => {
    typesButtonsInner?.classList.toggle("types-buttons__inner--show");
  });

  typesTabButtons?.forEach((typesTabButton) => {
    const { textContent } = typesTabButton;

    typesTabButton.addEventListener("click", () => {
      if (typeSelectTextSpan) {
        setTimeout(() => {
          typeSelectTextSpan.textContent = textContent;

          hideTypesButtonsInner();
        });
      }
    });
  });
});

document.addEventListener("click", (event) => {
  /** @type {{ target: HTMLElement }} */
  const { target } = event;

  if (!target.closest(".types-buttons")) hideTypesButtonsInner();
});

document.addEventListener("keydown", (event) => {
  const { code } = event;

  if (code === "Escape") hideTypesButtonsInner();
});

function hideTypesButtonsInner() {
  /** @type {HTMLDivElement} */
  const activeTypesButtonsInner = document.querySelector(".types-buttons__inner--show");

  activeTypesButtonsInner?.classList.remove("types-buttons__inner--show");
}
