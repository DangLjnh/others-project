window.addEventListener("load", () => {
  const tooglePass = document.querySelector(".toggle");
  tooglePass.addEventListener("click", function (e) {
    let input = this.previousElementSibling;
    const inputType = input.getAttribute("type");
    if (inputType === "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});
