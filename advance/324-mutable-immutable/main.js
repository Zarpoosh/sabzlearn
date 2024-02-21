//mutable ="قابلیت تغییر داده شدن" & immutable="تغییر داده نشدن"

//? deep copy  & shallow copy

//reasigned
let numberOne = 20;
numberOne = 10; //re-asign مقدار دهی مجدد 

let login=false
login=true    //re-asign مقدار دهی مجدد 

console.log(numberOne);
console.log(login);



////////////////////////////////////////////////////////////////
// mutated

let user1={
  id:1,
  name:"minoo",
  age:20
}
let user2=user1
user2.name="mohammad"

console.log(user1);
console.log(user2);

////////////////////////////////////////////////////////////////

let names=["minoo" ,"mohammad", "zarpoosh" , "rahgoshay"]


//!  دوباره مقدار دهی شد و دیگه به اولی دسترسی نخاوهم داشت
// names=names.filter(name=>name.length>5)      //* mutablity
// let filterdNames=names.filter(name=>name.length>5)    //* immutibility  بهتره از این استفاده کنمیم

// names.pop()

// console.log(names)
// console.log(filterdNames)


// [...names].reverse().forEach(name => console.log(name));      // names.reverse().forEach(name => console.log(name));
// console.log(names)
// [...names].reverse().forEach(name => console.log(name));


/////////////////////////////////////////////////////
names.slice().reverse().forEach(name => console.log(name));      // names.reverse().forEach(name => console.log(name));
console.log(names)
names.slice().reverse().forEach(name => console.log(name));