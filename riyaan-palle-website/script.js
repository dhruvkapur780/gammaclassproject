// Mobile navigation toggle
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('active');
});

// Close mobile nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.remove('active');
  });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();
