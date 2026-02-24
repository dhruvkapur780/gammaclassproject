// Simple utilities for Sara Shaik's prompt site

(function () {
  const root = document.documentElement;

  // Smooth scroll for internal anchor links
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const section = document.querySelector(href);
        if (section) {
          event.preventDefault();
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  if (navToggle && navList) {
    navToggle.addEventListener("click", () => {
      navList.classList.toggle("nav-open");
    });

    navList.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.tagName === "A") {
        navList.classList.remove("nav-open");
      }
    });
  }

  // Theme toggle with localStorage
  const THEME_KEY = "sara-site-theme";

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("theme-light");
    } else {
      document.body.classList.remove("theme-light");
    }
  }

  function getPreferredTheme() {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.body.classList.contains("theme-light") ? "light" : "dark";
      const next = current === "light" ? "dark" : "light";
      applyTheme(next);
      window.localStorage.setItem(THEME_KEY, next);
    });
  }

  // Copy prompt buttons
  const copyButtons = document.querySelectorAll(".copy-btn");

  async function copyPrompt(button, textElement) {
    const promptContent = textElement.textContent || "";
    try {
      await navigator.clipboard.writeText(promptContent.trim());
      const original = button.textContent;
      button.textContent = "Copied!";
      button.classList.add("copied");
      setTimeout(() => {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1800);
    } catch (err) {
      console.error("Clipboard copy failed", err);
      button.textContent = "Copy failed";
    }
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".prompt-card");
      if (!card) return;
      const promptBlock = card.querySelector("[data-prompt]");
      if (!promptBlock) return;
      copyPrompt(btn, promptBlock);
    });
  });

  // Simple filters for prompt categories
  const filterButtons = document.querySelectorAll(".pill[data-filter]");
  const promptCards = document.querySelectorAll(".prompt-card");

  function updateFilter(active) {
    filterButtons.forEach((btn) => {
      const value = btn.getAttribute("data-filter");
      if (!value) return;
      if (value === active) {
        btn.classList.add("pill-active");
      } else {
        btn.classList.remove("pill-active");
      }
    });

    promptCards.forEach((card) => {
      const cat = card.getAttribute("data-category") || "all";
      if (active === "all" || active === cat) {
        card.removeAttribute("hidden");
      } else {
        card.setAttribute("hidden", "true");
      }
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter") || "all";
      updateFilter(filterValue);
    });
  });

  // Initialize filter state
  updateFilter("all");

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }
})();

