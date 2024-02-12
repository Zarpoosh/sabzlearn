// index DB  ==> CRUD ==> create / read / update / delete

let db = null;
let objectStore = null;

window.addEventListener("load", () => {
  // console.log("loader")
  let dataBaseOpenRequest = indexedDB.open("sabzlern", 9);

  //TODO   اگه دیتا بیس با موفقیت ساخته نشه
  dataBaseOpenRequest.addEventListener("error", (err) => {
    console.warn("Error loading", err);
  });

  //TODO  اگه دیتا بیس با موفقیت ساخته بشه
  dataBaseOpenRequest.addEventListener("success", (event) => {
    console.log("success", event.target.result);
  });

  //TODO   یه بار زمان ساخته شدن دیتا بیس اجرا میشه //// موقع تغییر نسخه دیتا بیس
  dataBaseOpenRequest.addEventListener("upgradeneeded", (event) => {
    db = event.target.result;
    // console.log("upgrade", event);
    console.log("old v: ", event.oldVersion);
    console.log("newVersion:", event.newVersion);

    if (!db.objectStoreNames.contains("users")) {
      objectStore = db.createObjectStore("users");
    }

    if (db.objectStoreNames.contains("courses")) {
      db.deleteObjectStore("courses");
    }
    // db.createObjectStore("courses");
    console.log("upgrae:", db.objectStoreNames);
  });
});
