let user={
  id:1,
  name:"minoo", 
  lastname:"zarpoosh",
  age:20
}

//CRAD ==> create , read , update , delete  //? Proxy
// user.job="web developer"
// console.log(user.name)
// console.log(user)


//--------------------------------------

let userProxy=new Proxy(user,{

} )
console.log("user :",user.name)
console.log("userProxy :",user.name)

console.log("user :",user.email)  //undefined
