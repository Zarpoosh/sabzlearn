let $ = document;
const title = $.querySelector("#title");
const author = $.querySelector("#author");
const year = $.querySelector("#year");
const addBookBtn = $.querySelector(".addBookBtn");
const bookContainer = $.querySelector("#book-list");

let books = [];
addBookBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");

  let titleInputValue = title.value;
  let authorInputValue = author.value;
  let yearInputValue = year.value;

  let newBookObj = {
    id: books.length + 1,
    title: titleInputValue,
    author: authorInputValue,
    year: yearInputValue,
  };
  books.push(newBookObj);

  setInputLocalStorage(books);
});
function setInputLocalStorage(allBooksArray) {
  localStorage.setItem("books", JSON.stringify(allBooksArray));

  makeEmptyInputs();
  booksGenerator(allBooksArray);
}
function makeEmptyInputs() {
  title.value = "";
  author.value = "";
  year.value = "";
}
function booksGenerator(allBooksArray) {
  allBooksArray.forEach(function (book) {
    newBookTrElem = $.createElement("tr");

    let newTitleElemTh = $.createElement("th");
    newTitleElemTh.innerHTML = book.title;

    let newAuthorElemTh = $.createElement("th");
    newAuthorElemTh.innerHTML = book.author;

    let newYearElemTh = $.createElement("th");
    newYearElemTh.innerHTML = book.year;

    newBookTrElem.append(newTitleElemTh, newAuthorElemTh, newYearElemTh);

    bookContainer.append(newBookTrElem);
  });
  console.log(newBookTrElem);
}
