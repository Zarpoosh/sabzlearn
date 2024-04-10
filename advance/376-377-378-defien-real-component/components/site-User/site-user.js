// let pElem=document.querySelector("p")
//TODO ==> shadow dom

const template=document.createElement("template")
template.innerHTML=`
<link rel="stylesheet" href="components/site-User/site-user.css" />
  <slot name="username"></slot> 
  <slot name="job"></slot> 

`


class SiteUser extends HTMLElement {
  constructor() {
    super();

    console.log("المنت کاستوم ساخته شد ", this);
    this.attachShadow({mode:"open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
// window.customElements.define("site-user", SiteUser);


export {SiteUser}