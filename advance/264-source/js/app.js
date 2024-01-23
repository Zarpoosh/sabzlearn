const $ = document;
const inputField = $.querySelector("#input-field");
const addBtn = $.querySelector("#btn-save");
const deleteBtn = $.querySelector("#btn-delete");
const card = $.querySelector(".card");
const cardText = $.querySelector(".card-text");
const container = $.querySelector("#listed");
const colorBox = $.querySelector(".color-box");

container.addEventListener("click", function (e) {
  console.log(e.target.tagName);

  if (e.target.tagName == "P") {
    e.target.parentElement.remove();
  }
});
// ////////////////////color box///////////////////////////
// colorBox.forEach(function() {
//     colorBox.addEventListener("click" , function(event){
//         let mainColor=event.target.style.backgroundColor
//         inputField.style.backgroundColor=mainColor
//     })
// });

function generateNewNote() {
  //new div
  let newNoteDivElem = $.createElement("div");
  newNoteDivElem.className = "card shadow-sm rounded";
  let inputBg = inputField.style.backgroundColor;
  newNoteDivElem.style.backgroundColor = inputBg;
  //! newNoteDivElem.addEventListener("click" ,removeNote)

  // new p tag
  let newNotePElem = $.createElement("p");
  newNotePElem.innerHTML = inputField.value;
  newNotePElem.className = "card-text p-3";

  // append p in div
  newNoteDivElem.append(newNotePElem);
  console.log(newNoteDivElem);
  container.append(newNoteDivElem);

  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
}

//! function removeNote(event){
//!     event.target.parentElement.remove()
//! }

inputField.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    if (inputField.value) {
      generateNewNote();
    } else {
      alert("please enter your note");
    }
  }
});
deleteBtn.addEventListener("click", function () {
  console.log("deleted");
  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
});

addBtn.addEventListener("click", function (event) {
  if (inputField.value) {
    generateNewNote();
  } else {
    alert("please enter your note");
  }
});
