const EventEmitter=require('events')

const newEvent=new EventEmitter()

const http=require('http')

const server=http.createServer()
server.on('request',(req,res)=>{
    res.end("this is the reply ")
    console.log('hiii')
})

server.on('error',(error)=>{
    console.log(error)
})

server.listen(4501,()=>{
    console.log('4501.....')
})
