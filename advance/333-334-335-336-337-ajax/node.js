const  http=require("http")


let users=[
    {id:1, name:"minoo", age:20},
    {id:2, name:"kimia", age:18},
    {id:3, name:"maryam", age:22}
]
let courses=[
    {id:1, name:"react", age:20},
    {id:2, name:"javascript", age:18},
    {id:3, name:"maryamdnext js", age:22}
]
http.createServer((req, url)=>{
    if(req.url==="/"){
        res.write("minicode is the bet page! :))")
        res.end()
    }
    else if(req.url==="/api/users"){
        res.write("list of minicode useres")
        res.end()
    }else if(req.url==="/api/courses"){
        res.write("list of minicode coursese")
        res.end()
    }
}).listen(3000)

console.log("server run on port 3000! ");