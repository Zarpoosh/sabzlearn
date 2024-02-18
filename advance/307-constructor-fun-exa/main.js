// constructor function
// arrow function kمیشه به عنوان  contructor function استفاده کرد .

function User(userName, userage, userjobe){
    this.userName = userName;
    this.userage = userage;
    this.userjob = userjobe;

    this.getname=function(){
      return  this.userName
    }
    this.getage=function(){
        return this.userage
    }
    this.getjob=function(){
        return this.userjobe
    }

    this.setName=function(newName){
        this.userName = newName
    }
    this.setage=function(newage){
        this.userage = newage
    }
    this.setjob=function(newjob){
        this.userjobe = newjob
    }
}

let userminoo=new User("minioo", 20, "front end developer")

console.log(userminoo.userName)
console.log(userminoo.setage(65))