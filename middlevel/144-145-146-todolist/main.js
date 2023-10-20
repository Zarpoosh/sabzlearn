let $ = document;
let inputElem = $.querySelector("input");
let addTodoForm = $.querySelector(".add");
let todoList = $.querySelector(".list-group");

function addNewTodo(newTodoValue) {
  // create a new li
  let newTodoLi = $.createElement("li");
  newTodoLi.className = "list-item";

  //   create a new span
  let newTodoTitleSpan = $.createElement("span");
  newTodoTitleSpan.innerHTML = newTodoValue;
  //    create a new i
  let newTrash = $.createElement("i");
  newTrash.className = "fas fa-trash mx-2";

  newTrash.addEventListener("click", function (event) {
    event.target.parentElement.remove();
  });

  //   append
  newTodoLi.append(newTodoTitleSpan, newTrash);

  todoList.append(newTodoLi);

  console.log(newTodoLi);
}

addTodoForm.addEventListener("submit", function (event) {
  event.preventDefault();
});

inputElem.addEventListener("keydown", function (event) {
  let newTodoValue = event.target.value.trim();
  // console.log(newTodoValue);
  // console.log(event);

  if (event.keyCode === 13) {
    if (newTodoValue) {
      inputElem.value = "";
      addNewTodo(newTodoValue);
    }
  }
});
