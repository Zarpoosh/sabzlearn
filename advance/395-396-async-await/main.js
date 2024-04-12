const userLogin = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        username: username,
        password: password,
        email: "mzar67839@mail.com",
      });
    }, 4000);
  });
};
const userCourses = (username) => {
  console.log("username: ", username)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "js course", price: 3_000_000 },
        { id: 1, title: "js course", price: 3_000_000 },
      ]);
    }, 3000);
  });
};

const mainCoursesInfo = (courseTitle) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ Pid: 1, title: "js course", price: 2000 });
    }, 2000);
  });
};

console.log("سایت لود ش !");

// const loginInfos = userLogin("minoo zarpoosh", "86765", (userObject) => {
//   console.log("کاربر لاگین شد !", userObject);
//   userCourses(userObject.username, (userAllCourses) => {
//     console.log("user courses");

//     mainVideoInfo(userAllCourses[1].title, (mainInfos) => {
//       console.log("main course infos : ", mainInfos);
//     });
//   });
// });


// userLogin()
// .then(userObject => userCourses(userObject.username))
// .then(userAllCourses=>mainCoursesInfo(userAllCourses[1].title))
// .then(mainInfos=>console.log(mainInfos))

// console.log("logined", loginInfos);


async function runUserCodes(params) {
  
try{
  let userInfos=await userLogin("minoo zarpoosh" ,0909)
  let userAllCourses=await userCourses(userInfos)
  let mainInfos=await mainCoursesInfo(userAllCourses[1].title)
  console.log(mainInfos)
}catch(err){
  console.log("error....")
  alert("errror...")
}
}
runUserCodes()
console.log("کاربر با موفقیت لاگین شد ");

