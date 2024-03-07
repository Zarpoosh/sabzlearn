// یه ارتباط گرفتیم بین بین فرانت و بک ولی هیچ گونه رفرشی انجام نشد



const btn=document.querySelector("button")

btn.addEventListener("click", ()=>{
    // console.log("click");
    fetch("https://randomuser.1me/api/", {
        method:"GET"
    })
    .then(res=>{
        //* code 200 ==>successfully
        // console.log(res);
        if (res.status===200) {
            return res.json()
        } else {
            return new Error("error :/")
        }
    })
    .then(data =>{
        console.log("data", data.results[0]);
    })
    .catch(error=>{
         console.log(error);
    })
})