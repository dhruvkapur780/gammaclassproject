// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('is-open');
    navLinks.classList.toggle('is-open');
    document.body.style.overflow = navLinks.classList.contains('is-open') ? 'hidden' : '';
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}
