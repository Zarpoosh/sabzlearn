// let port=""      //  "",0 , NaN ,...==>falsy value ...==> truthy value 
// let developingPort=port  || 3003

// console.log(developingPort);

//----- ------------------------------- nulish operator  (null , undefined ,...  از اینا رد میشه اگه به چیزی برسه از اینا نباشه ) ----------------------------------
let port=null
let testPort=0
//----------------> null
let developingPort=(testPort || port)  ?? 3003
console.log(developingPort);