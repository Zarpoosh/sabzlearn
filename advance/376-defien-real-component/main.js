// let pElem=document.querySelector("p")

//TODO ==> shadow dom

class SiteUser extends HTMLElement {
  constructor() {
    super();

    console.log("المنت کاستوم ساخته شد ", this);
    this.innerHTML = `
    <style>
      h1{
        color:blue;
      }
    </style>
    
    <h1>minoo</h1>`;
  }
}
window.customElements.define("site-user", SiteUser);
