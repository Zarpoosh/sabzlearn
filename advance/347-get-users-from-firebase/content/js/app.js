
const userContainer=document.querySelector("#wrap-users")
const deleteModal=document.querySelector("#delete-modal")

window.addEventListener("load", ()=>{
    // console.log("load");

    fetch("https://sabzlarn-default-rtdb.firebaseio.com/user.json")
    .then(res=>res.json())
    .then(data=>{
        let usersData=Object.entries(data)
        usersData.forEach(user=>{
            console.log(user);

            userContainer.insertAdjacentHTML("beforeend", `
            <div class="user">
            <div class="user-profile-wrap">
                <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                <div class="user-profile-description">
                    <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}<span class="user-age">18</span> </h1>
                    <h3 class="user-explanations">Pass: ${user[1].password}</h3>
                </div>
            </div>
            <div class="btn-groups-column">
                <button class="delete-user-btn" onclick="openDeleteModal()">delete</button>
                <button class="edit-user-btn">edit</button>
            </div>
            </div>
            `)
        })
    })
    // .catch(err=>console.log(err))
})



function openDeleteModal() {
    deleteModal.classList.add("visible")
}

