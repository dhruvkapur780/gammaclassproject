(function () {
  "use strict";

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile menu if open
        var navLinks = document.querySelector(".banner-links");
        if (navLinks && navLinks.classList.contains("is-open")) {
          navLinks.classList.remove("is-open");
          var toggle = document.querySelector(".nav-toggle");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".banner-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
})();
