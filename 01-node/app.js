const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/')// '/' indicates a homepage
    {
        res.end("welcome to home")
    }
    if(req.url==='/about'){
        res.end("here is abtme")
    }
    
    res.end(`
        <h1>ooppppppps!!!</h1>
        <p>cant find page</p>
        <a href="/">home</a>
    `)
})

server.listen(4501)
