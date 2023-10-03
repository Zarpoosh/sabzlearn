let btn = document.getElementById("btn");

function showLog() {
  console.log("object");
}
// btn.addEventListener("click", showLog);
btn.onclick = showLog;
