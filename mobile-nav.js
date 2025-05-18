const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("translate-y-full");
});

document.addEventListener("click", (e) => {
  if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
    mobileNav.classList.remove("open");
  }
});
