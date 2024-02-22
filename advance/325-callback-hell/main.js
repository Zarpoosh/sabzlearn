//callbackhell ===>Promis

let books = [
  { id: 1, name: "minoo", price: 2000 },
  { id: 2, name: "kimia", price: 5000 },
  { id: 3, name: "romina", price: 23900 },
];
function addBook(name, price) {
  let newBook = {
    id: books.length + 1,
    name,
    price,
  };

  setTimeout(function () {
    books.push(newBook);
  }, 6000);
}

function logBooks(){
    console.log(books)
}
addBook("testBook" , 2_000)
logBooks()