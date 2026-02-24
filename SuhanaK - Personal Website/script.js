(function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Scroll-triggered section visibility
  var sections = document.querySelectorAll('.animate-on-scroll');
  if (sections.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  } else {
    sections.forEach(function (section) {
      section.classList.add('visible');
    });
  }

  // Back to top: show after scrolling down, hide at top
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.removeAttribute('hidden');
    backToTop.classList.remove('visible');
    function updateBackToTop() {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }

  // Experience carousel: arrow buttons move to next/previous slide
  var carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    var track = carousel.querySelector('.carousel-track');
    var slides = carousel.querySelectorAll('.carousel-slide');
    var prevBtn = carousel.querySelector('.carousel-btn--prev');
    var nextBtn = carousel.querySelector('.carousel-btn--next');
    var total = slides.length;
    var current = 0;

    function goTo(index) {
      current = (index + total) % total;
      var offset = -current * 100;
      track.style.transform = 'translateX(' + offset + '%)';
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { goTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { goTo(current + 1); });
  }
})();
