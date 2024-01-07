//a middleware
const authority=(req,res,next)=>{

    const {user}=req.query
    if(user==='somash'){
        req.user={name: 'somash',id: 2}
        next();
    }

    else{
        res.status(401,'unauthorized')
    }
}

module.exports=authority;