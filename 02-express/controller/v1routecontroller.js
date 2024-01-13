
const {people}=require('../data')


const getPeople=(req,res)=>{
    res.status(200).json({success:true,data:people})
}

const postPeople=(req,res)=>{
    // console.log(req.body)
    const {name}=req.body

    if(!name){
       return res.status(400).json({success:false,msg:'please enter a messsage '})
    }
    res.status(200).json({success:true,person:name})
}

const postPostman=(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'please enter a messsage '})
    }
    res.status(201).send({success: true,data: [...people,name]})
}

const updatePeople=(req,res)=>{
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
}

const deletePeople=(req,res)=>{
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
}

module.exports={
    getPeople,postPeople,updatePeople,deletePeople,postPostman
}