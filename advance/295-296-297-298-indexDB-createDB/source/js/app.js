// index DB  ==> CRUD ==> create / read / update / delete
//تو ریکت از ریداکس ایتفاده میشه و اطلاعات تو استور های ریداکس ذخیره میشه
let $ = document;
const registerForm = $.querySelector(".register-form");
const nameInput = $.querySelector(".name-input");
const passwordInput = $.querySelector(".password-input");
const emailInput = $.querySelector(".email-input");
const usersTableElem = $.querySelector("table");

let db = null;
let objectStore = null;

window.addEventListener("load", () => {
  // console.log("loader")
  let dataBaseOpenRequest = indexedDB.open("sabzlern", 11);

  //TODO   اگه دیتا بیس با موفقیت ساخته نشه
  dataBaseOpenRequest.addEventListener("error", (err) => {
    console.warn("Error loading", err);
  });

  //TODO  اگه دیتا بیس با موفقیت ساخته بشه
  dataBaseOpenRequest.addEventListener("success", (event) => {
    db = event.target.result;
    getUsers()
    console.log("success", event.target.result);
  });

  //TODO   یه بار زمان ساخته شدن دیتا بیس اجرا میشه //// موقع تغییر نسخه دیتا بیس
  dataBaseOpenRequest.addEventListener("upgradeneeded", (event) => {
    db = event.target.result;
    // console.log("upgrade", event);
    console.log("old v: ", event.oldVersion);
    console.log("newVersion:", event.newVersion);

    if (!db.objectStoreNames.contains("users")) {
      objectStore = db.createObjectStore("users", {
        keyPath: "userId",
      });
    }

    if (db.objectStoreNames.contains("courses")) {
      db.deleteObjectStore("courses");
    }
    // db.createObjectStore("courses");
    console.log("upgrae:", db.objectStoreNames);
  });
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let newUser = {
    userId: Math.floor(Math.random() * 9999),
    name: nameInput.value,
    password: passwordInput.value,
    email: emailInput.value,
  };

  let tx=createTX("users", "readwrite");
 
  tx.addEventListener("complete", (event) => {
    console.warn("txsuccess", event);
  });

  let store = tx.objectStore("users");
  let request = store.add(newUser);

  request.addEventListener("error", (err) => {
    console.warn("requesterror", err);
  });

  request.addEventListener("success", (event) => {
    console.warn("requestsuccess", event);
    clearInput();

    getUsers()
  });
});
function clearInput() {
  nameInput.value = "";
  passwordInput.value = "";
  emailInput.value = "";
}

function getUsers() {
 let tx=createTX("users", "readonly");

  tx.addEventListener("complete", (event) => {
    console.warn("txsuccess", event);
  });

  let store = tx.objectStore("users");
  let request = store.getAll();

  request.addEventListener("error", (err) => {
    console.warn("get request error", err);
  });

  request.addEventListener("success", (event) => {
    console.warn("Get request success", event);

    let allUsers=event.target.result

    usersTableElem.innerHTML=` <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>password</td>
                                <td>email</td>
                              </tr>`
    usersTableElem.innerHTML+= allUsers.map(user=>{
      return `<tr>
                <th>${user.userId}</th>
                <th>${user.name}</th>
                <th>${user.password}</th>
                <th>${user.email}</th>
            <tr>`
    }).join("")
    console.log(userTemplateArray)
  });
}

function createTX(storename , mode){
  let tx = db.transaction(storename,  mode);

  tx.addEventListener("error", (err) => {
    console.warn("txerror", err);
  });

  return tx
}

//?  DRY  ==> Don't Repeat You'r self!