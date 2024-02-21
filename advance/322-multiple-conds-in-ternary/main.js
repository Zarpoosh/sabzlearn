//

let score=3

// let userStatus= score<18 ?"faild" :"pass"

//!  خیلی عالییییییههههههههههه :)

let userStatus= score>0 && score<=5 ?"D" 
: score>5 && score<=10 ?"C" 
:  score>10 && score<=15 ?"B" 
:  score>15 && score<=20 ?"A"
: "Not valid !"


console.log(userStatus)