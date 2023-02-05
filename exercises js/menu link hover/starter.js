window.addEventListener("load", () => {
  const link = [...document.querySelectorAll(".menu-link")];
  link.forEach((item) => item.addEventListener("mouseenter", mouseHover));
  let lineEffect = document.createElement("div");
  lineEffect.className = "line-effect";
  document.body.appendChild(lineEffect);
  function mouseHover(e) {
    const { width, top, left, height } = e.target.getBoundingClientRect();
    let offsetBottom = 5;
    lineEffect.style = `width: ${width}px; top: ${
      top + height + offsetBottom
    }px; left: ${left}px`;
  }
  const menu = document.querySelector(".menu");
  menu.addEventListener("mouseleave", () => {
    lineEffect.style.width = 0;
  });
});
