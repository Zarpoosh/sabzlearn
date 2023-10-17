let head1=document.getElementById("head1");
let head2=document.getElementById("head2");
let head3=document.getElementById("head3");
let head4=document.getElementById("head4");
let head5=document.getElementById("head5");
let head6=document.getElementById("head6");

let listItem=document.getElementById("list-item")
let list=document.getElementById("list");

console.log(head3.parentNode)
console.log(head1.parentElement) 
console.log(head1.previousElementSibling) //قبلی  نمیشه رو آرایه استفاده کرد.
console.log(head1.nextElementSibling) //المنت بعدی  نمیشه رو ارایه استفاده کرد
////////////////////////////////////////////////////


console.log(listItem.nextSibling.nextSibling) //نودبه نود میره جلو 
console.log(listItem.nextSibling.previousSibling) 
console.log(listItem.childElementCount) //فرزندان رو حساب میکنه نه نوه ها رو 
// console.log(listItem.nextElementSibling)    its wrong.beecouse its arry
 
console.log(list.children[2]);
console.log(list.childNodes);
console.log(list.hasChildNodes()) //boolean
console.log(list.firstChild)
console.log(list.lastChild)
console.log(list.firstElementChild)
console.log(list.lastElementChild)
console.log(list.lastElementChild.firstElementChild.style.color="red");
