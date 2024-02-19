// Entries 



let person={
    id:1,
    firstName:"minoo", 
    lastName:"zarpoosh",
    age:20,
    job:"front end developer"
}

//! its not iterable
// for(let userrpop of person){
//     //Codes...
// }

console.log(person);
//--------------------------------------

console.log(Object.entries(person));
let entriesPerson=Object.entries(person)
for(let userrpop of entriesPerson){
    //Codes...
    console.log(`${userrpop[0]} : ${userrpop[1]}`);
}


//  minicode6348@gmail.com
// 72bSDncl6#&f