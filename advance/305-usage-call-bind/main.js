//call  ,apply , bind


let user={
    id:1,
    name: 'minoo',
    age:20,
    walk:function(){
        console.log(this.name + " is walked.");
    },
    // aboutuser:function(){
    //     console.log("this in about user : ",this)   // اشاره به خود آبجکت
    //    setTimeout( function(){
    //     console.log("this in setTimeout :",this)
    //     console.log(this.name +" is " + this.age, " years old")  // خارج از محدوده آبجکت 
    //    },bind(user), 3000)
    // }

     aboutuser:()=>{
        console.log("this in about user : ",this)   // اشاره به خود آبجکت
       setTimeout( function(){
        console.log("this in setTimeout :",this)
        console.log(this.name +" is " + this.age, " years old")  // خارج از محدوده آبجکت 
       }, 3000)
    }
}


let user2={
    id:2,
    name: 'kimia',
    age:18,
    // walk:function(){
    //     console.log(this.name + " is walked.");
    // }
}

user.walk();
user.aboutuser();
//----------------------------------------------------------------
user.walk.call(user2)   //! user2.walk();
// user.aboutuser.call(user2)
// user.aboutuser.apply(user2)

//DRY ==> dont ...