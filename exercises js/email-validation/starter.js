window.addEventListener("load", function () {
  const email = document.querySelector(".input");
  email.addEventListener("input", function (e) {
    e.preventDefault();
    const value = e.target.value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value.trim())) {
      e.target.classList.add("valid");
    } else {
      e.target.classList.add("invalid");
      e.target.classList.remove("valid");
    }
    if (!value) e.target.classList.remove("invalid");
  });
});
