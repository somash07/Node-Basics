const CustomAPIError=require('../error/custom-error')
const jwt=require('jsonwebtoken')
require('dotenv').config()


const login= async (req,res)=>{
    if(!username || !password){
        throw new CustomAPIError('please provide email and password',400)
    }

    const id=new Date().getTime()
    //creating a token-> {payload(small)},jwtSecrets,options
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg: 'user created',token})
    // const {username,password}=req.body
    // console.log(username,password)
    // res.send('demo login/register/signup route')
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg: `hello somash`,secret:`this is your random number: ${luckyNumber}`})
}

module.exports={login,dashboard}