// && (and)  || (or)

//--------------------------------------   AND -------------------------------------------------------------
let userAge = 13;
// if(userAge>18){
//     alert("you login succesfully!")
// }

// userAge >18 && alert("you login succesfully!")

// userAge >18 ? alert("login successfully! :)") : alert("surry you cant login ! :(")

//-------------------------------------------  OR --------------------------------------------------------

//------>false     true پس دومی رو اجرا میکنه
// userAge !==13 || alert("hello! :)")

//---->true پس همین اجرا میکنه و سراغ بعدی نمیره
userAge === 13 || alert("hello! :)");

let usrType = "admin";
let userToken = usrType || "user";

console.log(userToken);

//با اولین فالس میشه فالس
//? true && true ==>true
//? false && false ==> false
//? false && true ==> false
//? true && false ==> false

// با اولین ترو میشه ترو
//* true || true ==>true
//* false || false ==> false
//* false || true ==> true
//* true || false ==> true
