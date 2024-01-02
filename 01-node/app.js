const fs=require('fs')
let stream=fs.createReadStream('./subfolder/bigTxt.txt',{encoding: 'utf8'})
stream.on('data',(result)=>{
    console.log(result)
})
st