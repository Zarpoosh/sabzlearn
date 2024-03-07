const $ = document

const firstname = $.querySelector('.firstname')
const lastname = $.querySelector('.lastname')
const password = $.querySelector('.password')
const button = $.querySelector('button')

button.addEventListener("click", (e)=>{
    e.preventDefault()


    let userData={
        firstname:firstname.value,
        lastname:lastname.value,
        password:password.value
    }
    fetch("http://localhost/3000/api/users", {
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(userData)
    })
    .then(res=>console.log(res))
})




//l;ocalhost : 3000/api/users