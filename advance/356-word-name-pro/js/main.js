const $ = document;

const inputSearch = $.querySelector("input");
const serachBtn = $.querySelector("button");
const word = $.querySelector(".word");
const type = $.querySelector(".type");
const meaning = $.querySelector(".meaning");

inputSearch.addEventListener("keypress", (e) => {
  console.log("entered");
  if (e.keyCode === 13) {
    fetchData();
    inputSearch.value = "";
  }
});

serachBtn.addEventListener("click", () => {
  console.log("click");
  fetchData();
  inputSearch.value = "";
  if ((inputSearch.value = "")) {
    alert("enter a word !");
  }
});

let apiData = {
  url: "https://api.dictionaryapi.dev/api/v2/entries/en/",
};

function fetchData() {
  fetch(`${apiData.url}${inputSearch.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showData(data);
    });
}

function showData(data) {
  word.innerHTML = `${data[0].word} `;
  type.innerHTML = `${data[0].meanings[0].partOfSpeech}  ${data[0].phonetic} `;
  meaning.innerHTML = `${data[0].meanings[0].definitions[0].definition}`;
}
