const countNumber = document.querySelector(".counter-number");
const btnPlus = document.querySelector(".counter-increase");
const btnMinus = document.querySelector(".counter-descrease");
let countValue = parseInt(countNumber.textContent);
btnPlus.addEventListener("click", () => {
  countValue++;
  countNumber.textContent = countValue;
});
btnMinus.addEventListener("click", () => {
  countValue--;
  countNumber.textContent = countValue;
});
