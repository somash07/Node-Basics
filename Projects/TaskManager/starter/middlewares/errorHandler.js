//custom error handler in express
const {CustomAPIError}=require('../error/custom-error')
const errorHandlerMiddleware=(err,req,res,next)=>{
    // console.log(err)
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg:'something went wrong'})
}

module.exports=errorHandlerMiddleware


