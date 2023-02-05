window.addEventListener("load", function () {
  const images = document.querySelectorAll("img");
  window.addEventListener("scroll", function (e) {
    const windowOffSetTop = window.pageYOffset;
    e.preventDefault();
    [...images].forEach((item) => {
      const itemOffSetTop = item.offsetTop;
      const itemOffSetHeight = item.offsetHeight;
      if (windowOffSetTop > itemOffSetTop - itemOffSetHeight / 2) {
        item.classList.add("active");
      }
    });
  });
});
