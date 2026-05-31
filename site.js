document.querySelectorAll(".mobile-menu-toggle").forEach((toggle) => {
  const nav = toggle.closest(".nav");
  const menu = nav ? nav.querySelector(".menu") : null;

  if (!nav || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
