let myPromis = new Promise((resolve, regect) => {
  let text = "minicode";
  if (text) {
    resolve(text);
  } else {
    regect(new Error("text is empty!"));
  }
});

console.log(myPromis); //اگهthen , catch  ننویسی هیچی لاگ نمیگیره

myPromis
  .then((response) => {
    console.log(response);
    return response.split("");
  })
  .then((response2) => {
    console.log(response2); //! chaining handler ==>چیزی که از ریترن قبلی میاد  میره تو thenبعدی 
    return response2.reverse()
  })
.then((response3)=>{
    console.log(response3)
    return response3.join("")
})
.then((response4)=>{
    console.log(response4)
})
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("its finished")
// })
