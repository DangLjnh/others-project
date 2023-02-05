const dropSelect = document.querySelector(".dropdown__select");
const dropSelected = document.querySelector(".dropdown__selected");
const dropList = document.querySelector(".dropdown__list");
const dropItem = document.querySelectorAll(".dropdown__item");
const icon = dropSelect.querySelector(".dropdown__caret");
const dropdown = document.querySelector(".dropdown");
dropSelect.addEventListener("click", (e) => {
  dropList.classList.toggle("show");
  icon.classList.toggle("fa-caret-up");
  icon.classList.toggle("fa-caret-down");
});
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropList.classList.remove("show");
    changeIcon(icon);
  }
  if (!e.target.matches(".dropdown__select")) {
  }
});
[...dropItem].forEach((item) => item.addEventListener("click", handlClick));
function handlClick(e) {
  if (e.target.matches(".dropdown__item")) {
    let content = e.target.querySelector(".dropdown__text").textContent;
    dropSelected.textContent = content;
    dropList.classList.remove("show");
    changeIcon(icon);
  }
}
function changeIcon(icon) {
  icon.classList.remove("fa-caret-up");
  icon.classList.add("fa-caret-down");
}
