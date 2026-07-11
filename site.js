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

document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const button = dropdown.querySelector(".menu-button");

  if (!button) {
    return;
  }

  button.addEventListener("click", (event) => {
    if (window.matchMedia("(max-width: 920px)").matches) {
      return;
    }

    if (!dropdown.classList.contains("dropdown-open")) {
      event.preventDefault();
      document.querySelectorAll(".dropdown.dropdown-open").forEach((openDropdown) => {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove("dropdown-open");
        }
      });
      dropdown.classList.add("dropdown-open");
    }
  });
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".dropdown")) {
    return;
  }

  document.querySelectorAll(".dropdown.dropdown-open").forEach((dropdown) => {
    dropdown.classList.remove("dropdown-open");
  });
});
