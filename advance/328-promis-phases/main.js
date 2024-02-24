// ? rpomis phases   ==>>pending (حالت ریجکت یا ریزولو مشخص نشده )===>resilve :fullfiled   regect: regected





//callbackhell ===>Promis

let books = [
  { id: 1, name: "minoo", price: 2000 },
  { id: 2, name: "kimia", price: 5000 },
  { id: 3, name: "romina", price: 23900 },
];
function addBook(name, price, callback) {
  let newBook = {
    id: books.length + 1,
    name,
    price,
  };
  

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      books.push(newBook);
      // callback();    به  جای این پرامیس مینویسیم
      books.push(newBook);
      if (books.push(newBook)) {
        resolve();
      } else {
        regect();
      }
    });
  }, 6000);
}

addBook("golestan", 20_000).then(()=>{
    console.log(books)
}) //addBook("testBook", 2_000, logBooks);

//////////////////////////////////////////////////////////////////
// Promis ==> قول دادن و ES6 ==>(resolved, regected)=> are callback function

let myPromis = new Promise((resolve, regect) => {
  const loginFlag = false;
  resolve("success")
  regect(new Error("not found! :/"))

  setTimeout(() => {
    console.log("logged in check");

    // if (loginFlag) {
    //   resolve("شما یمتوانید وارد ئنل کاربری شووید. ");
    // } else {
    //   regect("شما نمیتوانید وارد ئنل کاربر یشوید");
    // }
  }, 3000);
});

// function success() {
//   console.log("success");
// }
// function error() {
//     console.log("error :((");
//   }

// myPromis(); //! its not a function
//* myPromis.then(success , error);

myPromis
  .then((success) => console.log(success))
  .catch((error) => console.log( error));


  console.log(myPromis);