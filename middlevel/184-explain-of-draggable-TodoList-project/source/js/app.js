const $ = document;

const addBtn = $.querySelector("#add_btn");
const todo = $.querySelector(".todo");
const inputSearch = $.querySelector("#todo_input");
const inputBtn = $.querySelector("#todo_submit");
const no_status = $.querySelector("#no_status");
const closeBtn = $.querySelector(".close");
const closeModalBtn = $.querySelector(".close-modal");
const Modal = $.querySelector(".modal");

function close(event) {
  console.log("clicked");
  event.target.parentElement.remove();
}
function closeModal() {
  console.log("close modal");
  Modal.style.display = "none";
}

function showModal() {
  Modal.style.display = "block";
}

inputBtn.addEventListener("click", function () {
  if (inputSearch.value) {
    // new div
    let newDiv = $.createElement("div");
    newDiv.className = "todo";
    let text = inputSearch.value;
    newDiv.innerHTML = text;
    // console.log(text)
    inputSearch.value = "";

    // create new closebtn
    let newBtn = $.createElement("span");
    newBtn.classList = "close";
    newBtn.innerHTML = "&times;";
    // console.log(newBtn)
    newBtn.addEventListener("click", close);

    newDiv.append(newBtn);
    console.log(newDiv);
    no_status.append(newDiv);
  } else {
    alert("please enter the value");
  }
});
closeModalBtn.addEventListener("click", closeModal);
closeBtn.addEventListener("click", close);
addBtn.addEventListener("click", showModal);
