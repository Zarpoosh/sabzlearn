let $ = document;

const clickBtn = $.querySelector("button");
const modalParent = $.querySelector(".modal-parent");
const closeBtn = $.querySelector(".X");
const section = $.querySelector("section");

function showModal() {
  modalParent.style.display = "block";
  section.style.filter = "blur(10px)";
  clickBtn.blur();
}

function hideModal() {
  modalParent.style.display = "none";
  section.style.filter = "blur(0px)";
}

function hideModalEsc(event) {
  console.log(event);
  if (event.keyCode === 27) {
    modalParent.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}

clickBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
document.body.addEventListener("keyup", hideModalEsc);
