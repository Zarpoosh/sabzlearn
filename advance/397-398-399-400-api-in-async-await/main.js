// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(res=> console.log(res.json()))
// .then(data=>{
//     data.forEach((post, index)=>{
//         console.log(`${index+1}`);
//     })
// })


//------------------------------------------------------------
// async await way

async function getPost(params) {
    try{

        let res=await fetch("https://jsonplaceholder.typicode.com/posts")
        let posts=await res.json()
        console.log(res); 
        
        posts.forEach((post, index)=>{
                 console.log(`Post ==> ${index+1}: ${post}`);
             })
    }
    catch(err){
        console.log("ایجاد خطا: " , err);
        alert("لطفا یه بار دیگه کد را چک بکن")
    }
}
getPost()

