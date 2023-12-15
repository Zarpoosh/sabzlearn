// just for delete the obj items

let user={
    id:1,
    name:"mohammad",
    pass:"1234",
    age:30
}
console.log("before delete :" ,user)
// its a boolean
console.log("delete result : ",delete user.name)
console.log("after delete:",user);


// ----------------------------------------------


// never use (delete) for delete the array items.
// let score=[10,20,30,50,60]

// delete score[3]
// console.log("before delete :" ,score)

// console.log("after delete:",score);
