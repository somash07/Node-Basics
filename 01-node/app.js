const http=require('http')


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("home page")
        return
    }
    if(req.url==='/about'){
        //Blockeeeeeeennnnnnnnng code
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i},${j}`)
            }
        }
        res.end("about page")
        return
    }
    res.end('err')
})

server.listen(5010,()=>console.log("server listening on por 5000..."))