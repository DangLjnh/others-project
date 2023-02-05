const cardsArray = [
  {
    name: "fire",
    img: "img/fire.png",
  },
  {
    name: "youtube",
    img: "img/youtube.png",
  },
  {
    name: "flash",
    img: "img/flash.png",
  },
  {
    name: "gift",
    img: "img/gift.png",
  },
  {
    name: "tron",
    img: "img/tron.png",
  },
  {
    name: "ufo",
    img: "img/ufo.png",
  },
  {
    name: "plant",
    img: "img/plant.png",
  },
  {
    name: "burger",
    img: "img/burger.png",
  },
];
window.addEventListener("load", function () {
  const grid = document.querySelector(".grid");
  let count = 0;
  const delay = 1000;
  let previousCard;
  let firstGuess = "";
  let secondGuess = "";
  generateCard();
  grid.addEventListener("click", function (e) {
    const clicked = e.target.parentNode;
    if (previousCard === clicked) return;
    if (clicked.matches(".card")) {
      if (count < 2) {
        count++;
        if (count === 1) {
          firstGuess = clicked.dataset.name;
          clicked.classList.add("selected");
        } else {
          secondGuess = clicked.dataset.name;
          clicked.classList.add("selected");
        }
        if (firstGuess && secondGuess) {
          if (firstGuess === secondGuess) {
            setTimeout(matchingCard, delay);
          }
          setTimeout(resetGuess, delay);
        }
      } else {
        return;
      }
      previousCard = clicked;
    }
  });
  function generateCard() {
    grid.innerHTML = "";
    const cardsArrayMerge = cardsArray
      .concat(cardsArray)
      .sort(() => 0.5 - Math.random());
    cardsArrayMerge.forEach((item) => {
      const card = document.createElement("div");
      const front = document.createElement("div");
      const back = document.createElement("div");
      card.classList.add("card");
      back.classList.add("back");
      front.classList.add("front");
      card.dataset.name = item.name;
      back.style.backgroundImage = `url(${item.img})`;
      card.appendChild(front);
      card.appendChild(back);
      grid.appendChild(card);
    });
  }
  function resetGuess() {
    count = 0;
    firstGuess = "";
    secondGuess = "";
    previousCard = null;
    const selects = document.querySelectorAll(".selected");
    const matchedAll = document.querySelectorAll(".matched");
    const cardLength = document.querySelectorAll(".card").length;
    [...selects].forEach((item) => item.classList.remove("selected"));
    if (matchedAll.length === cardLength) {
      //done game -> reset game
      matchedAll.forEach((el) => el.classList.remove("matched"));
      setTimeout(generateCard, delay);
    }
  }
  function matchingCard() {
    const selects = document.querySelectorAll(".selected");
    [...selects].forEach((item) => item.classList.add("matched"));
  }
});
