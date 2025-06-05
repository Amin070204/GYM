  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-links a');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });