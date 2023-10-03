let h1Elem = document.getElementById("title");
let userNameInput = document.getElementById("input");

// get attribiut :دسترسی به تمام اتریبیوت ها
// console.log(h1Elem.getAttribute("class"));
///////////////////////////////////////////////////
// . : دسترسی به اتریبیوت های پیشفرض
// console.log(h1Elem.className);
// console.log(userNameInput.placeholder);

///////////////////////////////////////////////////

userNameInput.userType = "admin";    //its a property  not attribute
console.log(userNameInput.userType);
console.log(userNameInput.getAttribute("userType"));  // دسترسی به تمام اتریبیوت های صفحه html
