/*
    --------->Event-Loop: constantly monitors callback queue and microTaskQueue and Gec for perfoming async operations.
*/

const {readFile}=require('fs')

console.log('started a first task')
//check file path
readFile('../subfolder/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res)
    console.log('completed first task')
})
console.log('starting new task')

//2.

console.log('first')
setTimeout(()=>{
    console.log('second')//this goes offloaded
},0)
console.log('third')

//3.simple serInterval

//4.server