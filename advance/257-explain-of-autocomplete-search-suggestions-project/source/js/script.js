const $ = document;

const autoCompletewrapper = $.querySelector(".search-input");
const searchInputElem = $.querySelector("input");
const autoCompletBox = $.querySelector(".autocom-box");

searchInputElem.addEventListener("keyup", function () {
  let searchValue = searchInputElem.value;

  if (searchValue) {
    autoCompletewrapper.classList.add("active");
    let filteredWords = suggestions.filter(function (word) {
      //! includes  ==> all of words that have the letter
      //TODO instead includes we write startsWith
      return word.toLowerCase().startsWith(searchValue.toLowerCase());
    });


    suggestionWordsGenerator(filteredWords);

    console.log(filteredWords);
  } else {
    autoCompletewrapper.classList.remove("active");
  }
});


function suggestionWordsGenerator(wordArray){
  let listItemsArray=wordArray.map(function(word){
    return '<li>' +word+ '</li>'
  })

  console.log(listItemsArray);

  let customeListItem; 
  if (listItemsArray.length) {
    customeListItem = '<li>' + searchInputElem.value + '</li>';
  } else {
    customeListItem = listItemsArray.join("");
  }


  autoCompletBox.innerHTML=customeListItem
  select()
  console.log(customeListItem);
}


function select(){
  let allListItems = autoCompletBox.querySelectorAll("li")
  allListItems.forEach(function(wordItem){
    wordItem.addEventListener("click", function(event){
      searchInputElem.value=event.target.textContent
      autoCompletewrapper.classList.remove("active");
    })
  })
}