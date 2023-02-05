var todos = [];

//render Todo
var renderTodos = (todos) => {
  //remove all ul child
  var lis = document.querySelectorAll("ul li");
  lis.forEach((li) => {
    li.remove();
  });

  //load todos ra giao dien
  todos.forEach((val, idx) => {
    var li = document.createElement("li");
    li.innerHTML = `${val.content}
    <span data-id=${val.id} class="btn-delete"><i class="fa-solid fa-trash"></i></span>
    <span data-id=${val.id} class="btn-edit"><i class="fa-solid fa-edit"></i></span>`;
    ul.appendChild(li);
  });
};
//CRUD -> create, read, update, done

//load todo tu mang
var ul = document.querySelector("ul");
todos.forEach((val, idx) => {
  var li = document.createElement("li");
  li.textContent = val.content;
  ul.appendChild(li);
});

var submit = document.querySelector(".submit");
var input = document.querySelector(".todo-input");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  var inputValue = input.value;
  if (!inputValue) {
    alert("input is empty");
  } else {
    todos.push({
      id: Date.now(),
      content: inputValue,
      done: false,
    });
    renderTodos(todos);
    //empty input
    input.value = "";
  }
});

document.addEventListener("click", function (e) {
  var target = e.target;
  var btnDelete = target.closest(".btn-delete");
  if (btnDelete) {
    var id = btnDelete.getAttribute("data-id");
    var idx = todos.findIndex((val) => val.id == id);
    todos.splice(idx, 1);
    renderTodos(todos);
  }
});
