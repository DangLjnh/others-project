window.addEventListener("load", () => {
  const inputSearch = document.querySelector(".input-search");
  const items = document.querySelectorAll(".dropdown-item");
  inputSearch.addEventListener("input", handlHighLight);
  function handlHighLight(e) {
    let filter = this.value.toLowerCase();
    [...items].forEach((item) => {
      let text = item.textContent;
      let index = text.toLowerCase().indexOf(filter);
      if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
        item.innerHTML = `<span class ="primary">${text.substring(
          index,
          filter.length
        )}</span>${text.substring(filter.length)}`;
      }
    });
  }
});
// window.addEventListener("load", () => {
//   const inputSearch = document.querySelector(".input-search");
//   const items = document.querySelectorAll(".dropdown-item");
//   inputSearch.addEventListener("input", handlHighLight);
//   function handlHighLight(e) {
//     let filter = this.value.toLowerCase();
//     [...items].forEach((item) => {
//       let text = item.textContent;
//       let index = text.toLowerCase().indexOf(filter);
//       if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
//         item.innerHTML = `<span class="primary">${text.substring(
//           index,
//           filter.length
//         )}</span>${text.substring(filter.length)}`;
//       }
//     });
//   }
// });
// window.addEventListener("load", () => {
//   const inputSearch = document.querySelector(".input-search");
//   let index;
//   const items = document.querySelectorAll(".dropdown-item");
//   inputSearch.addEventListener("input", handlHightLight);
//   //nó sẽ lấy value mỗi khi chúng ta gõ
//   function handlHightLight(e) {
//     let filter = this.value;
//     filter = filter.toLowerCase();
//     [...items].forEach((item) => {
//       const text = item.textContent;
//       index = text.toLowerCase().indexOf(filter);
//       if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))) {
//         item.innerHTML = `${text.substring(
//           0,
//           index
//         )}<span class="primary">${text.substring(
//           index,
//           index + filter.length
//         )}</span>${text.substring(index + filter.length)}`;
//       }
//     });
//     console.log(filter);
//   }
// });
