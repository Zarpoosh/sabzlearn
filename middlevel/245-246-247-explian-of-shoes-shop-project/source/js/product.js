// ✌ :))

let backBtn = document.querySelector("#back");
const products = [
  {
    id: 1,
    name: "sport shoe",
    price: 2100,
    img: "images/1.png",
    para: " 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?",
  },
  {
    id: 2,
    name: "girl shoe",
    price: 43000,
    img: "images/2.png",
    para: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?",
  },
  {
    id: 3,
    name: "montaion shoe",
    price: 76300,
    img: "images/3.png",
    para: "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?",
  },
];
let locationSearch = location.search;
let datailContainer = document.querySelector(".details");
let locationSearchParam = new URLSearchParams(locationSearch);
let mainProductIdParam = locationSearchParam.get("id");

let mainProduct = products.find(function (product) {
  return product.id === Number(mainProductIdParam);
});
datailContainer.insertAdjacentHTML(
  "beforeend",
  '  <div class="desc"><h1>' +
    mainProduct.name +
    "</h1><p>" +
    mainProduct.para +
    '</p></div><div class="image"><img src="' +
    mainProduct.img +
    '" /></div>',
);

backBtn.addEventListener("click", function () {
  history.back();
});
if (mainProduct) {
} else {
  location.href =
    "http://127.0.0.1:5500/245-246-247-explian-of-shoes-shop-project/source/index.html";
}
