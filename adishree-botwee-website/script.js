/**
 * Sahiti Midithuri - Professional Website
 * Interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initYear();
    initContactForm();
    initScrollEffects();
});

/**
 * Mobile navigation toggle
 */
function initNavigation() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelectorAll('.nav-links a');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            nav.classList.remove('open');
        }
    });
}

/**
 * Dynamic year in footer
 */
function initYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * Contact form handling (placeholder - no backend)
 */
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;

        // Placeholder: In production, send to backend/email service
        console.log('Form submission:', { name, email, message });

        // Show success feedback
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent!';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}

/**
 * Subtle scroll effects - nav background on scroll
 */
function initScrollEffects() {
    const nav = document.querySelector('.nav');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            nav?.classList.add('scrolled');
        } else {
            nav?.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}
