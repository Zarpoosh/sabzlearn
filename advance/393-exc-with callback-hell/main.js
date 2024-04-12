const userLogin = (username, password, callback) => {
  setTimeout(() => {
    callback({
      username: username,
      password: password,
      email: "mzar67839@mail.com",
    });
  }, 4000);
};
const userCourses=(username ,callback)=>{
  setTimeout(() => {
    callback([
      {id:1, title:"js course" , price:3_000_000},
      {id:1, title:"js course" , price:3_000_000},
      
      
    ])
  }, 3000);
}

const mainVideoInfo=(courseTitle, callback)=>{
  setTimeout(() => {
    callback({Pid:1, title:"js course" , price:2000})
  }, 2000);
}

console.log("سایت لود ش !");

const loginInfos = userLogin("minoo zarpoosh", "86765", (userObject) => {
  console.log("کاربر لاگین شد !", userObject);
  userCourses(userObject.username, (userAllCourses)=>{
    console.log("user courses")

    mainVideoInfo(userAllCourses[1].title , (mainInfos)=>{
      console.log("main course infos : ",mainInfos)
    })
  })
});

console.log("logined", loginInfos);

console.log("کاربر با موفقیت لاگین شد ");
