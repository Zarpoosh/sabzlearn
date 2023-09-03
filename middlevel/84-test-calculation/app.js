var allquestions = [
  { id: 1, title: "2+2", answer: "4" },
  { id: 2, title: "2*4", answer: "8" },
  { id: 3, title: "7**2", answer: "49" },
  { id: 4, title: "12/4", answer: "3" },
  { id: 5, title: "100*2", answer: "200" },
];

var score = 0;
var mainAnswer = "";
allquestions.forEach(function (question) {
  mainAnswer = prompt(question.title + "?");
  if (mainAnswer === question.answer) {
    score++;
  }
});
alert("final score: " + score);
