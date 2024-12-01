/** @type {HTMLDivElement} */
const componentsInner = document.querySelector(".components__inner");
/** @type {NodeListOf<HTMLElement>} */
const componentCards = document.querySelectorAll(".component-card");

/** @type {NodeJS.Timeout} */
let timeout;
/** @type {IntersectionObserver} */
let componentsListIntersectionObserver;
let isAnimate = false;

if (componentsInner) {
  componentCards.forEach((componentCard, index, elements) => {
    componentCard.addEventListener("animate", () => {
      const prevEl = elements[index - 1];
      const nextEl = elements[index + 1];

      prevEl?.classList.remove("component-card--animate");
      prevEl?.classList.add("component-card--finished");
      componentCard.classList.add("component-card--animate");

      if (nextEl) {
        timeout = setTimeout(() => {
          nextEl.dispatchEvent(new Event("animate"));
        }, 4000);
      } else {
        componentsListIntersectionObserver?.unobserve(componentsInner);

        setTimeout(() => {
          componentCard.classList.remove("component-card--animate");
          componentCard.classList.add("component-card--finished");
          componentsInner.classList.remove("components__inner--animate");
          componentsInner.classList.remove("components__inner--paused");

          setTimeout(() => {
            componentCards.forEach((componentCard) => {
              componentCard.classList.remove("component-card--finished");
            });

            componentsInner.classList.add("components__inner--finished");
          }, 600);
        }, 4000);
      }
    });
  });

  componentsListIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;

      componentsInner.classList.toggle("components__inner--animate", isIntersecting);
      componentsInner.classList.toggle("components__inner--paused", isAnimate && !isIntersecting);

      if (isIntersecting) {
        if (isAnimate) {
          const animatedComponentCard = target.querySelector(".component-card--animate");

          animatedComponentCard?.dispatchEvent(new Event("animate"));
        } else {
          const firstComponentCard = componentCards[0];

          if (firstComponentCard) {
            timeout = setTimeout(() => {
              firstComponentCard.classList.add("component-card--animate");
              firstComponentCard.dispatchEvent(new Event("animate"));

              isAnimate = true;
            }, 300);
          }
        }

      } else {
        if (timeout) clearTimeout(timeout);
      }
    });
  });

  componentsListIntersectionObserver.observe(componentsInner);
}
