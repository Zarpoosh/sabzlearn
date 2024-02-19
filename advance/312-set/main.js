//TODO set ==> odesent have duplicate



let user={
    id:1,
    name:"minoo",
    age:20
}
console.log(user);

//-----------------------   --------------------------------

let numbers=new Set()

numbers.add(23)
numbers.add(54)
numbers.add(23)
numbers.add(98)
numbers.add(245)
numbers.add(78)
console.log("before delete : ",numbers , '&& size ==>', numbers.size); // before delete
//------------------
// numbers.delete(23)
// console.log("after delete : ",numbers , '&& size ==>', numbers.size);  //after delete
// //=------------------
// numbers.clear()
// console.log("after clear : ",numbers , '&& size ==>', numbers.size);
// //----------------
// console.log(numbers.has(86));
// //-----------------------------------------


//! just foreach  & for of 
numbers.forEach(num=>console.log(num))
for (let number of numbers){
    console.log(number);
}

//?---------------------------------------------------------------------------

let scours=[
    12,
    23,
    45,
    12,
    56,
    67
    
]
let setScores=new Set(scours)
console.log("scores array : " , scours);
console.log("setscores array : " , setScores , "typeof : ", typeof(setScores));
let arrayNumber=[...setScores]
console.log(arrayNumber);