function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
window.addEventListener("load", () => {
  let header = document.querySelector(".header");
  const heightHeader = header && header.offsetHeight;
  window.addEventListener(
    "scroll",
    debounceFn(function (e) {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight >= heightHeader) {
        header && header.classList.add("is-fixed");
        document.body.style.paddingTop = `${heightHeader}px`;
      } else {
        header && header.classList.remove("is-fixed");
        document.body.style.paddingTop = 0;
      }
    }),
    50
  );
});
