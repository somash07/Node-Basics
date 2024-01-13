
const login=(req,res)=>{
    console.log(req.body)
    const {fname}=req.body
    if(fname){
        return res.status(200).send(`welcome ${fname}`)
    }
    res.send('please provide credentials')
}

module.exports={login}