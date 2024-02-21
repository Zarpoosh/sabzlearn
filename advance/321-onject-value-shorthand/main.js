//   object value shorthand ==>
// هرکدوم ا زپراپرتی های آبجکت مونو مقدار دهی کنیم

let id = 1;
let username = "minoo";
let age = 20;


//!  shorthand 
let user = {
  id, //id: id,
  username, //username: username,
  age, //age: age,
};

console.log(user);

///////////////////////////////////////////////

const userMaker=(firstName,lastName,age)=>{
    let newUser={
        firstName,
        lastName, 
        age
    }
    return newUser
}

let userMinoo=userMaker("minoo" , "zarpoosh", 20)
console.log(userMinoo)