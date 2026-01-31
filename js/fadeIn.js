/* Form Library ---------------------------------------------------------------
 *    A set of functions for interacting with HTML Forms  
-----------------------------------------------------------------------------*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      // Only animate elements once, and if they are visible
    }
  });
});

const hiddenElements = document.querySelectorAll(
  '.hidden-left, .hidden-right' 
);
hiddenElements.forEach((el) => observer.observe(el));