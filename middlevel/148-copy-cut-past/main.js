let editorElem = document.getElementById("editor");

function copyHandler(event) {
  event.preventDefault();
  console.log("copy", event);
}
function cutHandler(event) {
  event.preventDefault();
  console.log("cut", event);
}
function pasteHandler(event) {
  event.preventDefault();
  console.log("paste", event);
}

editorElem.addEventListener("copy", copyHandler);
editorElem.addEventListener("paste", pasteHandler);
editorElem.addEventListener("cut", cutHandler);
