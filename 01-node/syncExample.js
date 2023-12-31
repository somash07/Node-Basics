//synchronous -blocking event loop example

const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("home page")
        return
    }
    if(req.url==='/about'){
        //Blockeeeeeeennnnnnnnng code

        //esma chai about page reload garda time lagxa ra telley aru tab ma or aru ser le kholi home page lai ni delay garxa
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(`${i},${j}`)
            }
        }
        res.end("about page is here")
        return
    }
    res.end('err')
})

server.listen(5010,()=>console.log("server listening on por 5000..."))