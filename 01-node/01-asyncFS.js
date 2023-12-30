//callBackHell/pyramidOfDooooooooommmm
//asynchrounous js(non-blocking approach ):  

/*
    easyyyyy its just a callback added at the  back of the encoding methods like readFile('./path','encoding method',(err,res)=>{
        //err handle
        res is the data
    })

*/

const {readFile,writeFile}=require('fs')

console.log('start')
//this program is the demo of callBackHell in async FS 
readFile('./subfolder/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(res)
    const first=res;
    readFile('./subfolder/second.txt','utf8',(err,res)=>{
        if(err){
            console.log(err)
            return
        }
        const second=res;
        writeFile('./subfolder/finalres.txt',`here is res: ${first},${second} `,(err,res)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with writing')
        })
    })
})
console.log('starting new task')