
const $=document;

const firstname=$.querySelector(".firstname")
const lastname=$.querySelector(".lastname")
const password=$.querySelector(".password")
const form=$.querySelector("#form")


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("submit");

    let userData={
        firstname:firstname.value,
        lastname:lastname.value,
        password:password.value,
    }

    //POST
    fetch("https://sabzlarn-default-rtdb.firebaseio.com/users.json", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{
        console.log("successfully :))", res)
        clearData()
    })
    .catch(err=>console.log("unsccessfully :((", err))

  
})

function clearData() {
    firstname.value=""
    lastname.value=""
    password.value=""
}