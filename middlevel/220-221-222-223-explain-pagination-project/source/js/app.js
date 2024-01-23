// توی بک اند همشون توی دیتا بیس ذخیره میشن ولی اینجا توی آرایه توی فرانت ذخیره میکنیم.
const listItems = [
  { id: 1, name: "Amin", family: "Saeedi Rad" },
  { id: 2, name: "Amir", family: "Zehtab" },
  { id: 3, name: "Qadir", family: "Yolme" },
  { id: 4, name: "Babak", family: "Mohammadi" },
  { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 6, name: "Amin", family: "Saeedi Rad" },
  { id: 7, name: "Amir", family: "Zehtab" },
  { id: 8, name: "Qadir", family: "Yolme" },
  { id: 9, name: "Babak", family: "Mohammadi" },
  { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

  { id: 11, name: "Saeed", family: "Ehsani" },
  { id: 12, name: "Siamak", family: "Modiri" },
  { id: 13, name: "Mohsen", family: "Ansari" },
  { id: 14, name: "Mehran", family: "Ali Pour" },
  { id: 15, name: "Amir Hossein", family: "Mahtabi" },

  { id: 16, name: "Hossein", family: "Amino" },
  { id: 17, name: "Melika", family: "Ehsani" },
  { id: 18, name: "Qadir", family: "Yolme" },
  { id: 19, name: "Fatemeh", family: "Alilou" },
  { id: 20, name: "Ehsan", family: "Tayyebi" },

  { id: 21, name: "Zahra", family: "Gholami" },
  { id: 22, name: "Matin", family: "Sahebi" },
];

const $ = document;
let userListContainer = $.querySelector("#list");
let paginationContainer = $.querySelector("#pagination");

// کل ئروژه وتبسته به این دو تا variable
let currentPage = 1;
let rowsCount = 5;

function displayUserList(
  allUsersArray,
  usersContainer,
  rowsCount,
  currentPage,
) {
  userListContainer.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedUsers = allUsersArray.slice(startIndex, endIndex);
  paginatedUsers.forEach(function (user) {
    let userElement = $.createElement("div");
    userElement.innerHTML = user.name + " " + user.family;
    userElement.classList.add("item");
    usersContainer.appendChild(userElement);

    console.log(userElement);
    console.log(paginatedUsers);
  });
}

function setupPagination(allUsersArray, pagesContainer, rowsCount) {
  pagesContainer.innerHTML = "";
  let pagesCount = Math.ceil(allUsersArray.length / rowsCount);

  for (let i = 1; i < pagesCount + 1; i++) {
    let btn = paginationBtnGenerator(i, allUsersArray);
    pagesContainer.appendChild(btn);
  }
}

function paginationBtnGenerator(page, allUsersArray) {
  let button = $.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }
  button.addEventListener("click", function () {
    currentPage = page;
    displayUserList(allUsersArray, userListContainer, rowsCount, currentPage);

    let prevPage = $.querySelector("button.active");
    prevPage.classList.remove("active");
    button.classList.add("active");
  });
  return button;
}
displayUserList(listItems, userListContainer, rowsCount, currentPage);
setupPagination(listItems, paginationContainer, rowsCount);
