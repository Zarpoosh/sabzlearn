// just  >> strings << save

function insertName() {
  console.log("insert");

  // key:name    value:'minoo'
  localStorage.setItem("name", "minoo");
  localStorage.setItem("id", 12);

  // array
  localStorage.setItem("users", [
    "minoo",
    "mohammad",
    "zarpoosh",
    "rahgoshayi",
  ]); //its string
  localStorage.setItem(
    "users2",
    JSON.stringify(["minoo", "mohammad", "zarpoosh", "rahgoshayi"]),
  );
}
function getName() {
  let localName = localStorage.getItem("name");
  let localId = localStorage.getItem("id");
  let localUers = localStorage.getItem("users");
  let localUers2 = JSON.parse(localStorage.getItem("users2"));
  console.log(localName);
  console.log(typeof localId);
  console.log(typeof localUers);
  console.log(typeof localUers2);
}

function clearData() {
  localStorage.clear();
}
