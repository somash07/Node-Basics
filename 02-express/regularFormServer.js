// const people = [
//     { id: 1, name: 'john' },
//     { id: 2, name: 'peter' },
//     { id: 3, name: 'susan' },
//     { id: 4, name: 'anna' },
//     { id: 5, name: 'emma' },
// ]

const express=require('express')
const {people}=require('./data')
const path=require('path')
const app=express()

app.use(express.static(path.resolve(__dirname,'Form-httpMethods')))  //absolute path

//parse form data
app.use(express.urlencoded({extended: false})) //parses incoming req with urlencoded payloads based on body parser. extended->parsing data with query string library when false and qslibrary when true
app.post('/login',(req,res)=>{
    console.log(req.body)
    const {name}=req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
        return
    }
    res.send('please provide credentials')
})

app.listen(4501,()=>console.log('listeninsg to port 4501'))

// The extended: false option indicates that the values in the URL-encoded data should be strings or arrays, rather than complex objects. This is a configuration option provided by the body-parser middleware
