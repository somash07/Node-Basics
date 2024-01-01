const http=require('http')
const fs=require('fs')
const { log } = require('console')

http.createServer((req,res)=>{
    // const text=fs.readFileSync('./subfolder/bigTxt.txt','utf8')
    // res.end(text)

    const fileStream=fs.createReadStream('./subfolder/bigTxt.txt',{encoding: 'utf8'})
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        console.log(err)
    })
}).listen(4501,()=>{
    console.log('running')
})