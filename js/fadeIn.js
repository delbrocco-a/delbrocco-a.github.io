/* Scroll Animation Observer --------------------------------------------------
 *    Observes elements and triggers CSS transitions when they enter the viewport
-----------------------------------------------------------------------------*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll(
  '.hidden-left, .hidden-right, .fade-in'
);
hiddenElements.forEach((el) => observer.observe(el));
