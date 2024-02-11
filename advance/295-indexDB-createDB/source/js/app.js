// index DB  ==> CRUD ==> create / read / update / delete
window.addEventListener("load", () => {
  // console.log("loader")
  let dataBaseOpenRequest = indexedDB.open("sabzlern", 3);

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
    // console.log("upgrade", event);
    console.log("old v: ", event.oldVersion);
    console.log("upgrae:", event);
    console.log("newVersion:", event.newVersion);
  });
});
