// window.addEventListener("load", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts") //Get
//     .then((res) => res.json())
//     .then((data) => {
//         // console.log(data))
//         data.forEach(post=>console.log(post))
//     });
// });
// ----------------------------------------------------------------------------

let url = "https://jsonplaceholder.typicode.com/posts/";
let postID = prompt("enter the postid that you want :)");

fetch(`${url}${postID}`)
  .then((res) => res.json())
  .then((mainPost) => console.log(mainPost));
