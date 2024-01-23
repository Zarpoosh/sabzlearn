// id
let h1Elem = document.getElementById("title");
console.log(h1Elem);

//class  => giv us array
let liElems = document.getElementsByClassName("list-item");
console.log(liElems[2]);

// tag name
let Items = document.getElementsByTagName("li");
console.log(Items);

// query selector  =>  first element
let firstListItem = document.querySelector(".list-item");
console.log(firstListItem);

// all elements
let elements = document.querySelectorAll(".list-item");
console.log(elements);
