// CRAD ==> proxy (set trap) || (in)
let user = {
  id: 1,
  firstname: "minoo",
  lastname: "zarpoosh",
  age: 20,
  type:"user"
};

user = new Proxy(user, {
  //? باید ریترن کنی
  get: function (target, property) {
    // alert("دیتا گرفته شد!");

    console.log("target ::", target);
    console.log("property ::", property);

    return property in target ? target[property] : "minicode";
  },
  set: function (target, property, value) {
    console.log("target :", target);
    console.log("property :", property);
    console.log("value :", value);

    if (property === "age" && value < 18) {
      value = 18;
    }
    if (property === "type" && ["user", "admin", "student", "teacher"].includes(value.toLowerCase())){
      target[property] = value;  
    }else{
      throw new Error("this value is not valid :((")
    }

    target[property] = value;
  },
});

// user.age = 412;
// console.log(user.age);

// user.phone = "122243334";
// console.log(user.phone);
//---------------------- ---------
user.type="ADMIN"
console.log(user.type);