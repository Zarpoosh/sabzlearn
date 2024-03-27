//  oop  ==> object oriented programming

class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
}

class TodoList {
  constructor(todosContainer) {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todosContainer = this.todosContainer;
    this.addBtn = document.querySelector("#addButton");
    this.clear = document.querySelector("#clearButton");
    this.todoInput = document.querySelector("input");
    this.render(this.todos);
  }
}
