const userContainer = document.querySelector("#wrap-users");
const deleteModal = document.querySelector("#delete-modal");
const editModal = document.querySelector("#edit-modal");


let userID = null;

window.addEventListener("load", () => {
  getAllUsers();
});
// console.log("load");

function getAllUsers() {
  fetch("https://sabzlarn-default-rtdb.firebaseio.com/user.json")
    .then((res) => res.json())
    .then((data) => {
        let usersData = Object.entries(data);
        userContainer.innerHTML = "";
      usersData.forEach((user) => {
        console.log(user);

        userContainer.insertAdjacentHTML(
          "beforeend",
          `
            <div class="user">
            <div class="user-profile-wrap">
                <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                <div class="user-profile-description">
                    <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}<span class="user-age">18</span> </h1>
                    <h3 class="user-explanations">Pass: ${user[1].password}</h3>
                </div>
            </div>
            <div class="btn-groups-column">
                <button class="delete-user-btn" onclick="openDeleteModal(${user[0]})">delete</button>
                <button class="edit-user-btn" onclick="openeditModal(${user[0]})">edit</button>
            </div>
            </div>
            `
        );
      });
    });
  // .catch(err=>console.log(err))
}

function openDeleteModal() {
  userID = id;
  console.log(userID);
  deleteModal.classList.add("visible");
}
function openeditModal() {
  userID = id;
  console.log(userID);
  deleteModal.classList.add("visible");
}

function closeeditModal() {
  deleteModal.classList.remove("visible");
}
function closeDeleteModal() {
  deleteModal.classList.remove("visible");
}
async function updateUser(){



  closeeditModal()
}

async function deleteUser() {
  //uesr remove
  await fetch(
    `https://sabzlarn-default-rtdb.firebaseio.com/users./${userID}/json`,
    {
      method: "DELETE",
    }
  ).then((res) => {
    console.log(res);
    getAllUsers();
    closeDeleteModal();
  });
}
