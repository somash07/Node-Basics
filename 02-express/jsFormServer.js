const express=require('express')
const app=express()
const axios=require('axios')
const {people}=require('./data')
const path =require('path')
app.use(express.static(path.resolve(__dirname,'Form-httpMethods')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.get('/api/v1',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/api/v1',(req,res)=>{
    // console.log(req.body)

    const {name}=req.body

    if(!name){
       return res.status(400).json({success:false,msg:'please enter a messsage '})
    }
    res.status(200).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please enter a messsage '})
    }
    res.status(201).send({success: true,data: [...people,name]})
})

//edit or delete conventionally route params are used

app.put('/api/people/:id',(req,res)=>{
    const {id}=(req.params)
    const {name}=req.body//smth is sent also for update so
    
    const person=people.find((person)=>{
        return person.id===Number(id)
    })

    if(!person){
        return res.status(400).json({success:false,msg:`no person woth the id ${id}`})
    }

    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,data:newPeople})
})

app.delete('/api/people/:id',(req,res)=>{
    const person=people.find((person)=>{
        return person.id===Number(req.params.id)
    })

    if(!person){
        return res.status(400).json({success:false,msg:`no person woth the id ${req.params.id}}`})
    }

    // if(person.id!==Number(req.params.id)){
    //     return person
    // }
    const newPeople=people.filter((person)=>person.id!==Number(req.params.id))

    res.status(200).json({success:true,data: newPeople})
})
app.listen(4501,()=>{
    console.log('4501......')
})