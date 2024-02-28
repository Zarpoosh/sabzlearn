const loadExternalfile = (cdn) => {
  return new Promise((resolve, reject) => {
    const linkTag = document.createElement("link");
    linkTag.rel = "stylesheet";
    linkTag.href = cdn;
    linkTag.onload = () => resolve("load sucessfully!");
    linkTag.onerror = () => reject(new Error("Error loading"));


    document.head.appendChild(linkTag);
  });
};


loadExternalfile("./css/main.css")
.then((response)=>{
    console.log(response)
    document.body.insertAdjacentHTML("afterbegin", `<h1 class="message">css external file : ${response}</h1>`)
})
.catch((err)=>{
    console.log(err)
})