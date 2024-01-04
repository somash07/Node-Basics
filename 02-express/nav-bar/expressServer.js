const express= require('express')
const path=require('path')

const app=express()

//setup static and middleware
// app.use(express.static('./public'))

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res) => {
   res.sendFile(path.resolve(__dirname,'./index.html'))
})
//for index renderring we can just add index.html to the public.
//SSR->later....
app.all('*',(req,res)=>{
   res.status(404).send("resource not found")
})
app.listen(4501,()=>{
   console.log('server is listening on port 4501....')
})