const $=document;
const inputElem=$.querySelector("#itemInput")
const addBtn=$.querySelector("#addButton")
const clearBtn=$.querySelector("#clearButton")
const todoListElem=$.querySelector("#todoList")

let todosArray=[]

function addNewTodo(){
  let newTodoTitle=inputElem.value

  let newTodoObj={
    id:todosArray.length+1,
    title:newTodoTitle,
    complet:false
  }
  todosArray.push(newTodoObj)
  console.log(todosArray)
  inputElem.value=""

  setLocalStoreg(todosArray)
  todosGenerator(todosArray)
}


function setLocalStoreg(todosList){
  localStorage.setItem("todo",  JSON.stringify(todosList))
}

function todosGenerator(todosList) {
  let newTodoLiElem , newTodoLableElem, newTodoCompleteBtn,newTodoDeleteBtn 

  todosList.forEach(function(todo) {
    console.log(todo)
    newTodoLiElem=$.createElement("li")
    newTodoLiElem.className="completed well"

    newTodoLableElem=$.createElement("lable")
    newTodoLableElem.innerHTML=todo.title

    newTodoCompleteBtn=$.createElement("button")
    newTodoCompleteBtn.className="btn btn-success"
    newTodoCompleteBtn.innerHTML="Complete"

    newTodoDeleteBtn=$.createElement("button")
    newTodoDeleteBtn.className="btn btn-danger"
    newTodoDeleteBtn.innerHTML="Delete"


    newTodoLiElem.append(newTodoLableElem, newTodoCompleteBtn,newTodoDeleteBtn)
    console.log(newTodoLiElem)

    todoListElem.append(newTodoLiElem)
  });
}
addBtn.addEventListener("click",addNewTodo)

window.onload= function(){
  let localStorageTodo=localStorage.getItem()
  
}