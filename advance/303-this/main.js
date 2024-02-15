//this  ==>doesent hae ine result

//! Event handling
function removelistItem(el) {
  el.remove();
  console.log(el);
}

//!
function sumNumbers() {
  let sum = 0;

  for (let arg of arguments) {
    sum += arg;
  }
  console.log("this is function", this);
  return sum;
}

console.log("sum: ", sumNumbers(1, 2, 3));

//!

let user = {
  id: 1,
  name: "minoo",
  age: 22,
  walk: function () {
    console.log("user walked! ");
  },
  showThis: function () {
    console.log(this);
  },
  setName:function(newName){
    this.name = newName;
  }, 
  setAge:function(newage){
    this.age = newage;
  }
};

user.walk();
user.setName("kimia");
user.setAge(20);
//TODO تو آبجکت اشاره میکنه به خود آبجکت
user.showThis();
console.log(user);
