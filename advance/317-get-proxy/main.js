// CRAD ==> proxy (get trap) || (in)
let user = {
  id: 1,
  firstname: "minoo",
  lastname: "zarpoosh",
  age: 20,
};

user = new Proxy(user, {
  //? باید ریترن کنی  
  get: function (target, property) {
    // alert("دیتا گرفته شد!");

    console.log("target ::", target);
    console.log("property ::", property);



    return  property in target ? target[property]  :"minicode"
  },
});
// console.log("user object:", user.phone);
// console.log("user proxy:", proxyUser.door); 
console.log("user proxy:", user.address); 


//---------------- in ----------
console.log("age" in user)