// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-active');
    });
}

// Reveal on scroll
const revealElements = document.querySelectorAll(
    '.section, .timeline-item, .skill-category'
);

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.22,
        }
    );

    revealElements.forEach((el) => {
        el.classList.add('reveal');
        observer.observe(el);
    });
} else {
    // Fallback: show all content if IntersectionObserver is not supported
    revealElements.forEach((el) => {
        el.classList.add('is-visible');
    });
}
