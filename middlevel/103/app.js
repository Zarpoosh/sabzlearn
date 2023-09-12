let h1Elem = document.getElementById("title");

//گرفتن اتریبیوت
console.log(h1Elem.getAttribute("align"));
h1Elem.setAttribute("class", "js-text");

// giv attribute to one element
let h2Elem = document.getElementsByClassName("list-item");
console.log(h2Elem[0].setAttribute("id", "element"));
