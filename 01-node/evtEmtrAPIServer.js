//creating a server.

const http=require('http')

//using Event Emitter API

const server=http.createServer()
//listen to the event 'request'
server.on('request',(req,res)=>{
    res.end('this is response frm server')
})

//listen to the event 'error'
server.on('error', (error) => {
    console.error('Error starting the server:', error.message);
})


server.listen(4501,()=>{
    console.log("running")
})


//lsof -i :<pid>
//kill -9 <pid>