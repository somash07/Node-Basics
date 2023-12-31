const {readFile,writeFile}=require('fs')

//using promise for asyncFS returns promise
const putText=(path,txt)=>{
    return new Promise((resolve,reject)=>{
        writeFile(path,txt,(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}
const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}

//promise used
// getText('./subfolder/first.txt')
// .then((val)=>console.log(val))
// .catch((err)=>console.log(err))


//async-await
const start=async()=>{
    try{
    const first= await getText('./subfolder/first.txt')
    const second= await getText('./subfolder/second.txt')
    await putText('./subfolder/finalres.txt',first)
    console.log(first,second)
    }catch(error){
        console.log("any errMsg error",error)
    }
}

start()