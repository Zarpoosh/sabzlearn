const template=document.createElement("template")
template.innerHTML=`
    <link rel="stylesheet" href="components/Header/header.css">
    <div class="header">
        <h2></h2>
    </div>
`

class Header extends HTMLElement{
    constructor(){
        super()
        
        // this.innerHTML="this is header :)"
        
        this.attachShadow({mode:'open'})

        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector("h2").innerHTML=this.getAttribute("header-title")
    }
    static observedAttributes(){
        return ["header-title"]
    }
}

export {Header}