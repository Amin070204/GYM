document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1 // 10% visible para activar
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // animar solo 1 vez
      }
    });
  }, observerOptions);

  const targets = document.querySelectorAll(".aggressive-text, .aggressive-image");
  targets.forEach(target => observer.observe(target));
});
