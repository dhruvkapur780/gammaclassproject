const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav-menu");

function setMenuOpen(isOpen) {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", String(isOpen));
  menu.dataset.open = isOpen ? "true" : "false";
}

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!open);
  });

  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && target.classList.contains("nav__link")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (menu.contains(target) || toggle.contains(target)) return;
    setMenuOpen(false);
  });
}

