const {writeFileSync}=require('fs')

for(let i=0;i<1000;i++){
    writeFileSync('./bigTxt.txt',`hello world`,{'flag':'a'})
}
