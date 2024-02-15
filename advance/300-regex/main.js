//* regex ===> regular expression  ==>just for strings
//! داخل / نوشته میشه
//
// ?  برای جستوجو در متن .یه الگو و پترن بنویسیم که متن کاربر رو الگو یابی کنیم

const re = /ab+c/;

console.log(re)

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
  }
  
  escapeRegExp("minoo")