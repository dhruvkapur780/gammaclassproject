// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
  });

  // Close menu when a link is clicked (for anchor links)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('is-open'));
  });
}
