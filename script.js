(function () {
  "use strict";

  const root = document.documentElement;
  const STORAGE_KEY = "sk-theme";

  /* ---------- Theme ---------- */
  const toggle = document.getElementById("themeToggle");
  const icon = toggle.querySelector("[data-theme-icon]");

  function applyTheme(theme) {
    root.dataset.theme = theme;
    icon.textContent = theme === "light" ? "☾" : "☀";
    toggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(stored || (prefersLight ? "light" : "dark"));

  toggle.addEventListener("click", function () {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------- Mobile navigation ---------- */
  const burger = document.getElementById("navBurger");
  const links = document.querySelector(".nav__links");

  burger.addEventListener("click", function () {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      links.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Sticky nav border ---------- */
  const nav = document.getElementById("nav");
  const onScroll = function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Reveal on scroll ---------- */
  const revealTargets = document.querySelectorAll(
    ".section__title, .about, .timeline__item, .card, .pub, .awards li, .contact__lead, .contact__links"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------- Active section highlighting ---------- */
  const navLinks = Array.from(links.querySelectorAll("a"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const spyObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((section) => spyObserver.observe(section));

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
