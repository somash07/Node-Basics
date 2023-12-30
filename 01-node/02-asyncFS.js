//i will be back at this
const {readFile,writeFile}=require('fs')

readFile('./subfolder/first.txt','utf8',new Promise((res,rej)=>{
    resolve(res)
})
.then((data)=>console.log(data))
)
.catch((err)=>{
    console.log(err)
})