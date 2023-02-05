const body = document.body;
const button = document.querySelector(".button");
const close = document.querySelector(".modal-close");
const template = `
<div class="modal">
  <div class="modal-content">
    <i class="fa fa-times modal-close"></i>
  </div>
</div>`;
button.addEventListener("click", () => {
  body.insertAdjacentHTML("beforeend", template);
});
body.addEventListener("click", handlClick);
function handlClick(e) {
  if (e.target.matches(".modal-close")) {
    const modal = e.target.parentNode.parentNode;
    modal.parentNode.removeChild(modal);
  }
  if (e.target.matches(".modal")) {
    e.target.parentNode.removeChild(e.target);
  }
}
