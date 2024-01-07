//middleware  , express supplies the res,req,next
const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time)
    //either terminate by res.send(smth)

    //or pass it on to next middleware. ALWAYSSSS
    next()

    //if nothing is done from the above 2 conditions, browser keeps on loading on refresh.
}

module.exports=logger