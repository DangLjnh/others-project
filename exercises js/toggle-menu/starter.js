const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", (e) => {
  menu.classList.toggle("is-show");
  toggle.classList.toggle("fa-times");
  toggle.classList.toggle("fa-bars");
});
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
    toggle.classList.remove("fa-times");
    toggle.classList.add("fa-bars");
  }
});
