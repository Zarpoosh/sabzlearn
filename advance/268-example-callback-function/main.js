let books = [
  { id: 1, name: "book1", price: 2000 },
  { id: 2, name: "book2", price: 6500 },
  { id: 3, name: "book3", price: 26500 },
  { id: 4, name: "book4", price: 82000 },
];

function addBook(name, price, callback) {
  let newBook = {
    id: books.length + 1,
    name: name,
    price: price,
  };

  setTimeout(function () {
    books.push(newBook);
    callback();
  }, 4000);
}

function logBooks() {
  console.log(books);
}

addBook("minoo", 54000, logBooks);
