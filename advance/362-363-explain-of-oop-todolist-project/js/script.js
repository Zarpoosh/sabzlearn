//  oop  ==> object oriented programming

class Task {
  constructor(title) {
    this.title = title;
    this.isCompleted = false;
  }
}

class TodoList {
  constructor(todosContainer) {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todosContainer = this.todosContainer;
    this.addBtn = document.querySelector("#addButton");
    this.clearBtn = document.querySelector("#clearButton");
    this.todoInput = document.querySelector("input");
    this.render(this.todos);
  }
  
  render() {
    console.log("do");

    this.todosContainer.innerHTML = "";

    this.addBtn.addEventListener("click", () => {
      this.addNewTodo(this.todoInput.value);
    });

    this.clearBtn.addEventListener("click", () => {
      this.clearTodos();
    });

    this.addTodosToDom();
    this.saveTodoIntoLocalStorage();
  }

  addTodosToDom() {
    console.log("anjam shod!");
  }
  this.todosContainer.innerHTML = ''


  addNewTodo(newTodoTitle) {
    console.log("newtodo title ==>", newTodoTitle);
  }

  clearTodos() {
    console.log("pakshod!");
  }
  saveTodoIntoLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

new TodoList(document.querySelector("#todoList"));
