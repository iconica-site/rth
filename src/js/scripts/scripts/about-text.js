/** @type {NodeListOf<HTMLLIElement>} */
const aboutTexts = document.querySelectorAll(".about-facts__text");

aboutTexts.forEach((aboutText, index, elements) => {
  aboutText.addEventListener("animate", () => {
    const prevEl = elements[index - 1] ? elements[index - 1] : elements[elements.length - 1];
    const nextEl = elements[index + 1] ? elements[index + 1] : elements[0];

    prevEl.classList.remove("about-facts__text--active");
    aboutText.classList.add("about-facts__text--active");

    setTimeout(() => {
      nextEl.dispatchEvent(new Event("animate"));
    }, elements.length * 1000);
  });

  if (aboutText.classList.contains("about-facts__text--active")) {
    const firstActiveAboutTextIntersectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        if (isIntersecting) {
          target.dispatchEvent(new Event("animate"));
          observer.unobserve(target);
        }
      });
    });

    firstActiveAboutTextIntersectionObserver.observe(aboutText);
  }
});
