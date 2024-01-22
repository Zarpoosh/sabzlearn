const todoInputElement = document.querySelector("#todo");
const todoList = document.querySelector(".todo-list");


function trim(val) {
    return val.trim();
}

function tolowerCase(val){
    return val.toLowerCase();
}



function insertToLi(todoval) {
    return '<li>'+ todoval +'</li>'   
}
function addTodo(e) {
  // console.log("keypress")
  if (e.keyCode === 13) {
    // console.log("enter")
    todoList.insertAdjacentHTML("beforeend",insertToLi(tolowerCase(trim(todoInputElement.value))));
    todoInputElement.value = "";
  }
}
todoInputElement.addEventListener("keypress", addTodo);
