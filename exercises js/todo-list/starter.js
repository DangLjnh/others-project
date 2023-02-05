// body.style.backgroundColor = "red";
window.addEventListener("load", function (e) {
  const body = document.body;
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
  if (Array.isArray(todos) && todos.length > 0) {
    todos.forEach((item) => createTodoItem(item));
  }
  function createTodoItem(title) {
    const template = `
    <div class="todo-item">
      <span class="todo-text">${title}</span>
      <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
    </div> `;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = form.elements["todo"].value;
    if (!todoVal) return;
    body.style.backgroundColor = `${todoVal}`;
    createTodoItem(todoVal);
    todos.push(todoVal);
    localStorage && localStorage.setItem("todoList", JSON.stringify(todos));
    form.elements["todo"].value = "";
  });
  todoList.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.matches(".todo-remove")) {
      const todo = e.target.parentNode;
      todo.parentNode.removeChild(todo);
      const todoText = e.target.previousElementSibling.textContent;
      const index = todos.findIndex((item) => item === todoText);
      todos.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(todos));
      body.style.backgroundColor = "unset";
    }
    if (e.target.matches(".todo-text")) {
      const todoText = e.target.textContent;
      body.style.backgroundColor = `${todoText}`;
    }
  });
});
