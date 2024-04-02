let users = [
  { id: 1, name: "minoo", score: 90 },
  { id: 2, name: "mohammad", score: 23 },
  { id: 3, name: "ali", score: 34 },
  { id: 4, name: "dady", score: 87 },
  { id: 5, name: "mmy", score: 45 },
];

//!   =====>>مقدار ماکزیمم در یک ارایه 

let maxScore = users.reduce((prevScore, currentUser) => {
  // console.log(prevUser.score, currentUser.score);
  // return currentUser

  if (prevScore < currentUser.score) {
    return currentUser.score;
  } else {
    return prevScore;
  }
}, 0);

console.log("max score ", maxScore);
