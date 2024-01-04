/*
   EXPRESSSSS:
   ->express in not a module but a standard way to create web app using node.js
   ->npm install express --save  //-- because old versions of Node,save nahalda package.json ma janna tho, good practice but skipable.
   ->


*/

const express=require('express')//function back from express.

//creating an instance of express application
const app=express()//instantiating


app.get('/',(req,res)=>{//this call back fnx is invoked when user is performing a get req on the root.
   res.status(200).send('hi im home page.')//can pass string,html
})

app.get('/about',(req,res)=>{
   res.status(200).send('hi i am about')
})

app.all('*',(req,res)=>{ //handles all http verbs
   res.status(404).send('<h1 align="center">resource not found</h1>')//chaining is also possible

})

app.listen(4501,()=>console.log('server is running on port 4501'))


//app.get    (default)
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen