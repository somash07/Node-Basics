const login= async (req,res)=>{
    res.send('demo login/register/signup route')
}

const dashboard=async(req,res)=>{
    const luckyNumber=Math.floor(Math.random()*100)
    res.status(200).json({msg: `hello somash`,secret:`this is your random number: ${luckyNumber}`})
}

module.exports={login,dashboard}