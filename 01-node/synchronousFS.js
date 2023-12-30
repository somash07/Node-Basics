//------------->FILESYSTEM-MODULE
//tyo types either asynchronously-non blocking,synchrously-blocking

const {readFileSync,writeFileSync} = require('fs')

const first=readFileSync('./subfolder/first.txt','utf8')//utf8 is an encoding tech
console.log(first)
//write file syntax: 
//writeFileSync('path','msg',{flag: 'a'})->append garxan
writeFileSync('./subfolder/first.txt',` ${first} `,{flag: 'a'})
