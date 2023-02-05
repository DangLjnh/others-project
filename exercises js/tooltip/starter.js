window.addEventListener("load", () => {
  const text = document.querySelector(".text");
  text.addEventListener("mouseenter", (e) => {
    const title = e.target.dataset.tooltip;
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip-text";
    tooltip.textContent = title;
    document.body.appendChild(tooltip);
    //lay toa do
    const cords = e.target.getBoundingClientRect();
    const tooltipHeight = tooltip.offsetHeight;
    const { left, top, width, height } = cords;
    tooltip.style.top = `${top - height - tooltipHeight}px`;
    tooltip.style.left = `${left - width / 2}px`;
    console.log(cords);
  });
  text.addEventListener("mouseleave", (e) => {
    const tooltip = document.querySelector(".tooltip-text");
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });
});
