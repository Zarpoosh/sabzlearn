var tasksArray = {
  ali: ["html", "css", "js"],
  amin: ["react", "vue", , "angular"],
  minoo: ["seo", "link building"],
  mohammad: ["admin", "context"],
};

var newTask = prompt("enter new task");
var employeeName = prompt("enter new employeeName");
tasksArray[employeeName].push(newTask);
console.log(tasksArray);
