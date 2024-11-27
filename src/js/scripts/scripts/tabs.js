/** @type {NodeListOf<HTMLDivElement>} */
const tabBlocks = document.querySelectorAll("[data-tabs]");
/** @type {HTMLDivElement} */
const products = document.querySelector(".products");

tabBlocks.forEach((tabBlock) => {
  const { dataset: { tabs: tabName } } = tabBlock;
  /** @type {HTMLDivElement} */
  const buttonsBlock = tabBlock.querySelector(`[data-buttons=\"${tabName}\"]`);
  /** @type {HTMLDivElement} */
  const panelsBlock = tabBlock.querySelector(`[data-panels=\"${tabName}\"]`);

  if (buttonsBlock && panelsBlock) {
    const tabs = buttonsBlock.children;
    const panels = panelsBlock.children;

    if (tabs.length && panels.length) {
      [...tabs].forEach(
        /** @param {HTMLButtonElement} button */
        (button) => {
          button.addEventListener("click", () => {
            const { dataset: { tab: activeTab }, classList } = button;

            if (!classList.contains("active")) {
              [...tabs].forEach(
                /** @param {HTMLButtonElement} tab */
                (tab) => {
                  tab.classList.toggle("active", tab.dataset.tab === activeTab);
                });

              [...panels].forEach(
                /** @param {HTMLDivElement} panel */
                (panel) => {
                  panel.toggleAttribute("hidden", panel.dataset.panel !== activeTab);
                });

              products?.dispatchEvent(new CustomEvent("tabchange"));
            }
          });
        });
    }
  }
});
