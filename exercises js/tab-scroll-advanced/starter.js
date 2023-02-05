window.addEventListener("load", () => {
  const tabItem = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  [...tabItem].forEach((item) => item.addEventListener("click", handlClick));
  const tab = document.querySelector(".tab");
  const tabNext = document.querySelector(".tab-next");
  const tabPrev = document.querySelector(".tab-prev");
  const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
  let deltaScroll = 40;
  function handlClick(e) {
    [...tabItem].forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    let spacingLeft = e.target.offsetLeft;
    tabList.scroll(spacingLeft / 2, 0);
  }
  tabList.addEventListener("wheel", function (e) {
    let delta = e.deltaY; // co gia tri am khi scroll len, duong khi scoll xuong
    this.scrollLeft += delta;
    if (this.scrollLeft > 0) {
      tabPrev.classList.remove("disabled");
    }
    if (this.scrollLeft < tabScrollWidth) {
      tabNext.classList.remove("disabled");
    }
    if (this.scrollLeft >= tabScrollWidth) {
      tabNext.classList.add("disabled");
    } else if (this.scrollLeft <= 0) {
      tabPrev.classList.add("disabled");
    }
    e.preventDefault();
  });
  tabNext.addEventListener("click", function (e) {
    tabList.scrollLeft += deltaScroll;
    if (tabList.scrollLeft >= tabScrollWidth) {
      this.classList.add("disabled");
    }
    tabPrev.classList.remove("disabled");
  });
  tabPrev.addEventListener("click", function (e) {
    tabList.scrollLeft -= deltaScroll;
    if (tabList.scrollLeft <= 0) {
      this.classList.add("disabled");
    }
    tabNext.classList.remove("disabled");
  });
});
