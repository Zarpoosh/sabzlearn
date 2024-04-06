// let pElem=document.querySelector("p")
//TODO ==> shadow dom

const template=document.createElement("template")
template.innerHTML=`
<link rel="stylesheet" href="components/site-User/site-user.css" />
  <slot name="username"></slot> 
  <slot name="job"></slot> 
  <button>Remove</button>

`


class SiteUser extends HTMLElement {
  constructor() {
    super();

    console.log("المنت کاستوم ساخته شد ", this);
    this.attachShadow({mode:"open"})
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }


  //!   اینا خودشون اجرا میشن
  connectedCallback(){
    //TODO  ====> Event handling  write here :)))
    console.log("کامئوننت به دام ملحق شد !");

    let removeBtn=this.shadowRoot.querySelector("button");
    removeBtn.addEventListener("click" ,()=>{
      this.userRemove(this)
    })

  }


  userRemove(el){
    el.remove()
  }

  disconnectedCallback(){
    //TODO  ====> rempve handling
    // console.log("کامئوننت از دام پاک شد ");
    let removeBtn=this.shadowRoot.querySelector("button");
    removeBtn.removeEventListener("click", this.userRemove)

  }
}
// window.customElements.define("site-user", SiteUser);


export {SiteUser}