let h1Elem = document.getElementById("title");
let userNameInput = document.getElementById("input");

console.log(userNameInput.hasAttribute("placeholder")); //is there this attribute   //boolean

function removeAttributeHandler() {
  //   let result = userNameInput.removeAttribute("placeholder");  //void ==>dont have result
  //   console.log(result);
  ////////////////////////////////
  userNameInput.removeAttribute("value");
}
