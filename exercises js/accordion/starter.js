const accordianHeaders = document.querySelectorAll(".accordion-header");
[...accordianHeaders].forEach((item) =>
  item.addEventListener("click", handlClick)
);
function handlClick(e) {
  const content = e.target.nextElementSibling;
  content.style.height = `${content.scrollHeight}px`;
  content.classList.toggle("is-active");
  if (!content.classList.contains("is-active")) {
    content.style.height = `0px`;
  }
  const icon = e.target.querySelector(".icon");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
