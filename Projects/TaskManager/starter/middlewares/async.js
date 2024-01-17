const asyncWrapper=(func)=>{
    return async (req,res,next)=>{
        try{
            await func(req,res,next)  
        }catch(error){
            next(error)//passing it to next middleware.if next handler is not provided the built in handler handles it.
        }
    }
}




module.exports=asyncWrapper