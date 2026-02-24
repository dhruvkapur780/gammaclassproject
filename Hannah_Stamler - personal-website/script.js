// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
  });

  // Close menu when clicking a link (for anchor links)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
}
