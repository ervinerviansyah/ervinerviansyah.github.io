// Simple mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
