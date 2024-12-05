/** @type {NodeListOf<HTMLElement>} */
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  const sectionIntersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      /** @type {{target: HTMLElement, isIntersecting: boolean}} */
      const { target, isIntersecting } = entry;

      if (isIntersecting) {
        target.classList.add("section--animate");
        observer.unobserve(target);
      }
    });
  }, {
    threshold: 0.4,
  });

  sectionIntersectionObserver.observe(section);
});
