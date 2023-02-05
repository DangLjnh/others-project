window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    e.preventDefault();
    const value = e.target.value;
    const checkItems = e.target.parentNode.querySelectorAll(".check-item");
    const checkLength = e.target.parentNode.querySelector(".check-length");
    const checkUpper = e.target.parentNode.querySelector(".check-upper");
    const checkNumber = e.target.parentNode.querySelector(".check-number");
    const checkSpecial = e.target.parentNode.querySelector(".check-special");
    if (!value) {
      [...checkItems].forEach((item) => {
        item.classList.remove("unactive");
        item.classList.remove("active");
      });
      return;
    }
    if (value.length < 8) {
      checkLength.classList.add("unactive");
      checkLength.classList.remove("active");
    } else {
      checkLength.classList.add("active");
      checkLength.classList.remove("unactive");
    }
    checkPasswordValidation(checkUpper, value, /[A-Z]/);
    checkPasswordValidation(checkNumber, value, /[0-9]/);
    checkPasswordValidation(checkSpecial, value, /[$@%^&*()}{[\]}!]/);
  });
  function checkPasswordValidation(selector, value, regex) {
    if (regex.test(value.trim())) {
      selector.classList.add("active");
      selector.classList.remove("unactive");
    } else {
      selector.classList.add("unactive");
      selector.classList.remove("active");
    }
  }
});
// window.addEventListener("load", function () {
//   const passwordInput = document.querySelector(".input");
//   passwordInput.addEventListener("input", function (e) {
//     e.preventDefault();
//     const value = e.target.value;
//     const checkItems = e.target.parentNode.querySelectorAll(".check-item");
//     const checkLength = e.target.parentNode.querySelector(".check-length");
//     const checkUpper = e.target.parentNode.querySelector(".check-upper");
//     const checkNumber = e.target.parentNode.querySelector(".check-number");
//     const checkSpecial = e.target.parentNode.querySelector(".check-special");
//     if (value.length < 8) {
//       checkLength.classList.add("unactive");
//       checkLength.classList.remove("active");
//     } else {
//       checkLength.classList.add("active");
//       checkLength.classList.remove("unactive");
//     }
//     if (!value) {
//       [...checkItems].forEach((item) => {
//         item.classList.remove("unactive");
//         item.classList.remove("active");
//       });
//       return;
//     }
//     passwordInputValidation(checkUpper, /[A-Z]/, value);
//     passwordInputValidation(checkNumber, /[0-9]/, value);
//     passwordInputValidation(checkSpecial, /[$@%^&*()}{[\]}!]/, value);
//   });
//   function passwordInputValidation(selector, regex, value) {
//     if (regex.test(value.trim())) {
//       selector.classList.add("active");
//       selector.classList.remove("unactive");
//     } else {
//       selector.classList.add("unactive");
//       selector.classList.remove("active");
//     }
//   }
// });
