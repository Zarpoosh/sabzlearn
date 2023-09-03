// map همواره آرایه به ما برمیگرداند. یک عمل یا ویژگی را روی تمام اعضا اعمال میکند و نتیجه را به عنوان ارایه به ما برمیگرداند
// foreach ارایه برنمیگردونه
var scors = [2, 4, 3, 6, 7, 9];
var result = scors.map(function (scor) {
  return scor ** 2;
});
console.log(result);
