// todo list applicable

var listTodos = [
  { id: 1, name: "javascript", isDoing: false },
  { id: 2, name: "react", isDoing: false },
  { id: 3, name: "python", isDoing: false },
];

var menu = Number(
  prompt("choose one optin : \n 1-add todo: \n 2-remove todo \n 3-do")
);

if (menu == 1) {
  // add task to list
  var addtodo = prompt("enter your task :");
  var newtask = {
    id: listTodos.length + 1,
    name: addtodo,
    isDoing: false,
  };
  listTodos.push(newtask);

} else if (menu == 2) {
    // removeTask from list
  var taskName = prompt("enter your task :");
  var removeTask = listTodos.findIndex(function (task) {
    return task.name === taskName;
  });
  listTodos.splice(removeTask, 1);

} else if (menu == 3) {
    // change isdoing
  var editTodoName = prompt("enter your task name :");
  listTodos.forEach(function (task) {
    if (task.name === editTodoName) {
      task.isDoing = true;
    }
  });
  console.log(listTodos);

} else {
  alert("enter right option");
}
