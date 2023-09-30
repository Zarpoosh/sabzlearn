let ulElem = document.querySelector("ul");

function addNewLi() {
  let newTag = document.createElement("li");
  newTag.innerHTML = "product";
  let newTag2 = document.createElement("li");
  newTag2.innerHTML = "user";

  //  append :  append رشته هم میگیره / return نداره

  //   ulElem.append(newTag);
  //   ulElem.append("minoo")
  // ulElem.append(newTag,newTag2)

  //  appendchil :  ورودی appendchild حتما باید المنت html باشه رشته قبول نمیکنه  / return داره
  //   ulElem.appendChild(newTag);

  // wrong
  // ulElem.appendChild("minoo")
  // ulElem.appendChild(newTag , newTag2);

  //   console.log(newTag);

  
  let appendResult = ulElem.append(newTag);
  let appendResult2 = ulElem.appendChild(newTag);
  console.log(appendResult, appendResult2);
}
