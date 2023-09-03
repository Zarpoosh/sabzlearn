// forgetting password task

var userData = [
  { id: 1, userame: "minoo", passwrd: "qwdefd", email: "kjhkjs2@gmail.com" },
  { id: 2, userame: "ali", passwrd: "fgfbv", email: "mcnyb@gmail.com" },
  { id: 3, userame: "maryam", passwrd: "dcdcd", email: "ijsnbds@gmail.com" },
  { id: 4, userame: "", passwrd: "gbgb", email: "tgjssn@gmail.com" },
  { id: 5, userame: "kimia", passwrd: "gnfrg", email: "jbjx@gmail.com" },
  { id: 6, userame: "mohammad", passwrd: "hjsxd", email: "luhgt@gmail.com" },
];

var userName = prompt("enter your userName");

var search = userData.find(function (user) {
  return user.userame == userName;
});

if (search === undefined) {
  alert("please sign in");
} else {
  console.log("you'r password is :" + search.passwrd);
}
