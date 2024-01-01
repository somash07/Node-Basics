const {readFile,writeFile}=require('fs')
//to avoid wrapping of promiseseeessss
//util module ko promisify is used to make a promise

const util=require('util')
const readFilePromise=util.promisify(readFile)
const writeFilePromise=util.promisify(writeFile)

const start=async()=>{
    try{
        const first=await readFilePromise('./subfolder/first.txt','utf8')
        const second=await readFilePromise('./subfolder/second.txt','utf8')

        console.log(first,second)
        await writeFilePromise('./subfolder/finalres.txt',`hiiii guys: ${first} ${second}`,{flag: 'a'})//append
    }catch(err){
        console.log('this is error')
    }
}
start()
