window.addEventListener("load", () => {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const dotItem = document.querySelectorAll(".slider-dot-item");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  let positionX = 0;
  let index = 0;
  nextBtn.addEventListener("click", function (e) {
    handlChangeSlide(1);
  });
  prevBtn.addEventListener("click", function (e) {
    handlChangeSlide(-1);
  });
  function handlChangeSlide(dir) {
    if (dir === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      positionX -= sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    }
    if (dir === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX += sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
    [...dotItem].forEach((item) => item.classList.remove("active"));
    dotItem[index].classList.add("active");
  }
  [...dotItem].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItem].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      positionX = -1 * sliderItemWidth * index;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      console.log(positionX);
    })
  );
});
