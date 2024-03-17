const $ = document

const firstname = $.querySelector('.firstname')
const lastname = $.querySelector('.lastname')
const password = $.querySelector('.password')
const form = $.querySelector('#form')

form.addEventListener('submit', (e) => {

    e.preventDefault()
    
    let userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value,
    }

    // POST Request

    fetch('https://new-pro-9ac4d-default-rtdb.firebaseio.com/users.json', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => {
        console.log(res);
        clearData()
    })
    .catch(err => console.log(err))

})

function clearData () {

    firstname.value = ''
    lastname.value = ''
    password.value = ''

}