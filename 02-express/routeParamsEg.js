const express=require('express')
const app=express()
const path=require('path')
const {people}=require('./data')

app.get('/api/user/:userId',(req,res)=>{
    const {userId}=req.params
    const userDetails=people.find((user)=>{
        return user.id===Number(userId)
    })

    if(!userDetails)
    {
        return res.status(200).send("errrrrrrrr no user found")
    }

    res.json(userDetails)
})


app.listen(4501,()=>{
    console.log('4501.....')
})