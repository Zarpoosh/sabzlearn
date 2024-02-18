//
// let userMinoo={
//     id:1,
//     name:"minoo", 
//     age:20,
//     city:"ardabil",
//     job:"frontend developer"
// }
// let userali={
//     id:1,
//     name:"ali", 
//     age:78,
//     city:"ardabil",
//     job:"frontend developer"
// }
// let userzahra={
//     id:1,
//     name:"zahra", 
//     age:54,
//     city:"ardabil",
//     job:"frontend developer"
// }
// let useramin={
//     id:1,
//     name:"amin", 
//     age:32,
//     city:"ardabil",
//     job:"frontend developer"
// }

//DRY ==> dont ...
//----------------------------------------------------------------
function Animal(){
    this.anme="dog";
    this.color="red";
    this.fly=false;
    this.foots=4
}
let dogAnimal=new Animal();
let catAnimal=new Animal();

console.log(dogAnimal)
console.log(catAnimal)

//----------------------------------------------------------------

function Person(personId, personname, personage, personjob){
    this.id=personId
    this.name=personname
    this.age=personage
    this.job=personjob
    this.type=persontpye
}

let userminoo=new Person(1, "minoo", 20, "front end developer", "owner");
let usermohammad=new Person(2, "mohammad", 31, "front end developer", "admin");
console.log(userminoo)
console.log(usermohammad)