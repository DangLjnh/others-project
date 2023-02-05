// window.addEventListener("load", () => {
//   const tabItem = document.querySelectorAll(".tab-item");
//   const tabList = document.querySelector(".tab-list");
//   [...tabItem].forEach((item) => item.addEventListener("click", handlClick));
//   function handlClick(e) {
//     [...tabItem].forEach((item) => {
//       item.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     const spacingMiddle = [...tabItem][1].offsetLeft;
//     const spacingLeft = e.target.offsetLeft;
//     tabList.scroll((spacingLeft - spacingMiddle) / 2, 0);
//   }
// });
window.addEventListener("load", () => {
  const tabItem = document.querySelectorAll(".tab-item");
  const tabList = document.querySelector(".tab-list");
  [...tabItem].forEach((item) => item.addEventListener("click", handlClick));
  const tab = document.querySelector(".tab");
  const tabOffsetLeft = tab.offsetLeft;
  function handlClick(e) {
    [...tabItem].forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    const spacingLeft = e.target.offsetLeft - tabOffsetLeft;
    tabList.scroll(spacingLeft / 2, 0);
  }
});
