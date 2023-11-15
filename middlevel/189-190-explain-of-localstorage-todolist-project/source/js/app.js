const $ = document;
const inputElem = $.querySelector("#itemInput");
const addBtn = $.querySelector("#addButton");
const clearBtn = $.querySelector("#clearButton");
const todoListElem = $.querySelector("#todoList");

let todosArray = [];

function addNewTodo() {
  let newTodoTitle = inputElem.value;

  let newTodoObj = {
    id: todosArray.length + 1,
    title: newTodoTitle,
    complet: false,
  };
  todosArray.push(newTodoObj);
  console.log(todosArray);
  inputElem.value = "";

  setLocalStoreg(todosArray);
  todosGenerator(todosArray);

  inputElem.focus();
}

function setLocalStoreg(todosList) {
  localStorage.setItem("todo", JSON.stringify(todosList));
}

function todosGenerator(todosList) {
  let newTodoLiElem, newTodoLableElem, newTodoCompleteBtn, newTodoDeleteBtn;


  todoListElem.innerHTML=""

  todosList.forEach(function (todo) {
    console.log(todo);
    newTodoLiElem = $.createElement("li");
    newTodoLiElem.className = "completed well";

    newTodoLableElem = $.createElement("lable");
    newTodoLableElem.innerHTML = todo.title;

    newTodoCompleteBtn = $.createElement("button");
    newTodoCompleteBtn.className = "btn btn-success";
    newTodoCompleteBtn.innerHTML = "Complete";

    newTodoDeleteBtn = $.createElement("button");
    newTodoDeleteBtn.className = "btn btn-danger";
    newTodoDeleteBtn.innerHTML = "Delete";

    // new way
    newTodoDeleteBtn.setAttribute("onclick", 'removeTodo(' +todo.id+ ')')

    newTodoLiElem.append(
      newTodoLableElem,
      newTodoCompleteBtn,
      newTodoDeleteBtn
    );
    console.log(newTodoLiElem);

    todoListElem.append(newTodoLiElem);
  });
}

function removeTodo(){
  clg
}

function getLocalStorage() {
  let localStorageTodo = JSON.parse(localStorage.getItem("todos"));
  if (localStorageTodo) {
    todosArray = localStorageTodo;
  } else {
    todosArray = [];
  }
  todosGenerator(todosArray);
}
function clearTodos(){
  // todoListElem.innerHTML=""   its wrong 
  todosArray= [];
  todosGenerator(todosArray)
  // localStorage.clear();            //clear all of items that are in localStorage`
  localStorage.removeItem("todos");
}

addBtn.addEventListener("click", addNewTodo);
window.addEventListener("load", getLocalStorage);
clearBtn.addEventListener("click", clearTodos);

inputElem.addEventListener("keydown", function(e) {
  if (e.code==="Enter") {
    addNewTodo();
  }
})