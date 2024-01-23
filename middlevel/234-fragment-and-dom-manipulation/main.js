let usetsList = document.querySelector("#user");

// به ازای هر ایتم میاد با مرورگر ارتباط پیدا میکنه و باعث میشه تو پروژه های بزرگتر باگ ایجاد بشه.
// let usersArray=[
//     "minoo" , "mohammad", "ali", "zarpoosh" ,"rahgoshayi"
// ]
// let newUserLi=null
// usersArray.forEach(function(user){
//     newUserLi=document.createElement("li")
//     newUserLi.innerHTML=user
//     usetsList.append(newUserLi)
// })

////////////////////////////////////////////////////////////
// برای سایت های بزرگ  که قراره هزاران داده بفرسته به مرورگر این بهینه ترین  هستش
// new way

let usersArray = ["minoo", "mohammad", "ali", "zarpoosh", "rahgoshayi"];
let newUserLi = null;
let usersFragmnet = document.createDocumentFragment();

usersArray.forEach(function (user) {
  newUserLi = document.createElement("li");
  newUserLi.innerHTML = user;
  usersFragmnet.appendChild(newUserLi);
});
newUserLi.appendChild(usersFragmnet);
