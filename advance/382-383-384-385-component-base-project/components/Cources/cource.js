const template=document.createElement("template")
template.innerHTML=`
    <link rel="stylesheet" href="components/Cources/cource.css">
    <div class="cource-card">
    <div class="cover">
        
    </div>

    <div class="details">
        <h2>js cources</h2>
        <div class="info">
            <p>students: <slot name="students"></slot></p>
            <p>Teacher: <slot name="teacher"></slot></p>
        </div>

        <div class="action">
            <button id="register">Register</button>
            <button id="toggle">Show Details</button>
        </div>
    </div>
</div>
`

class Cource extends HTMLElement{
    constructor(){
        super()
        
        // this.innerHTML="this is header :)"
        this.toggleInfo=false;
        this.attachShadow({mode:'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

   register(comp){
     alert(`your register in courser ${comp.getAttribute("title")}`)
   }
    changeToggle =(comp)=>{
        console.log(this);
        comp.toggleInfo=!comp.toggleInfo
        comp.shadowRoot.querySelector(".info").style.display=comp.toggleInfo ?"block" :"none"
        comp.shadowRoot.querySelector("#toggle").innerHTML=comp.toggleInfo ?"Hide Details" :"Show Details"
    } 
    connectedCallback(){
        // this.shadowRoot.querySelector("img").setAttribute("src", this.getAttribute("cover"))
        this.shadowRoot.querySelector(".details h2").innerHTML= this.getAttribute("title")
        this.shadowRoot.querySelector("#register").addEventListener("click" , ()=>{
            this.register(this)
        })

        this.shadowRoot.querySelector("#toggle").addEventListener("click" , ()=>{
            this.changeToggle(this)
        })

    }
    static observedAttributes(){
        return [ " title" , "cover"]
    }
}

export {Cource}