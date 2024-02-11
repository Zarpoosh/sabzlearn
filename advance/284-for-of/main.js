let numbers = [1, 2, 3, 4];
let username = "minoo zarpoosh";
let user = {
  id: 1,
  name: "minoo",
  agae: 20,
};

// for (let char of username) {
//     console.log(char)
// }

// // ! object is not itreable
// for (let property of user) {
//     console.log(char)
// }

//------------------------------------------------
// function sum() {
//   //   console.log(arguments);
//   // arguments.forEach()   //! arguments.forEach is not a function at sum

//   let allArgSum = 0;

//   //   * use for of
//   for (let arg of arguments) {
//     allArgSum += arg;
//   }
//   return allArgSum;
// }

// console.log(sum(1, 2, 3, 4));

// /////////////////////////////////////////////////////////////////////

let liElem = document.getElementsByTagName("li");

// liElem.forEch()   //! its not itreable شبه  آرایه است

for (let li of liElem) {
  console.log(li);
  li.addEventListener("click", (e) => e.target.remove());
}
console.log(liElem);


///////////////////////////////////////////////////////


let divElem = document.getElementsByTagName("div");

for (let div of divElem) {
  div.addEventListener("click", function () {
    for (let otherDiv of divElem) {
      otherDiv.style.backgroundColor = "white";
    }
    this.style.backgroundColor = " green";
  });
}
