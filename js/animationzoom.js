function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight &&
    rect.bottom > 0
  );
}

const elements = document.querySelectorAll('.zoom-text');

function scrollAnimation() {
  elements.forEach(el => {
    if (isInViewport(el)) {
      // Agregar clase para animar
      if (!el.classList.contains('animate')) {
        el.classList.add('animate');
      }
    } else {
      // Remover clase para permitir que se repita la animación al volver a entrar
      el.classList.remove('animate');
    }
  });
}

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation);
