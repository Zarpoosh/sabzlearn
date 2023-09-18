let ulElem = document.querySelector("ul");
let newLiItem = document.createElement("li");
newLiItem.innerHTML = "rpoducts";

let otherLiElem = document.createElement("li");
otherLiElem.innerHTML = "Users";


// first way to add element ti html
// ulElem.append(newLiItem);
// ulElem.append(otherLiElem);

// second way to add element ti html
ulElem.appendChild(newLiItem)
ulElem.appendChild(otherLiElem);

console.log(newLiItem);
console.log(ulElem);
