// // weakset

// let mySet = new Set();
// mySet.add("minoo");
// console.log("set:", mySet, mySet.size);

// //? weakset dont have size
// let myWealSet = new WeakSet();
// let fakeObject = {
//   data: "fake data",
// };
// myWealSet.add(fakeObject);
// console.log(myWealSet, myWealSet.size);
// //------------------------------------------------------

function FakeDate() {
  this.data = {
    data: "fake data",
  };
}
window.FakeDate = new FakeDate();
// console.log(window);
let mySet = new Set();

mySet.add(window.FakeDate)
delete window.FakeDate
console.log(window.FakeDate)
console.log(mySet);

