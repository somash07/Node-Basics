//----------->OS-MODULE
const { log } = require('console')
const os=require('os')//builtInModule

console.log(os.userInfo())//returns usr info

console.log(`system is up for ${os.uptime()} seconds`)//returns system up time in seconds

const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)


//-------------->PATH-MODUlE(synchrounous)

const path=require('path')
console.log(path.sep)//separator dinxa
console.log(path.join('/NODE_BASICS','01-node','app.js'))//just jodxa
console.log(path.basename(__dirname))//last ko dinxa

const abs=path.resolve(__dirname,'firstModule.js') 
console.log(abs)

