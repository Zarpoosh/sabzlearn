// Es6- Class ==>(getter / setter / extends ... )

// !یه تابع دیفالت به اسمconstructorداره  .به محض ایجاد شی جدید اجرا میشه .
class Person {
  constructor(username, userjob, userage, useraddress) {
    console.log("ایجاد شد!-------->", username, userjob, userage, useraddress);

    //*باید اینها رو برای مقادیر کلاس ست کنیم
    this.name = username;
    this.job = userjob;
    this.age = userage;
    this.address = useraddress;
  }

  startDev() {
    console.log(`${this.name} start developing !`);
  }

  static removeUser() {
    //!دسترسی مستقیم به متد
    console.log("removed !");
  }

  getAge() {
    return this.age;
  }
}

//TODO========>>> inheritanceارث بری ==>extends

class Professor extends Person {
  constructor(
    username,
    userjob,
    userage,
    useraddress,
    userlessone,
    yearsofjob
  ) {
    // this.name = username;
    // this.job = userjob;
    // this.age = userage;
    // this.address = useraddress;

    super(username, userjob, userage, useraddress);
    this.name = username;
    this.lessone = userlessone;
    this.years = yearsofjob;

    startDev = () => {
      console.log(super.getAge());
      console.log(`${this.name} start teaching !`);
    };
  }
}

let prefossorMinoo = new Professor(
  "minoo",
  "fronenddeveloper",
  20,
  "ardabil",
  "programming",
  2
);
console.log("========================================");
console.log(prefossorMinoo);
console.log("========================================");

let personalMinoo = new Person("minoo", "developer", 20, "ardabil"); //call فراخوانی
let personalMohammad = new Person("mohammad", "developer", 32, "isfahan"); //call فراخوانی

console.log(personalMinoo);
console.log(personalMohammad);
console.log(personalMohammad.job);
//----------------------------------------
personalMinoo.startDev();
console.log(Person.startDev()); //!  its wrong.نمیتونم قبل ساختن یه شی به متد هاش دسترسی داشته باشیم
//-------------------------------------------------------

console.log(personalMohammad.removeUser());


